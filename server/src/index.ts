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

const main = async () => {
  const app = express();

  app.set("proxy", 1);
  let db_port = parseInt(process.env.db_port!);
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["dist/entity/**/*.js"],
    migrations: ["dist/migration/**/*.js"],
    subscribers: ["dist/subscriber/**/*.js"],
    synchronize: false,
    logging: true,
  });

  await conn.runMigrations();

  const hashedPassword = await hash(process.env.admin_password as string, 13);

  const admin = new User();
  admin.id = 1;
  admin.name = process.env.admin_username!;
  admin.password = hashedPassword!;
  await User.save(admin);

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, SampleCRUDPostResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
    playground: true
  });

  server.applyMiddleware({ app, cors: { origin: "http://localhost:3000" } });

  const PORT = process.env.PORT || 4000;

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 Server ready at ${server.graphqlPath}`)
  );
};

main().catch((err) => {
  console.error(err);
});
