import useSWR from "swr";
import * as api from "@/services/api";

export const useFetch = () => {
  return {
    GetBusinessNews: () =>
      useSWR("businessNews", async () => {
        return await api.getBusinessNews();
      }),
  };
};
