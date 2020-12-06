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
    date: new Date("5, 5, 2020"),
    description: [
      [
        "Description",
        "My project paper was focused on trying to train Generative Adversarial Networks (GANs) on Human Contact Networks (HCNs). When Generative Adversarial Networks were first proposed in 2014 they revolutionized how image processing and generation were done within a computer. Due to the similar nature of how image data and network adjacency lists data, it would be natural to attempt to use GANs to try to recreate these networks. In current times this is especially of interest since HCNs are needed to effectively model how a pathogen might spread through a specific population. However the requirements to collect real world human contact data can be quite expensive. If a GAN was able to capture the subtle complexities in these kinds of networks it would be beneficial for future works involving HCNs.",
      ],
      [
        "Relevance",
        "This project was heavily inspired by the current situations surrounding the Corona virus, that was first encountered and changed my life greatly in the first quarter of 2020. I wanted to combine my knowledge of GANs with my recently studied subject of network analysis and it was especially motivating to do so on a current project.",
      ],
    ],
    images: [
      "projects/Software/HumanContactNetworksWithGans/hcngan-6.png",
      "projects/Software/HumanContactNetworksWithGans/hcngan-1.png",
      "projects/Software/HumanContactNetworksWithGans/hcngan-2.png",
      "projects/Software/HumanContactNetworksWithGans/hcngan-3.png",
      "projects/Software/HumanContactNetworksWithGans/hcngan-4.png",
      "projects/Software/HumanContactNetworksWithGans/hcngan-5.png",
    ],
    meta: {
      pdf: "https://tinyurl.com/yb45pt4z",
      class: "CSCI 3352, Biological Networks ",
      Categories: "School Project, Paper Submission, Machine Learning",
      professor: "Aaron Clauset",
    },
  },
  {
    id: 3,
    title: "Ironlab ARRTK",
    subtitle: "A ROS and Unity Tool Kit",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/IronLabARRTK/ocuzedsdk.jpg",
    date: new Date("5, 1, 2020"),
    description: [
      [
        "",
        "While at CU I helped in the IRON lab, a Human Robotics Research lab focusing on modeling human intent, interactions in Vr, Ar and Mr, and tele-robotics in general. I helped develop a series of Unity packages that could be used to rapidly help develop for a Unity and ROS system.",
      ],
    ],
    images: [
      "projects/Software/IronLabARRTK/ocuzedsdk.jpg",
      "projects/Software/IronLabARRTK/bebop_thumb.jpg",
    ],
    meta: {
      link: "https://iron-lab.org/",
    },
  },
  {
    id: 4,
    title: "Artuating Arms",
    subtitle: "A Robotic Drawing Whiteboard",
    category: "Physical Computation Project",
    filter: "physical",
    thumbnail: "projects/Physical/ArtuatingArms/Basic.jpg",
    date: new Date("12, 5, 2019"),
    description: [
      [
        "",
        "This project was my attempt to use my knowledge of physical computing, arduino, and a lot of other technologies in combination to create a fully functional art installation. This was able to take an image uploaded to a reactJS website, download it, create a vector path, translate that path to gcode, then write that gcode to the art board. A functional video isn't yet available but it is still being worked on!",
      ],
      [
        "Update",
        "Unfortunately this project was stolen from my apartment before it could be completed. I will likely attempt to recreate something similar in the future but this project as is will not see completion. ",
      ],
    ],
    images: [
      "projects/Physical/ArtuatingArms/Basic.jpg",
      "projects/Physical/ArtuatingArms/indstud_(0).jpg",
      "projects/Physical/ArtuatingArms/indstud_ (1).jpg",
      "projects/Physical/ArtuatingArms/indstud_ (2).jpg",
      "projects/Physical/ArtuatingArms/indstud_ (3).jpg",
      "projects/Physical/ArtuatingArms/indstud_ (4).jpg",
      "projects/Physical/ArtuatingArms/indstud_ (5).jpg",
      "projects/Physical/ArtuatingArms/indstud_ (6).jpg",
    ],
    meta: {
      pdf: "https://tinyurl.com/ya6a3tw6",
      club: "Independent Study + Data Science Team/CSCI 4802",
      professors: "Arielle Hein, Daniel Larremore",
      group: "Sky Johnson",
    },
  },
  {
    id: 5,
    title: "Kaggle, AirBUS Identification Comparison with CNNs and ResNET",
    subtitle: "A Kaggle Influenced Analysis Paper",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/AirbusIdentification/kaggle.jpg",
    date: new Date("12, 5, 2019"),
    description: [
      [
        "",
        "The following paper is a study of two leading segmentation algorithms,UNet34 and Mask-RCNN, for the Airbus Ship Detection Challenge. TheAirbus Ship detection challenge provided by Kaggle is a challenge aboutidentifying ships via pixel masks. Due to the nature of the data set, wealso explore ways to mitigate the extremely unbalanced data. ",
      ],
    ],
    images: [
      "projects/Software/AirbusIdentification/airbus-1.png",
      "projects/Software/AirbusIdentification/airbus-2.png",
      "projects/Software/AirbusIdentification/airbus-3.png",
      "projects/Software/AirbusIdentification/airbus-4.png",
      "projects/Software/AirbusIdentification/airbus_thumb.png",
    ],
    meta: {
      pdf: "https://tinyurl.com/yauylnay",
      class: "CSCI 4622, Machine Learning ",
      Categories: "School Project, Paper Submission, Machine Learning",
      professor: "Chenhao Tan",
      group: "Sky Johnson, Sumeet Batra, Sophia Loughlin",
    },
  },
  {
    id: 6,
    title: "Jetsquare",
    subtitle: "A simple phone game",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/JetSquare/Mockup.jpg",
    date: new Date("12, 1, 2015"),
    description: [
      [
        "",
        "A quick game I made with my friend in highschool. We used the Unity game engine, and explored how to publish it officially on the Android play store! It also included features like facebook integration, in store purchases, and google ad revenue. You could even see who in your facebook friends list had the highest scores!",
      ],
    ],
    images: [
      "projects/Software/JetSquare/Mockup.jpg",
      "projects/Software/JetSquare/jetsquare-3.png",
      "projects/Software/JetSquare/jetsquare-4.png",
      "projects/Software/JetSquare/jetsquare-2.png",
      "projects/Software/JetSquare/jetsquare-1.png",
      "projects/Software/JetSquare/jetsquare-5.png",
    ],
    meta: {
      Categories: "Personal Project, Game Development, Unity",
      Features: "Google ads, Facebook integration, In App Purchases",
      Group: "Sky Johnson, Andy Yan",
      "Mockup Source":
        "https://www.anthonyboyd.graphics/mockups/samsung-galaxy-s10-top-view-mockup/",
    },
  },
  {
    id: 7,
    title: "Data mining on WoW Mythic+ Raider.io",
    subtitle: "A data-mining project",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/RaiderIODataMining/Raiderio.jpg",
    date: new Date("12, 4, 2019"),
    description: [
      [
        "",
        "A project for Data Science Team where we attempted to learn some basic player statistics about how groups and networks form within a WoW server when doing  Mythic+ content.",
      ],
    ],
    images: [
      "projects/Software/RaiderIODataMining/radierio-1.png",
      "projects/Software/RaiderIODataMining/radierio-2.png",
      "projects/Software/RaiderIODataMining/radierio-3.png",
      "projects/Software/RaiderIODataMining/Raiderio.jpg",
    ],
    meta: {
      pdf: "https://tinyurl.com/yaf6kmtq",
      club: "Data Science Team/CSCI 4802",
      Categories:
        "School Project/Personal Project, Paper Submission, Machine Learning, Data Mining",
      professor: "Daniel Larremore",
      group: "Sky Johnson, Ana Vukojevic",
    },
  },
  {
    id: 8,
    title: "Bit Overflow Music Generating Sound Box",
    subtitle: "A Code Golf inspired soundbox",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Physical/SoundBox/musicbox_thumb.png",
    date: new Date("4, 15, 2019"),
    description: [
      [
        "",
        "By using a coding golf idea about feeding a bit overflow series of square waves directly too a speaker phone, I can create this unique music box! that has a lot of combinations of interesting sounds.",
      ],
    ],
    images: [
      "projects/Physical/SoundBox/musicbox (1).jpg",
      "projects/Physical/SoundBox/musicbox (2).jpg",
      "projects/Physical/SoundBox/musicbox (3).jpg",
      "projects/Physical/SoundBox/musicbox (4).jpg",
      "projects/Physical/SoundBox/musicbox (5).jpg",
      "projects/Physical/SoundBox/musicbox (6).jpg",
      "projects/Physical/SoundBox/musicbox (7).jpg",
      "projects/Physical/SoundBox/musicbox (8).jpg",
    ],
    meta: {
      class: "ATLS 3300 Object",
      Categories: "School Project, Physical Computing, Music",
      professor: "Arielle Hein",
      group: "Sky Johnson",
    },
  },
  {
    id: 9,
    title: "Libnosis, a ML-Pipeline as a service",
    subtitle: "A Senior Capstone Project",
    category: "Software Project",
    filter: "software",
    thumbnail: "projects/Software/Libnosis/thumb.jpg",
    date: new Date("5, 1, 2020"),
    description: [
      [
        "",
        "Libnosis is a platform that enables frictionless discovery, collaboration , and deployment for machine learning models in the same way GitHub does for software. We will simplify the discovery and collaboration process by allowing a user to quickly search through a curated collection of models. While also shortening the time it takes to start contributing to those models by using existing version control softwares. Users will then be able to use that model with a single line of code by leveraging cloud computing and containerization. This will decrease the time spent on developing infrastructure and deployment solutions. The time and money saved for the data scientists and their team will allow them to focus on continually improving their models. ",
      ],
      [
        "How it works",
        "How we provide such a comprehensive machine learning platform is by leveraging cloud computing and containerization. Data scientists develop their own model, upload it to our platform, and just like that, users can use that model on their own data with only a single line of code. This can increase the efficiency of machine learning labor by up to 70%. ",
      ],
    ],
    images: [
      "projects/Software/Libnosis/1.jpg",
      "projects/Software/Libnosis/NVC-Pitch2(1).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(2).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(3).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(4).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(5).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(6).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(7).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(8).jpg",
      "projects/Software/Libnosis/NVC-Pitch2(9).jpg",
    ],
    meta: {
      class: "CSCI Senior Entrepreneurial  Capstone",
      group: "Sky Johnson, Katie Younglove, Suyog Soti, Stevan Maksimovic",
      NVC: "https://www.colorado.edu/innovate/"
    },
  },
];
