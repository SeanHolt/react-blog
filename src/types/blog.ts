import { RDS } from "./base";

export type Blog = {
  id: number;
  title: string;
  content: string;
  profileId: number;
  profile?: {
    id?: number;
    name?: string;
  };
};
export type BlogPostsProps = {
  id?: string;
  author?: string;
};

export type UseBlogStatesType = {
  blogs: Blog[];
  setBlogs: RDS<Blog[]>;
  loading: boolean;
  setLoading: RDS<boolean>;
  error: boolean;
  setError: RDS<boolean>;
};
