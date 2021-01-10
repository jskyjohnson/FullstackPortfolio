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
import { Socials } from "../entity/Socials";
require("dotenv").config();

@ObjectType()
class SocialsUpdateResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field((type) => Socials, { nullable: true })
  socials: Socials;
}

@InputType()
class SocialInput {
  @Field(() => Number)
  id: number;

  @Field({ nullable: true })
  username: String;

  @Field({ nullable: true })
  media: String;
}

@InputType()
class SocialsInfoInput {
  @Field((type) => [SocialInput], { nullable: true })
  socials: [SocialInput];
}

@Resolver()
export class SocialsResolver {
  //Get socials (with user id?)
  @Query(() => Socials)
  async GetSocials(@Arg("id") id: Number) {
		const userSocials = await Socials.findOne(+id);
    return userSocials;
	}
	

	@Mutation(() => SocialsUpdateResponse)
  async UpdateSocials(
    @Ctx() { payload }: MyContext,
    @Arg("content", (type) => SocialsInfoInput) content: SocialsInfoInput
  ) {
    const str = JSON.stringify(content);
    let userId = payload?.userId;
    const entityManager = getManager();
    const userSocials = await entityManager.findOne(Socials, userId);

    if (userSocials === undefined) {

			//Inserting first value...
			const usrSoc = {
				id : +userId!,
				json: str
			}
			await entityManager.insert(Socials, usrSoc);

      return {
        success: false,
        message: "Error in finding socials with id " + payload?.userId,
        socials: userSocials,
      }; 
    }

    try {
			userSocials!.json = str;
			await Socials.save(userSocials!);

    } catch (err) {
      console.error("ERR SOCIALS " + err);
      return {
        success: false,
        message: "Error in updating socials with id " + payload?.userId,
        socials: null,
      };
    }

    if (userSocials != null) {
      return {
        success: true,
        message: "Successfully Updated Value On " + payload?.userId,
        socials: userSocials,
      };
    } else {
      return {
        success: false,
        message: "Something went wrong on " + payload?.userId,
        socials: userSocials,
      };
    }
  }

  //UPDATE

  //POST?

  //DELETE?
}
