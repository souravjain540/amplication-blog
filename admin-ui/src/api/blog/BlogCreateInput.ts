import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogCreateInput = {
  data?: string | null;
  user?: UserWhereUniqueInput | null;
};
