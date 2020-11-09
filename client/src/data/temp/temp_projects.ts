export interface projectsTypes {
  id: number;
  title: string;
	category: string;
	filter: string;
  thumbnail: string;
}

export const temp_projectsInfo: projectsTypes[] = [
  {
    id: 1,
    title: "sample 1",
		category: "Computer Science",
		filter: "cs",
    thumbnail: "./placeholder/527x500.jpg",
  },
  {
    id: 2,
    title: "sample 2",
		category: "Photography",
		filter: "photo",
    thumbnail: "./placeholder/637x637.jpg",
  },
  {
    id: 3,
    title: "sample 3",
		category: "Computer Science",
		filter: "cs",
    thumbnail: "./placeholder/527x600.jpg",
	},
	{
    id: 4,
    title: "sample 4",
		category: "Computer Science",
		filter: "cs",
    thumbnail: "./placeholder/966x560.jpg",
	},
	{
    id: 5,
    title: "sample 5",
		category: "Computer Science",
		filter: "cs",
    thumbnail: "./placeholder/527x600.jpg",
	},
	{
    id: 6,
    title: "sample 6",
		category: "Computer Science",
		filter: "cs",
    thumbnail: "./placeholder/527x600.jpg",
  },{
    id: 7,
    title: "sample 7",
		category: "Photography",
		filter: "photo",
    thumbnail: "./placeholder/527x600.jpg",
  },{
    id: 8,
    title: "sample 8",
		category: "Computer Science",
		filter: "cs",
    thumbnail: "./placeholder/966x560.jpg",
  },{
    id: 9,
    title: "sample 9",
		category: "Photography",
		filter: "photo",
    thumbnail: "./placeholder/1113x510.jpg",
  },
];

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
    title: "Photography",
    filter: "photo",
  },
  {
    id: 3,
    title: "Computer Science",
    filter: "cs",
  },
];
