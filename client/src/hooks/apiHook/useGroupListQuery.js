import { useQuery } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useGroupListQuery = (accountId) => {
  const { data } = useQuery(["account"], businessAPI.getGroupList);

  return { groupListData: data };
};
