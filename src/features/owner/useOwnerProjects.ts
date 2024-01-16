import { useQuery } from "@tanstack/react-query";
import callApi from "../../services/callApi";

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

export const getOwnerProjects = async () => {
  const { data } = await callApi().get("/project/owner-projects");
  return data.data.projects as ProjectType[];
};

export const useOwnerProjects = () => {
  return useQuery({
    queryKey: ["owner-project"],
    queryFn: getOwnerProjects,
  });
};
