import axios from "axios";
import { NewsApiResponse } from "@/types/article";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export const getBusinessNews = async () => {
  try {
    const response = await api.get(
      "top-headlines?country=us&category=business&apiKey=8f1ab3501814475ca43eefdc21a67a9c"
    );
    return response.data.articles;
  } catch (error) {
    console.log("Error while calling getBusinessNews API", error);
    throw error;
  }
};
