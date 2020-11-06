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

        <h1>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          doloremque cum magni. Corrupti porro doloribus accusantium fugiat?
          Rerum ducimus minima, perspiciatis odio nesciunt, non dolorum optio
          nemo iure aperiam est!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          reprehenderit vitae fuga, nemo voluptatibus minima quasi cupiditate
          provident sequi magni expedita ipsam voluptates ex neque perferendis
          voluptas, eveniet quidem corporis.
        </p>
      </section>
    </>
  );
};
