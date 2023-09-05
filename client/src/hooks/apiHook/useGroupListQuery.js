import { useQuery } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useGroupListQuery = (accountId) => {
  const groupListData = useQuery(["account"], businessAPI.getGroupList);

  return groupListData;
};
