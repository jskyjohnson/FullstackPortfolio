import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export interface socialsinfoType {
  id: number;
  username: string;
  media: SemanticICONS;
}

//Links to all your social medias. current it assums [media].com/[username] will lead to your profile so you might have to add a few extra extentions for whatever website
export const socialsinfo : socialsinfoType[] = [
  {
    "id": 1,
    "media": "instagram",
    "username": "i.skyz.design"
  },
  {
    "id": 3,
    "media": "linkedin",
    "username": "in/jskyjohnson"
  },
  {
    "id": 4,
    "media": "github",
    "username": "jskyjohnson"
  },
  {
    "id": 5,
    "media": "500px",
    "username": "p/iskyz"
  },
  {
    "id": 6,
    "media": "twitch",
    "username": "phenkis"
  }
]