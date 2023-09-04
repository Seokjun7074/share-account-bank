import { useQuery } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useAccountListQuery = (accountId) => {
  const { data } = useQuery(["account"], bankAPI.getAccountList);

  return { accountListData: data };
};
