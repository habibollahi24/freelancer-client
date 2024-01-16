import { useEffect, useState } from "react";
import Header from "../features/auth/Header";
import { HiMenu } from "react-icons/hi";
import { Outlet, useLocation } from "react-router-dom";

function AppLayout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr] bg-secondary-0  ">
      <div className="relative col-span-2 bg-secondary-0  md:col-span-1">
        <Header />
      </div>
      <div
        className={`absolute z-50 row-span-2 row-start-1 h-full w-[90%] bg-secondary-0 p-5 transition-all md:relative md:z-0 md:w-full md:translate-x-0 ${
          !show ? "translate-x-[100%]" : "translate-x-[0%]"
        }`}
      >
        {children}
      </div>
      <button
        onClick={() => setShow((show) => !show)}
        className="absolute left-2 top-20 z-10 rounded-md bg-secondary-0 p-1  text-3xl text-secondary-300 md:hidden"
      >
        <HiMenu />
      </button>
      <div className="col-span-2 overflow-y-auto bg-secondary-900 py-5 md:col-span-1 md:rounded-tr-[3rem]">
        <div className="container  max-w-screen-lg ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
