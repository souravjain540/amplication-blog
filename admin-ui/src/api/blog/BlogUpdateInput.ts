import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlogUpdateInput = {
  data?: string | null;
  user?: UserWhereUniqueInput | null;
};
