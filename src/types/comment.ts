import { Profile } from "./profile";

export interface CommentType {
  profile: Profile;
  id: number;
  title: string;
  profileId: number;
  blogId: number;
}
