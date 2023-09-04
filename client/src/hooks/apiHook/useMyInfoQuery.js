import { useQuery } from "@tanstack/react-query";
import userAPI from "apis/user";

export const useMyInfoQuery = () => {
  const { data } = useQuery(["myInfo"], userAPI.getMyInformation);

  return { myInfoData: data };
};
