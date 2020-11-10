export interface projectsMenu {
  id: number;
  title: string;
  filter: string;
}

export const temp_projectsMenuInfo: projectsMenu[] = [
  {
    id: 1,
    title: "All",
    filter: "*",
  },
  {
    id: 2,
    title: "Software Projects",
    filter: "software",
  },
  {
    id: 3,
    title: "Physical Computation",
    filter: "physical",
  },
  {
    id: 4,
    title: "Astronomy",
    filter: "astronomy",
  },
  {
    id: 5,
    title: "Photography",
    filter: "photo",
  },
  {
    id: 6,
    title: "Graphic Design",
    filter: "graphic",
  },
  {
    id: 7,
    title: "Miscellaneous",
    filter: "misc",
  },
];
