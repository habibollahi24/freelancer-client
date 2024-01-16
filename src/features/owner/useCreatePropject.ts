import { useMutation, useQueryClient } from "@tanstack/react-query";
import callApi from "../../services/callApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const addProject = async (newProject: any) => {
  const { data } = await callApi().post("/project/add", newProject);
  return data.data;
};

export const useCreatePropject = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProject,
    onError: (err) => console.log(err),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-project"] });
      navigate("/owner/projects");
    },
  });
};
