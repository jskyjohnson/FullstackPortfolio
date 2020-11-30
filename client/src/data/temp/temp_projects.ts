export interface projectsTypes {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  filter: string;
  thumbnail: string;
  date: Date;
  meta: any; //Extra things yatta
  description: string[][];
  images: string[];
}

export const temp_projectsInfo: projectsTypes[] = [
  {
    id: 1,
    title: "Sample Project 1",
    subtitle: "a test project",
    category: "Software Project",
    filter: "software",
    thumbnail: "placeholder/527x500.jpg",
    date: new Date("10, 1, 2019"),
    description: [
      ["", "This is a sample description"],
      [
        "lorem",
        "lorem t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. ",
      ],
      ["", "test hello"],
    ],
    images: [
      "placeholder/527x500.jpg",
      "placeholder/637x637.jpg",
      "placeholder/966x560.jpg",
    ],
    meta: {
      "itch.io": "https://colinlanphear.itch.io/fantasy-cleanup-corp",

      class: "ATLS 4140, Game Development ",
      Categories: "School Project, Game Development, Unity",
      professor: "Matthew Bethancourt",
      group: "Colin Lanphear, Jacky Cheung, Sky Johnson",
    },
  },
  // {
  //   id: 2,
  //   title: "sample 2",
  // 	category: "Photography",
  // 	filter: "photo",
  //   thumbnail: "./placeholder/637x637.jpg",
  // },
  // {
  //   id: 3,
  //   title: "sample 3",
  // 	category: "Computer Science",
  // 	filter: "cs",
  //   thumbnail: "./placeholder/527x600.jpg",
  // },
  // {
  //   id: 4,
  //   title: "sample 4",
  // 	category: "Computer Science",
  // 	filter: "cs",
  //   thumbnail: "./placeholder/966x560.jpg",
  // },
  // {
  //   id: 5,
  //   title: "sample 5",
  // 	category: "Computer Science",
  // 	filter: "cs",
  //   thumbnail: "./placeholder/527x600.jpg",
  // },
  // {
  //   id: 6,
  //   title: "sample 6",
  // 	category: "Computer Science",
  // 	filter: "cs",
  //   thumbnail: "./placeholder/527x600.jpg",
  // },{
  //   id: 7,
  //   title: "sample 7",
  // 	category: "Photography",
  // 	filter: "photo",
  //   thumbnail: "./placeholder/527x600.jpg",
  // },{
  //   id: 8,
  //   title: "sample 8",
  // 	category: "Computer Science",
  // 	filter: "cs",
  //   thumbnail: "./placeholder/966x560.jpg",
  // },{
  //   id: 9,
  //   title: "sample 9",
  // 	category: "Photography",
  // 	filter: "photo",
  //   thumbnail: "./placeholder/1113x510.jpg",
  // },
];
