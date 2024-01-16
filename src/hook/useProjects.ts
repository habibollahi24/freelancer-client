import { useQuery } from "@tanstack/react-query";
import callApi from "../services/callApi";
import { useLocation } from "react-router-dom";

export type ProjectType = {
  _id: string;
  budget: number;
  avatarUrl: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deadline: Date;
  tags: string[];
  status: "OPEN" | "CLOSE";
  title: string;
  role: "OWNER" | "FREELANCER" | "ADMIN";
  proposals: string[];
  freelancer: { avatarUrl: string; name: string; _id: string };
  owner: { avatarUrl: string; name: string; _id: string };
  category: { englishTitle: string; title: string; _id: string };
};

export const getProjects = async (search: string) => {
  const { data } = await callApi().get(`/project/list${search}`);
  return data.data.projects as ProjectType[];
};

export const useProjects = () => {
  const { search } = useLocation();

  return useQuery({
    queryKey: ["projects", search],
    queryFn: () => getProjects(search),
  });
};
