export interface homepageinfoType {
  hero_intro: string;
  intro_text: string;
	carousel_text: string;
	carousel_text_values: string[];
}

//User the string %userinfo% to signify where you would like your name placed (from data/userinfo.title_name)
export const homepageinfo: homepageinfoType = {
  hero_intro: "Hello",
  intro_text:
    "My name is %userinfo%, welcome to my portfolio.",
	carousel_text: "I'm a ",
	carousel_text_values: ["Software Developer", "Photographer", "Data Scientist", "Fullstack Developer", "Game Designer", "Graphic Designer"]
};
