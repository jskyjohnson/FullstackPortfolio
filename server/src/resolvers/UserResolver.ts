import { User } from "../entity/User";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
  Int,
  Ctx,
  ArgsType,
  ID,
  InputType,
} from "type-graphql";
import { isAuth } from "../isAuth";
import { userInfo } from "os";
import { MyContext } from "src/MyContext";
import { Softwares } from "src/entity/Softwares";

@InputType()
class ServicesInput {
  @Field({ nullable: true })
  app: String;

  @Field({ nullable: true })
  account: String;

  @Field({ nullable: true })
  profileUrl: String;
}

@InputType()
class ContactInput {
  @Field({ nullable: true })
  email: String;

  @Field({ nullable: true })
  location: String;

  @Field({ nullable: true })
  lat: String;

  @Field({ nullable: true })
  long: String;

  @Field(() => [ServicesInput], { nullable: true })
  services: [ServicesInput];

  @Field(() => [[String]], { nullable: true })
  contactMessage: [String];
}

@InputType()
class SoftwaresInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  category: string;

  @Field(() => [String], { nullable: true })
  list: string[];
}

@InputType()
class ExperiencesInput {
  @Field(() => Number)
  id: number;

  @Field({ nullable: true })
  organization: string;

  @Field({ nullable: true })
  job: string;

  @Field({ nullable: true })
  date: Date;

  @Field({ nullable: true })
  location: string;
}

@InputType()
class AboutInput {
  @Field({ nullable: true })
  about_pic: string;

  @Field({ nullable: true })
  about_header_message: string;

  @Field((type) => [ExperiencesInput], { nullable: true })
  experience: ExperiencesInput[];

  @Field((type) => [SoftwaresInput], { nullable: true })
  softwares: SoftwaresInput[];

  @Field((type) => [[String]], { nullable: true })
  info: string[][];

  @Field((type) => [[String]], { nullable: true })
  bios: string[][];
}

@InputType()
class UserInfoInput {
  @Field({ nullable: true })
  title_name: String;

  @Field({ nullable: true })
  first_name: String;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  footerMessage: string;

  @Field((type) => AboutInput, { nullable: true })
  about: AboutInput;

  @Field((type) => ContactInput, { nullable: true })
  contact: ContactInput;
}

@ObjectType()
class UserUpdateResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field((type) => User, { nullable: true })
  user: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User)
  async GetUser(@Arg("id") id: Number) {
    let retUser = await User.findOne(+id);
    return retUser;
  }

  @Mutation(() => UserUpdateResponse)
  @UseMiddleware(isAuth)
  async UpdateUserData(
    // @Arg("id", () => Int) id: number,
    @Ctx() { payload }: MyContext,
    @Arg("content", (type) => UserInfoInput) content: UserInfoInput
  ) {
    // console.log("TEST");
    console.log(payload?.userId);

    let userId = payload?.userId;
    let user = await User.findOne({ where: { id: payload?.userId } });

    let retUser = null;
    let retServices = null;
    let retSoftwares = null;
    let retExperiences = null;

    if (user === undefined) {
      return {
        success: false,
        message: "Error in finding user with id " + payload?.userId,
        user: retUser,
      };
    }

    try {
      //ADD EVERYTHING!
      console.log(content.about.softwares);

      //about.Softwares

      // retSoftwares = await Softwares.update(userId!, {});

      //about.Experiences

      //contact.services
      let usr = {
        id: +userId!,

        title_name: String(content.title_name),
        first_name: String(content.first_name),
        last_name: String(content.last_name),
        footerMessage: String(content.footerMessage),
        about: {
          about_pic: String(content.about.about_pic),
          about_header_message: String(content.about.about_header_message),
          info: content.about.info,
          bios: content.about.bios,
          // experience: String(content.about.experience)

          //Now how do i save experiences and softwares?
        },
        // contact: {...content.contact}
      };

      retUser = await User.preload(usr);
    } catch (err) {
      console.error("ERR" + err);
      return {
        success: false,
        message: "Error in updating user with id " + payload?.userId,
        user: null,
      };
    }
    return {
      success: true,
      message: "test",
      user: retUser,
    };
  }

  //Update values..
}
