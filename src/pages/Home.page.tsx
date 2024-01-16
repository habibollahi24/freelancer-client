import { Navigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";

function HomePage() {
  const { user } = useUser();
  // if (user && user?.status === 2) {
  //   return <Navigate to={"/" + user.role.toLocaleLowerCase()} replace={true} />;
  // }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      اجازه دسترسی شما در حال بررسی است.
    </div>
  );
}

export default HomePage;
