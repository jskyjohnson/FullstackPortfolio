import { BlogsHome } from "containers/home/BlogsHome";
import { Contact } from "containers/Contact";
import { HomeTitle } from "containers/home/HomeTitle";
import { Projects } from "containers/home/Projects";
import { Skills } from "containers/home/Skills";
import React, { Fragment } from "react";
import { Divider } from "semantic-ui-react";
import { PageHeader } from "../components/pageheader/PageHeader";
import { ContactHome } from "containers/home/ContactHome";

export const Home = () => {
  return (
    <>
      <section>
        <HomeTitle />

        <Projects />

        <Skills />

        {/* <BlogsHome /> */}

        <ContactHome />
      </section>
    </>
  );
};
