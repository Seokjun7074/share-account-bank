import { useQuery } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useFinishTravelQuery = (groupId) => {
  const { data } = useQuery(["finishTravel"], () => businessAPI.finishTravel(groupId), {
    refetchOnWindowFocus: false,
  });

  return { finishTravelData: data?.data.body };
};
