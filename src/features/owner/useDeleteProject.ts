import { useMutation, useQueryClient } from "@tanstack/react-query";
import callApi from "../../services/callApi";
import toast from "react-hot-toast";

const deleteProjectById = async (id: string) => {
  const { data } = await callApi().delete(`/project/${id}`);
  console.log(data);
  return data.data;
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: deleteProjectById,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { deleteProject, isDeleting };
};
