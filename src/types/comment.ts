import { Profile } from "./profile";

export interface Comment {
    profile?: Profile;
    id: number;
    title: string;
    profileId: number;
    blogId: number;
  }
  