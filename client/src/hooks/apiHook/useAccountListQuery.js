import { useQuery } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useAccountListQuery = () => {
  const { data } = useQuery(["accountList"], bankAPI.getAccountList, {
    refetchOnWindowFocus: false,
  });

  return { accountListData: data };
};
