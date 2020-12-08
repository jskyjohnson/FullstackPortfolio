import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { SampleCRUDPost } from "../entity/SampleCRUDPost";
import { isAuth } from "../isAuth";
import { MyContext } from "../MyContext";
import { User } from "../entity/User";

@ObjectType()
class SampleCRUDPostResponse {
  @Field()
  id: string;
  
}

@Resolver()
export class SampleCRUDPostResolver {
  //Create
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async CreateSampleCRUDPost(
    @Arg("title") title: string,
    @Arg("content", (type) => [[String]]) content?: string[][],
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
    return await SampleCRUDPost.find()
	}
	
	@Query(() => SampleCRUDPost)
	async GetPost(
		@Arg("id") id: number,
	){

		const post = await SampleCRUDPost.findOne( id )

		if(!post){
			console.log("ERROR") 
			return null
		}

		return post
	}
  //Update

	@Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async UpdateSampleCRUDPost(
		@Arg("id") id:number,
    @Arg("title") title: string,
    @Arg("content", (type) => [[String]]) content?: string[][],
    //@Ctx() { payload }: MyContext
  ) {
    try {
      await SampleCRUDPost.update( {id}, {
        title,
				content,
      });
    } catch (err) {
			
      console.error("ERR"+err);
      return false;
    }

    return true;
  }

	//Delete
	
	@Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async DeleteSampleCrudPost(
		@Arg("id") id:number,
    //@Ctx() { payload }: MyContext
  ) {
    try {
      await SampleCRUDPost.delete( {id});
    } catch (err) {
			
      console.error("ERR"+err);
      return false;
    }

    return true;
  }
}
