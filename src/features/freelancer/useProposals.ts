import { useQuery } from "@tanstack/react-query";
import callApi from "../../services/callApi";

export type ProposalType = {
  _id: string;
  duration: number;
  status: number;
  price: number;
  user: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getProposals = async () => {
  const { data } = await callApi().get("/proposal/list");
  return data.data.proposals as ProposalType[];
};

export const useProposals = () => {
  return useQuery({
    queryKey: ["proposals"],
    queryFn: getProposals,
  });
};
