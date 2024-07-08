import { Profile } from "./profile";

export interface Author {
  profile?: Profile;
  id: number;
  name: string;
  count?: number;
}
