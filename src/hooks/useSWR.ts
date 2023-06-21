import useSWR from "swr";
import * as api from "@/services/api";
import { UserMap } from "@/types/metadata";

export const useFetch = () => {
  return {
    GetRealtimeDatabaseMetadata: () => {
      const { data, error } = useSWR<UserMap>("Realtime Database", async () => {
        return await api.getRealtimeDatabaseMetadata();
      });

      return {
        data,
        error,
      };
    },
  };
};
