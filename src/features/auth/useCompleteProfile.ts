import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import callApi from "../../services/callApi";

export const completeProfile = async (userData: {
  name: string;
  email: string;
  role: string;
}) => {
  const { data } = await callApi().post("/user/complete-profile", userData);
  return data;
};

export const useCompleteProfile = () => {
  return useMutation({
    mutationFn: completeProfile,
    onError: (err) => {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
  });
};
