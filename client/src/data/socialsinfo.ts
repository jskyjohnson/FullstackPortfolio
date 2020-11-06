import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export interface socialsinfoType {
  id: number;
  username: string;
  media: SemanticICONS;
}


export const socialsinfo : socialsinfoType[] = [
  {
    "id": 1,
    "media": "instagram",
    "username": "i.skyz.design"
  },
  {
    "id": 2,
    "media": "instagram",
    "username": "i.skyz"
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
  }
]