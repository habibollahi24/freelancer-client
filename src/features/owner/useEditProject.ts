import { useMutation, useQueryClient } from "@tanstack/react-query";
import callApi from "../../services/callApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const editProject = async ({ id, editedProject }: any) => {
  const { data } = await callApi().patch(
    `/project/update/${id}`,
    editedProject,
  );
  return data.data;
};

export const useEditPropject = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProject,
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
      navigate("/owner/projects");
    },
  });
};
