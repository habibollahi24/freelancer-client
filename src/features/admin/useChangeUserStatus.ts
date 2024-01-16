import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import callApi from "../../services/callApi";

const changeUserStatus = async (statusData: any) => {
  const { data } = await callApi().patch(
    `/admin/user/verify/${statusData.userId}`,
    statusData.status,
  );
  return data.data;
};

export const useChangeUserStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeUserStatus,
    onError: (err) => {
      if (err instanceof AxiosError) {
        toast.error(err?.response?.data.message);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get-users"] });
      toast.success(data.message);
    },
  });
};
