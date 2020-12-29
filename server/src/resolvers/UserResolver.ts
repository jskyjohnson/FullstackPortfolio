import { User } from "../entity/User";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => User)
  async GetUser(@Arg("id") id: number) {
    return await User.findOne(id);
  }
}
