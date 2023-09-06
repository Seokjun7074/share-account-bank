import { useQuery } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useGroupListQuery = () => {
  const groupListData = useQuery(["groupList"], businessAPI.getGroupList);

  return groupListData;
};
