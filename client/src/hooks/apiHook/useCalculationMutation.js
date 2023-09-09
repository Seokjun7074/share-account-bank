import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useCalculationMutation = (groupId) => {
  const calculationMutation = useMutation({
    mutationFn: () => bankAPI.postCalculation(groupId),
    onSuccess: () => {},
    onError: () => {},
  });

  return calculationMutation;
};
