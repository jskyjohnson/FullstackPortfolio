import {
  Arg,
  FieldResolver,
  Query,
  Mutation,
  Resolver,
  Root
} from 'type-graphql';

@Resolver()
export default class {

  @Query(returns => String)
  hello(): String {
    return 'Welcome';
  }

}