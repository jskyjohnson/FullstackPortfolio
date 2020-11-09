import { BlogsHome } from "containers/home/BlogsHome";
import { ContactHome } from "containers/home/ContactHome";
import { HomeTitle } from "containers/home/HomeTitle";
import { Projects } from "containers/home/Projects";
import { Skills } from "containers/home/Skills";
import React, { Fragment } from "react";
import { Divider } from "semantic-ui-react";
import { PageHeader } from "../components/pageheader/PageHeader";

export const Home = () => {
  return (
    <>
      <section>
        <HomeTitle />

        <Projects />

        <Skills />

        {/* Skills */}

        <BlogsHome />
        {/* Blogging */}

        <ContactHome />

        {/* <ContactMe /> */}
      </section>
    </>
  );
};
