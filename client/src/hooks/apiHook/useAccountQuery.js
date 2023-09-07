import { useQuery } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useAccountQuery = (accountNumber) => {
  const { data } = useQuery(["account"], () => bankAPI.getAccount(accountNumber));

  return { accountData: data };
};
