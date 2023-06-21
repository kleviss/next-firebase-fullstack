import axios from "axios";
import { UserMap } from "@/types/metadata";

const api = axios.create({
  baseURL: "https://klfx-lit-default-rtdb.europe-west1.firebasedatabase.app",
});

export const getRealtimeDatabaseMetadata = async () => {
  try {
    const response = await api.get<UserMap>("/metadata.json");
    console.log("Response from Realtime Database API", response);
    return response.data;
  } catch (error) {
    console.log("Error while calling Realtime Database API", error);
    throw error;
  }
};
