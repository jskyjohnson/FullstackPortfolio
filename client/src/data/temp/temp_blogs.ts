export interface blogPostTypes {
  id: number;
  title: string;
  date: Date;
  category: string;
  categoryLink: string;
  thumbnail: string;
}

export const temp_blogPosts: blogPostTypes[] = [
  {
    id: 2,
    title: "Deploying a backend server to Digital Ocean",
    date: new Date("2019-10-06"),
    category: "Computers",
    categoryLink: "/computers",
    thumbnail: "./placeholder/637x637.jpg",
  },
  {
    id: 3,
    title: "My solution to Towers of Hanoi",
    date: new Date("2020-10-06"),
    category: "Computers",
    categoryLink: "/computers",
    thumbnail: "./placeholder/527x500.jpg",
  },
  {
    id: 1,
    title: "Setting up CTCI with Maven and Gitlabs hello",
    date: new Date("2015-10-06"),
    category: "Computers",
    categoryLink: "/computers",
    thumbnail: "./placeholder/637x637.jpg",
  },
];
