import { useQuery } from "@tanstack/react-query";
import callApi from "../services/callApi";

export type CategoryType = {
  label: string;
  value: string;
  englishTitle: string;
};

export const getCategoryList = async () => {
  const { data } = await callApi().get("/category/list");
  return data.data.categories.map((cat: any) => ({
    label: cat.title,
    value: cat._id,
    englishTitle: cat.englishTitle,
  })) as CategoryType[];
};

export const useCategoryList = () => {
  return useQuery({
    queryKey: ["category-list"],
    queryFn: getCategoryList,
  });
};
