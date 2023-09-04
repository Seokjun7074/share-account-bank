import { useQuery } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useGroupQuery = (groupId) => {
  const { data, isLoading } = useQuery(["group"], () => businessAPI.getGroup(groupId));

  return { groupData: data, isLoading };
};
