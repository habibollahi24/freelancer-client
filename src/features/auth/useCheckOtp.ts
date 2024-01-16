import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import callApi from "../../services/callApi";

export const checkOtp = async (phoneData: {
  phoneNumber: string;
  otp: string;
}) => {
  const { data } = await callApi().post("/user/check-otp", phoneData);
  return data;
};

export const useCheckOtp = () => {
  return useMutation({
    mutationFn: checkOtp,
    onError: (err) => {
      console.log(err);
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
  });
};
