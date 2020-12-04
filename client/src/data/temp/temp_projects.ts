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
    title: "Fantasy Cleanup Crew",
    subtitle: "Reverse Hack and Slash",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/FantasyCleanupCrew/fcc_thumb.jpg",
    date: new Date("10, 1, 2019"),
    description: [
      [
        "",
        "A class project I made for ATLS Game Development. The premise of the game revolves around the idea that you are hired to clean up the mess of various adventuring heros! However you must be careful since they didn't clear away all of the monsters! I enjoyed making this project since I learned various amounts of basic AI tracking techniques within Unity.",
      ],
    ],
    images: [
      "projects/Software/FantasyCleanupCrew/fcc-0.png",
      "projects/Software/FantasyCleanupCrew/fcc-1.png",
      "projects/Software/FantasyCleanupCrew/fcc-2.png",
      "projects/Software/FantasyCleanupCrew/fcc-3.png",
      "projects/Software/FantasyCleanupCrew/fcc-4.png",
      "projects/Software/FantasyCleanupCrew/fcc-5.png",
    ],
    meta: {
      "itch.io": "https://colinlanphear.itch.io/fantasy-cleanup-corp",
      class: "ATLS 4140, Game Development ",
      Categories: "School Project, Game Development, Unity",
      professor: "Matthew Bethancourt",
      group: "Colin Lanphear, Jacky Cheung, Sky Johnson",
    },
  },
  {
    id: 2,
    title: "Training GANs on Human Contact Networks",
    subtitle: "A Network Analysis Project",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/HumanContactNetworksWithGans/hcnganthumb.jpg",
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
  },{
    id: 3,
    title: "Sample Project 2",
    subtitle: "a test project",
    category: "Software Project",
    filter: "software",
    thumbnail: "placeholder/637x637.jpg",
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
  },{
    id: 4,
    title: "Sample Project 3",
    subtitle: "a test project",
    category: "Software Project",
    filter: "software",
    thumbnail: "placeholder/966x560.jpg",
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
];
