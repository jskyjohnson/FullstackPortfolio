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


@InputType()
class ServicesInput {

	@Field()
	app: String;
	
	@Field()
	account: String;
	
	@Field()
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

  @Field()
  category: string;

  @Field(() => [String])
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

  @Field(() => [ExperiencesInput],  { nullable: true })
  experience: ExperiencesInput[];

  @Field(() => [SoftwaresInput], { nullable: true })
  softwares: SoftwaresInput[];

  @Field(() => [[String]], { nullable: true })
  info: string[][];

  @Field(() => [[String]], { nullable: true })
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

  @Field((type) => AboutInput)
  about: AboutInput;

  @Field((type) => ContactInput)
  contact: ContactInput;
}

@ObjectType()
class UserUpdateResponse {
  @Field()
  success: Boolean;

  @Field()
  message: String;

  @Field()
  user: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User)
  async GetUser(@Arg("id") id: Number) {
    return await User.findOne(+id);
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
    if (user === undefined) {
      return {
        success: false,
        message: "Error in finding user with id " + payload?.userId,
        user: retUser,
      };
    }

    try {
      //ADD EVERYTHING!
      console.log(content.about.info);
      retUser = await User.update(userId!, {
        title_name: String(content.title_name),
        first_name: String(content.first_name),
        last_name: String(content.last_name),
        footerMessage: String(content.footerMessage),
        about: { 
          about_pic: String(content.about.about_pic),
          about_header_message: String(content.about.about_header_message),
          info: content.about.info,
          // bios: content.about.bios,
          // experience: String(content.about.experience)
        },
        // contact: {...content.contact}
      });
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
