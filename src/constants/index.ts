import { HiHome, HiCollection, HiPlusSm, HiHand, HiUser } from "react-icons/hi";

export const optiosOwnerPanel = [
  {
    id: "1",
    title: "داشبورد",
    icon: HiHome,
    path: "/owner/dashboard",
  },
  {
    id: "2",
    title: "پروژه ها",
    icon: HiCollection,
    path: "/owner/projects",
  },
  {
    id: "3",
    title: " ایجاد پروژه",
    icon: HiPlusSm,
    path: "/owner/create-project",
  },
];
export const optiosFreelancerPanel = [
  {
    id: "1",
    title: "داشبورد",
    icon: HiHome,
    path: "/freelancer/dashboard",
  },
  {
    id: "2",
    title: "درخواست های من",
    icon: HiHand,
    path: "/freelancer/proposals",
  },
  {
    id: "3",
    title: "پروژه ها",
    icon: HiCollection,
    path: "/freelancer/projects",
  },
];
export const optiosAdminPanel = [
  {
    id: "1",
    title: "داشبورد",
    icon: HiHome,
    path: "/admin/dashboard",
  },
  {
    id: "2",
    title: "درخواست ها ",
    icon: HiHand,
    path: "/admin/proposals",
  },
  {
    id: "3",
    title: "پروژه ها",
    icon: HiCollection,
    path: "/admin/projects",
  },
  {
    id: "4",
    title: " کاربران",
    icon: HiUser,
    path: "/admin/users",
  },
];
