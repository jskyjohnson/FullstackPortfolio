import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { SampleCRUDPostResolver } from "./resolvers/SampleCRUDPostResolver";
import { User } from "./entity/User";
import { hash } from "bcryptjs";
import { userInfo } from "os";

require("dotenv").config();

(async () => {
  const app = express();

  let db_port = parseInt(process.env.db_port!);
  const conn = await createConnection({
    type: "postgres",
    host: process.env.db_host,
    port: db_port,
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscriber/**/*.js"],
    synchronize: true,
    // logging: true,
  });

  // const hashedPassword = await hash(password, 13);
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

  const hashedPassword = await hash( process.env.admin_password as string, 13)
  const admin = new User();
  admin.id = 1;
  admin.name = process.env.admin_username!;
  admin.password = hashedPassword!;
  await User.save(admin)

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, SampleCRUDPostResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app, cors: true });
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();

