import { HomeTitle } from "containers/home/HomeTitle";
import { Projects } from "containers/home/Projects";
import React, { Fragment } from "react";
import { PageHeader } from "../components/pageheader/PageHeader";

export const Home = () => {
  return (
    <>
      <section>
        <HomeTitle />

        <Projects />
      </section>
    </>
  );
};
