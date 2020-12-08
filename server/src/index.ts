import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { MovieResolver } from "./resolvers/MovieResolver";
import { UserResolver } from "./resolvers/UserResolver";

require("dotenv").config();

(async () => {
  const app = express();

  let db_port = parseInt(process.env.db_port!);
  await createConnection({
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
    logging: true,
  });

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();

