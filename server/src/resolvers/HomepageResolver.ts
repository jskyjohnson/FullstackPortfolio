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
import { Homepage } from "../entity/Homepage";
require("dotenv").config();

@ObjectType()
class HomepageUpdateResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field((type) => Homepage, { nullable: true })
  homepage: Homepage;
}

@InputType()
class HomepageInput {

  // @Field({nullable: true})
  // @Column("text", {nullable: true})
  // json: string;

  @Field({ nullable: true })
  hero_intro: string;

  @Field({ nullable: true })
  intro_text: string;

  @Field({ nullable: true })
  carousel_text: string;

  @Field({ nullable: true })
  hero_portrait: string;

  @Field(() => [String], { nullable: true })
  carousel_text_values: [string];
}

@Resolver()
export class HomepageResolver {
  //Get socials (with user id?)
  @Query(() => Homepage)
  async GetHomepage(@Arg("id") id: Number) {
    const userHomepage = await Homepage.findOne(+id);
    return userHomepage;
  }

  @Mutation(() => HomepageUpdateResponse)
  async UpdateHomepage(
    @Ctx() { payload }: MyContext,
    @Arg("content", (type) => HomepageInput) content: HomepageInput
  ) {
    let userId = payload?.userId;
    const entityManager = getManager();
    const userHomepage = await entityManager.findOne(Homepage, userId);

		console.log(userHomepage);
    if (userHomepage === undefined) {
      //Inserting first value...
      // const usrHom = {
      //   id: +userId!,
      //   hero_intro: content.hero_intro,
      //   intro_text: content.intro_text,
      //   carousel_text: content.carousel_text,
      //   hero_portrait: content.hero_portrait,
      //   carousel_text_values: content.carousel_text_values,
      // };

      // await entityManager.insert(Homepage, usrHom);

      return {
        success: false,
        message: "Error in finding socials with id " + payload?.userId,
        socials: userHomepage,
      };
    }

    try {
      userHomepage.hero_intro = content.hero_intro;
      userHomepage.intro_text = content.intro_text;
      userHomepage.carousel_text = content.carousel_text;
      userHomepage.hero_portrait = content.hero_portrait;
			userHomepage.carousel_text_values = content.carousel_text_values;
			
			await Homepage.save(userHomepage!);
			
    } catch (err) {
      console.error("ERR SOCIALS " + err);
      return {
        success: false,
        message: "Error in updating socials with id " + payload?.userId,
        socials: null,
      };
    }

    if (userHomepage != null) {
      return {
        success: true,
        message: "Successfully Updated Value On " + payload?.userId,
        socials: userHomepage,
      };
    } else {
      return {
        success: false,
        message: "Something went wrong on " + payload?.userId,
        socials: userHomepage,
      };
    }
  }

  //UPDATE

  //POST?

  //DELETE?
}
