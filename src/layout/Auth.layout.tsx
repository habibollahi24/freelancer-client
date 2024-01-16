import { Navigate, Outlet } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import anim from "../assets/Animation2.json";
import { useUser } from "../features/auth/useUser";

function AuthLayout() {
  const { user } = useUser();
  // if (user) {
  //   return <Navigate to={"/" + user.role.toLocaleLowerCase()} replace={true} />;
  // }

  return (
    <div className="container min-h-screen max-w-screen-xl">
      <div className="">
        <div className="mx-auto flex min-h-screen flex-col items-center  justify-center gap-2 md:flex-row">
          {/* <img src="/public/inin.png" alt="en" width={450} className="" /> */}
          <Player src={anim} className=" w-96 md:w-[30rem] " loop autoplay />

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
