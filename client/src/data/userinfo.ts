export interface apps {
  app: string;
  account: string;
  profileUrl: string;
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
  footerMessage: "Sky Johnson 2020. Made with React"
};
