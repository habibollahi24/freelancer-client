import { useMutation } from "@tanstack/react-query";
import callApi from "../../services/callApi";
import toast from "react-hot-toast";

const addProposal = async (newProposal: any) => {
  const { data } = await callApi().post("/proposal/add", newProposal);
  return data.data;
};

export const useCreateProposal = () => {
  return useMutation({
    mutationFn: addProposal,
    onError: (err) => console.log(err),
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
};
