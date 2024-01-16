import React from "react";
import { useUser } from "./useUser";
import HeaderDropdown from "./HeaderDropdown";

type Props = {};

function Header({}: Props) {
  const { user, isLoading } = useUser();

  return (
    <div
      className={`container relative z-30 max-w-screen-lg py-5  ${
        isLoading ? "blur-sm" : "blur-0"
      }`}
    >
      <div className={`flex items-center justify-between `}>
        <p className="text-xl font-bold">پنل کاربری {user?.name}😍</p>
        <HeaderDropdown />
      </div>
    </div>
  );
}

export default React.memo(Header);
