import { useQuery } from "@tanstack/react-query";
import callApi from "../../services/callApi";

export type UserType = {
  avatarUrl: string;
  biography: string;
  createdAt: Date;
  email: string;
  isActive: boolean;
  isVerifiedPhoneNumber: boolean;
  name: string;
  phoneNumber: string;
  resetLink: string;
  role: "OWNER" | "FREELANCER" | "ADMIN";
  status: 0 | 1 | 2;
  updatedAt: Date;
  _id: string;
};

export const getUser = async () => {
  const { data } = await callApi().get("/user/profile");
  return data.data.user as UserType;
};

export const useUser = () => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });

  return { user, isLoading, isError, error };
};
