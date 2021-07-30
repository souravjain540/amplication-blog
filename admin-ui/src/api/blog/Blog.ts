import { User } from "../user/User";

export type Blog = {
  createdAt: Date;
  data: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
