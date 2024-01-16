import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import callApi from "../../services/callApi";
import { useNavigate } from "react-router-dom";

export const logout = async () => {
  const { data } = await callApi().post("/user/logout");
  return data;
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
  });
};
