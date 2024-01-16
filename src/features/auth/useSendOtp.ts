import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import callApi from "../../services/callApi";

export const sendOtp = async (phoneNumber: { phoneNumber: string }) => {
  const { data } = await callApi().post("/user/get-otp", phoneNumber);
  return data;
};

export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtp,
    onError: (err) => {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
  });
};
