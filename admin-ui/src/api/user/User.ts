import { Blog } from "../blog/Blog";

export type User = {
  blogs?: Array<Blog>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
