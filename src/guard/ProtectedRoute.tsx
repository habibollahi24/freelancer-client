// import { Navigate, useLocation } from "react-router-dom";
// import { useUser } from "../features/auth/useUser";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const { pathname } = useLocation();
  // const { isLoading, user } = useUser();

  // const pathNameRole = pathname.split("/")[1];

  // if (isLoading)
  //   return (
  //     <div className="flex h-screen w-full items-center justify-center">
  //       <p>loading</p>
  //     </div>
  //   );

  // if (user?.status !== 2) {
  //   return <Navigate to="/" />;
  // }

  // if (pathNameRole.toUpperCase() !== user?.role) {
  //   return <Navigate to="/auth" />;
  // }

  return <div>{children}</div>;
}

export default ProtectedRoute;
