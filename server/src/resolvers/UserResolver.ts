import { Service, User } from "../entity/User";
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
import { MyContext } from "../MyContext";
import { Connection, EntityManager, getManager } from "typeorm";

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
  services: ServicesInput[];

  @Field(() => [String], { nullable: true })
  contactMessage: [string];
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
  date: string;

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
    const entityManager = getManager();

    let userId = payload?.userId;
    const user = await entityManager.findOne(User, userId);

    if (user === undefined) {
      const user = {
        title_name: String(content.title_name),
        first_name: String(content.first_name),
        last_name: String(content.last_name),
        footerMessage: String(content.footerMessage),
        about: {
          about_pic: String(content.about.about_pic),
          about_header_message: String(content.about.about_header_message),
          info: content.about.info,
          bios: content.about.bios,
          experience: JSON.stringify(content.about.experience),
          softwares: JSON.stringify(content.about.softwares),
        },
        contact: {
          email: String(content.contact.email),
          location: String(content.contact.location),
          lat: String(content.contact.lat),
          long: String(content.contact.long),
          contactMessage: content.contact.contactMessage,
          services: JSON.stringify(content.contact.services),
        },
      };

      await User.insert(user);

      return {
        success: false,
        message: "Error in finding user with id " + payload?.userId,
        user: user,
      };
    }

    try {
      //Services, Experience, and Softwares are turned into json strings PLEASE FOR THE LOVE OF GOD FIX THIS
      user.title_name = String(content.title_name);
      user.first_name = String(content.first_name);
      user.last_name = String(content.last_name);
      user.footerMessage = String(content.footerMessage);
      user.about = {
        about_pic: String(content.about.about_pic),
        about_header_message: String(content.about.about_header_message),
        info: content.about.info,
        bios: content.about.bios,
        experience: JSON.stringify(content.about.experience),
        softwares: JSON.stringify(content.about.softwares),
      };
      user.contact = {
        email: String(content.contact.email),
        location: String(content.contact.location),
        lat: String(content.contact.lat),
        long: String(content.contact.long),
        contactMessage: content.contact.contactMessage,
        services: JSON.stringify(content.contact.services),
      };

      await User.save(user);
    } catch (err) {
      console.error("ERR" + err);
      return {
        success: false,
        message: "Error in updating user with id " + payload?.userId,
        user: null,
      };
    }
    if (user != null) {
      return {
        success: true,
        message: "Successfully Updated Value",
        user: user,
      };
    } else {
      return {
        success: false,
        message: "Something went wrong!",
        user: user,
      };
    }
  }

  //Update values..
}
