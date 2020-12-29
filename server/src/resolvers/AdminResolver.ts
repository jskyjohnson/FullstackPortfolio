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
import { Admin } from "../entity/Admin";
import { isAuth } from "../isAuth";
import { MyContext } from "../MyContext";
require("dotenv").config();

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class AdminResolver {
  @Query(() => String)
  async hello() {
    return "Hello World";
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  async Me(@Ctx() { payload }: MyContext) {
    return `Your user id : ${payload!.userId}`;
  }

  // @Mutation(() => Boolean)
  // async Register(
  //   @Arg("name") name: string,
  //   @Arg("password") password: string
  // ) {
  //   const hashedPassword = await hash(password, 13);
  //   // let user = null;
  //   try {
  //     await User.insert({
  //       name,
  //       password: hashedPassword
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return false;
  //   }

  //   return true;
  // }

  @Mutation(() => LoginResponse)
  async Login(@Arg("name") name: string, @Arg("password") password: string) {
    // console.log("LOOKING FOR USER WITH : " + name);

    const user = await Admin.findOne({ where: { name } });

    if (!user) {
      throw new Error("Could not find user");
    }

    const verify = await compare(password, user.password);

    if (!verify) {
      throw new Error("Bad password");
    }

    const expirationSeconds = 60 * 60 * 5;

    return {
      accessToken: sign({ userId: user.id }, process.env.secret!, {
        expiresIn: expirationSeconds,
      }),
    };
  }
}
