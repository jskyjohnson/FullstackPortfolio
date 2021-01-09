import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  UseMiddleware,
  Ctx,
  InputType,
} from "type-graphql";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { Admin } from "../entity/Admin";
import { isAuth } from "../isAuth";
import { MyContext } from "../MyContext";
import { getManager } from "typeorm";
import { ProjectMenu } from "../entity/ProjectMenu";
require("dotenv").config();

@ObjectType()
class ProjectMenuResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field((type) => ProjectMenu, { nullable: true })
  projectmenu: ProjectMenu;
}

@InputType()
class ProjectMenuInput {
  @Field(() => Number)
  id: number;

  @Field({ nullable: true })
  title: String;

  @Field({ nullable: true })
  filter: String;
}

@InputType()
class ProjectMenuInfoInput {
  @Field((type) => [ProjectMenuInput], { nullable: true })
  projectmenu: [ProjectMenuInput];
}

@Resolver()
export class ProjectMenuResolver {
  //Get socials (with user id?)
  @Query(() => ProjectMenu)
  async GetProjectMenu(@Arg("id") id: Number) {
		const userProjectMenu = await ProjectMenu.findOne(+id);
    return userProjectMenu;
	}
	

	@Mutation(() => ProjectMenuResponse)
  async UpdateProjectMenu(
    @Ctx() { payload }: MyContext,
    @Arg("content", (type) => ProjectMenuInfoInput) content: ProjectMenuInfoInput
  ) {
    const str = JSON.stringify(content);
    let userId = payload?.userId;
    const entityManager = getManager();
    const userProjectMenu = await entityManager.findOne(ProjectMenu, userId);

    if (userProjectMenu === undefined) {
			//Inserting first value...
			// const usrProjectMenu = {
			// 	id : +userId!,
			// 	json: str
			// }
			// await entityManager.insert(ProjectMenu, usrProjectMenu);

      return {
        success: false,
        message: "Error in finding socials with id " + payload?.userId,
        socials: userProjectMenu,
      }; 
    }

    try {
			userProjectMenu!.json = str;
			await ProjectMenu.save(userProjectMenu!);

    } catch (err) {
      console.error("ERR SOCIALS " + err);
      return {
        success: false,
        message: "Error in updating socials with id " + payload?.userId,
        socials: null,
      };
    }

    if (userProjectMenu != null) {
      return {
        success: true,
        message: "Successfully Updated Value On " + payload?.userId,
        socials: userProjectMenu,
      };
    } else {
      return {
        success: false,
        message: "Something went wrong on " + payload?.userId,
        socials: userProjectMenu,
      };
    }
  }

  //UPDATE

  //POST?

  //DELETE?
}
