export interface apps {
  app: string;
  account: string;
  profileUrl: string;
}

export interface jobExperienceInfo {
  id: number;
  job: string;
  organization: string;
  date: string;
  location: string;
}

export interface aboutInfo {
  about_pic: string;
  about_header_message: string;
  bios: string[][];
  info: string[][];
  softwares: any;
  experience: jobExperienceInfo[];
}

export interface contactInfo {
  email: string;
  location: string;
  contactMessage: string[];
  lat: string;
  long: string;
  services: apps[];
}

export interface userinfoType {
  title_name: string;
  first_name: string;
  last_name: string;
  contact: contactInfo;
  about: aboutInfo;
  footerMessage: string;
}

export const userinfo: userinfoType = {
  title_name: "Sky Johnson",
  first_name: "Sky",
  last_name: "Johnson",
  contact: {
    email: "jsky.johnson@gmail.com",
    location: "Boulder Colorado",
    lat: "40.0150",
    long: "-105.2705",
    contactMessage: [
      "The easiest and more efficient way to reach me is by my email, or through a direct message on linkedin. If you would like to meet in person please send me a message!",
      "Right now I'm located around Boulder Colorado but this is very likely to change soon!",
    ],
    services: [
      {
        app: "LinkedIn",
        account: "jskyjohnson",
        profileUrl: "https://www.linkedin.com/in/jskyjohnson",
      },
      {
        app: "Instagram",
        account: "i.skyz.design",
        profileUrl: "https://www.instagram.com/i.skyz.design/",
      },
    ],
  },
  about: {
    about_pic: "user/aboutme.jpg",
    about_header_message: "A passionate developer, artist, and photographer",
    bios: [
      ["background", "I'm a recent college graduate from the University of Colorado Boulder. I studied both Computer Science and Technology Arts and Media. I also pursued a minor in Applied Mathematics with a focus in theoretical statistics. "],
      ["personality", "I use my multi-faceted background to keep myself always learning new and interdisciplinary topics ranging from automotive engineering to machine learning and game development. I love to get my hands dirty, whether it be with code or a machining and electronics. I love an environment that promotes rapid development. Currently I've been learning a lot of new and exciting fullstack cloud technologies to enable some new interesting personal projects."],
    ],
    info: [
      ["University", "University of Colorado Boulder - Cumulative GPA: 3.376"],
      ["Graduation", "May Class of 2020"],
      ["Degree", "Computer Science (BS) - Degree GPA: 3.514"],
      ["2nd Degree", "Creative Technology and Design (BS) - Degree GPA: 3.657"],
      ["Minor", "Applied Mathematics: Theoretical Statistics"],
      ["Languages", "English: Native, 日本語：～N4 University Experience"],
    ],
    softwares: [
      {
        id: 1,
        category: "Favorite Languages",
        list: [
          "C# + Unity",
          "Python",
          "Java",
          "Scala",
          "Javascript/Typescript",
          "C/C++ (limited)",
          "Processing/Arduino",
          "OpenSCAD",
        ],
      },
      {
        id: 2,
        category: "Python Libraries",
        list: [
          "Tensor Flow",
          "MatPlotLib",
          "NetworkX",
          "Seaborn",
          "SciKit",
          "Keras",
        ],
      },
      {
        id: 3,
        category: "Fullstack Development Libraries",
        list: [
          "ReactJS",
          "GraphQL",
          "Redux",
          "NodeJS",
          "Express",
          "MongoDB",
          "Postgres/MySQL",
        ],
      },
      {
        id: 4,
        category: "Development Tools",
        list: [
          "Kubernetes",
          "Git + Github",
          "GitLab CD/CI",
          "GCP",
          "Heroku",
          "Docker",
        ],
      },
      {
        id: 5,
        category: "Adobe Creative Cloud",
        list: [
          "Photoshop",
          "Lightroom",
          "Illustrator",
          "XD",
          "Indesign",
          "Premiere",
          "AfterEffects",
          "Dimensions",
        ],
      },
      {
        id: 6,
        category: "3D Modeling",
        list: ["Rhino6", "Solidworks", "Autodesk Fusion 360", "Blender"],
      },
      {
        id: 7,
        category: "Audio software",
        list: ["Reaper", "Audacity"],
      },
      {
        id: 8,
        category: "Other Software",
        list: [
          "BackyarndNikon",
          "Deep Sky Stacker",
          "PHD2",
          "ASCOM",
          "Cura",
          "OBS Studios",
          "VSCode (The only IDE you'll ever need)",
          "Vim",
        ],
      },
      {
        id: 8,
        category: "Favorite Linux Distributions",
        list: ["Lubuntu", "Arch", "CrunchBang!"],
      },
    ],
    experience: [
      {
        id: 1,
        job: "Undergraduate Research Assistant",
        organization: "University of Colorado Boulder",
        date: "Mar 2019 – May 2020",
        location: "Boulder, Colorado, United States",
      },
      {
        id: 2,
        job: "OIT Student Assistant ",
        organization: "University of Colorado Boulder",
        date: "May 2018 – Jul 2019",
        location: "Boulder, Colorado, United States",
      },
    ],
  },
  footerMessage: "Sky Johnson 2020. Made with React",
};
