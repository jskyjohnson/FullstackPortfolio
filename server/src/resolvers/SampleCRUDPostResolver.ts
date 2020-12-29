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
} from "type-graphql";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { SampleCRUDPost } from "../entity/SampleCRUDPost";
import { isAuth } from "../isAuth";
import { MyContext } from "../MyContext";
import { Admin } from "../entity/Admin";

@ObjectType()
class SampleCRUDPostResponse {
  @Field()
  id: string;
}

@ObjectType()
class SampleCRUDUpdateResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field()
  post: SampleCRUDPost;
}

@Resolver()
export class SampleCRUDPostResolver {
  //Create
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async CreateSampleCRUDPost(
    @Arg("title") title: string,
    @Arg("content", (type) => [[String]]) content?: string[][]
    //@Ctx() { payload }: MyContext
  ) {
    try {
      await SampleCRUDPost.insert({
        title,
        content,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }

  //Read (all)
  @Query(() => [SampleCRUDPost])
  async GetPosts() {
    return await SampleCRUDPost.find();
  }

  @Query(() => SampleCRUDPost)
  async GetPost(@Arg("id") id: number) {
    const post = await SampleCRUDPost.findOne(id);

    if (!post) {
      console.log("ERROR");
      return null;
    }

    return post;
  }
  //Update

  @Mutation(() => SampleCRUDUpdateResponse)
  @UseMiddleware(isAuth)
  async UpdateSampleCRUDPost(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Arg("content", (type) => [[String]]) content?: string[][]
    //@Ctx() { payload }: MyContext
  ) {
    let samplepost = await SampleCRUDPost.findOne({ where: { id } });

    if (samplepost === undefined) {
      return {
        success: false,
        message: "Unable to find post with id: " + id,
        post: {
          id: 0,
          title: "",
          content: [[]],
        },
      };
    }

    try {
      await SampleCRUDPost.update(
        { id },
        {
          title,
          content,
        }
      );
    } catch (err) {
      console.error("ERR" + err);
      return {
        success: false,
        message: "failed to update",
        post: samplepost,
      };
    }

    return {
      success: true,
      message: "successfully Updated",
      post: samplepost,
    };
  }

  @Mutation(() => SampleCRUDUpdateResponse)
  async UpdateNoAuth(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Arg("content", (type) => [[String]]) content?: string[][]
    //@Ctx() { payload }: MyContext
  ) {
    let samplepost = await SampleCRUDPost.findOne({ where: { id } });

    if (samplepost === undefined) {
      return {
        success: false,
        message: "Unable to find post with id: " + id,
        post: {
          id: 0,
          title: "",
          content: [[]],
        },
      };
    }

    try {
      await SampleCRUDPost.update(
        { id },
        {
          title,
          content,
        }
      );
    } catch (err) {
      console.error("ERR" + err);
      return {
        success: false,
        message: "failed to update",
        post: samplepost,
      };
    }

    return {
      success: true,
      message: "successfully Updated",
      post: samplepost,
    };
  }

  //Delete

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async DeleteSampleCrudPost(
    @Arg("id", () => Int) id: number
    //@Ctx() { payload }: MyContext
  ) {
    console.log("DELETING")
    try {
      await SampleCRUDPost.delete({ id });
    } catch (err) {
      console.error("ERR" + err);
      return false;
    }

    return true;
  }
}
