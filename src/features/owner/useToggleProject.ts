import { useMutation, useQueryClient } from "@tanstack/react-query";
import callApi from "../../services/callApi";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const toggleProject = async ({ id, status }: any) => {
  const { data } = await callApi().patch(`/project/${id}`, status);
  return data.data;
};

export const useTogglePropject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleProject,
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
    },
  });
};
