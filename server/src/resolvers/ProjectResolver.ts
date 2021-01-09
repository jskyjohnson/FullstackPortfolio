import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  UseMiddleware,
  Ctx,
  Int,
  InputType,
  Float,
} from "type-graphql";
import { GraphQLJSONObject } from "graphql-type-json";
import { isAuth } from "../isAuth";
import { Project } from "../entity/Project";
import { MyContext } from "src/MyContext";
import { getManager } from "typeorm";

//Response

@ObjectType()
class ProjectResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field()
  project: Project;
}

//Input

@InputType()
class ProjectInput {

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  subtitle: string;

  @Field({ nullable: true })
  category: string;

  @Field({ nullable: true })
  filter: string;

  @Field({ nullable: true })
  thumbnail: string;

  @Field({ nullable: true })
  date: string;

  //JSON OBJECT (parse it at decode)
  @Field(() => GraphQLJSONObject, { nullable: true })
  meta: object;

  @Field(() => [[String]])
  description: string[][];

  @Field(() => [String], { nullable: true })
  images: [string];
}

//Object Type
@Resolver()
export class ProjectResolver {
  //Create
  @Mutation(() => ProjectResponse)
  @UseMiddleware(isAuth)
  async CreateProject(
    @Arg("content", (type) => ProjectInput) content: ProjectInput,
    @Ctx() { payload }: MyContext
  ) {
    const userId = payload?.userId;
    const entityManager = getManager();
    let project = null;
    try {
      const str = JSON.stringify(content.meta);

      project = {
        title: content.title,
        subtitle: content.subtitle,
        category: content.category,
        filter: content.filter,
        thumbnail: content.thumbnail,
        date: content.date,
        meta: str,
        description: content.description,
        images: content.images,
        userId: +userId!,
      };
      //project.meta = str;

      project = await entityManager.insert(Project, project);
    } catch (err) {
      console.log(" PROJECT CREATION ERR" + err);
      return {
        success: false,
        message: "Failed to create new project",
        project: null,
      };
    }

    return {
      success: true,
      message: "successfully created a new project with id ",
      project: project,
    };
  }
  //Read one
  @Query(() => Project)
  async GetProject(@Arg("id") id: Number) {
    const project = await Project.findOne(+id);
    return project;
  }

  //Read all
  @Query(() => [Project])
  async GetProjects() {
    const project = await Project.find();
    return project;
  }

  //Update
  @Mutation(() => ProjectResponse)
  async UpdateProject(
    @Arg("id", () => Int) id: number,
    @Arg("content", (type) => ProjectInput) content?: ProjectInput
  ) {
    const project = await Project.findOne({ where: { id } });
    const entityManager = getManager();

    if (project === undefined) {
      return {
        success: false,
        message: "Unable to find project with id: " + id,
        project: null,
      };
    }

    try {
			const str = JSON.stringify(content!.meta);
			project.title = content!.title;
			project.subtitle = content!.subtitle;
			project.category = content!.category;
			project.filter = content!.filter;
			project.thumbnail = content!.thumbnail;
			project.date = content!.date;
			project.meta = str;
			project.description = content!.description;
			project.images = content!.images;

      await entityManager.save(Project, project );
			
    } catch (err) {
      console.error("ERR on Project " + err);
      return {
        success: false,
        message: "Unable to update project with id: " + id,
        project: null,
      };
    }

    return {
      success: true,
      message: "Project with id: " + id + " updated successfully!",
      project: project,
    };
  }

	//Delete
	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async DeleteProject(
		@Arg("id", () => Int) id: number
	){
		try {
      await Project.delete({ id });
    } catch (err) {
      console.error("ERR" + err);
      return false;
    }
    return true;
	}
}
