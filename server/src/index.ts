import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { buildSchema } from "type-graphql";
import { AdminResolver } from "./resolvers/AdminResolver";
import { SampleCRUDPostResolver } from "./resolvers/unused/SampleCRUDPostResolver";
import { Admin } from "./entity/Admin";
import { hash } from "bcryptjs";
import { userInfo } from "os";
import { UserResolver } from "./resolvers/UserResolver";
import { SocialsResolver } from "./resolvers/SocialsResolver";
import { HomepageResolver } from "./resolvers/HomepageResolver";
import { ProjectMenuResolver } from "./resolvers/ProjectMenuResolver";

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
    synchronize: true,
    logging: true,
  });

  //await conn.runMigrations();

  const hashedPassword = await hash(process.env.admin_password as string, 13);

  const admin = new Admin();
  admin.id = 1;
  admin.name = process.env.admin_username!;
  admin.password = hashedPassword!;
  await Admin.save(admin);

  // const user = new User();
  // user.id = 1;
  // await User.save(user);

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, AdminResolver, SocialsResolver, HomepageResolver, ProjectMenuResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
    playground: true,
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
