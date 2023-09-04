import { useQuery } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useAccountQuery = (accountId) => {
  const { data } = useQuery(["account"], () => bankAPI.getAccount(accountId));

  return { accountData: data };
};
