import { useQuery } from "@tanstack/react-query";
import callApi from "../../../services/callApi";
import { useParams } from "react-router-dom";

type UserType = { avatarUrl: string; name: string; _id: string };

export type ProposalType = {
  _id: string;
  createdAt: Date;
  description: string;
  duration: number;
  price: number;
  status: number;
  updatedAt: Date;
  user: UserType;
};

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
  proposals: ProposalType[];
  freelancer: UserType;
  owner: UserType;
  category: { englishTitle: string; title: string; _id: string };
};

export const getProject = async (id: string) => {
  const { data } = await callApi().get(`/project/${id}`);
  return data.data.project as ProjectType;
};

export const useProject = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProject(id!),
  });
};
