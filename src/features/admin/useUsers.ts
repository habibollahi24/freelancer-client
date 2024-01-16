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

export const getUsers = async () => {
  const { data } = await callApi().get("/admin/user/list");
  return data.data.users as UserType[];
};

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["get-users"],
    queryFn: getUsers,
    retry: false,
  });

  return { users, isLoading, isError, error };
};
