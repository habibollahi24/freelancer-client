import { useMutation } from "@tanstack/react-query";
import callApi from "../../../services/callApi";

import toast from "react-hot-toast";
import { AxiosError } from "axios";

const changeStatus = async ({ proposalId, ...rest }: any) => {
  const { data } = await callApi().patch(`/proposal/${proposalId}`, rest);
  return data.data;
};

export const useChangeStatus = () => {
  return useMutation({
    mutationFn: changeStatus,
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });
};
