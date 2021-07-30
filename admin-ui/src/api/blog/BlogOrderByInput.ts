import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
