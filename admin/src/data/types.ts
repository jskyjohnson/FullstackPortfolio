import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export interface blogPostTypes {
  id: number;
  title: string;
  date: Date;
  category: string;
  categoryLink: string;
  thumbnail: string;
}

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

export interface homepageinfoType {
  hero_intro: string;
  intro_text: string;
  carousel_text: string;
  carousel_text_values: string[];
  hero_portrait: string;
}

export interface projectsMenuType {
  id: number;
  title: string;
  filter: string;
}

export interface socialsinfoType {
  id: number;
  username: string;
  media: SemanticICONS;
}

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