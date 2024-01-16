import useOutsideClick from "../../hook/useOutsideClick";
import { useLogout } from "./useLogout";
import { useUser } from "./useUser";
import { HiUserCircle } from "react-icons/hi";

function HeaderDropdown() {
  const { mutate } = useLogout();
  const { buttonRef, boxRef, setToggle, toggle } = useOutsideClick(() =>
    setToggle(false),
  );

  const { user } = useUser();

  const logoutHandler = () => {
    mutate();
  };

  return (
    <div className="relative !z-50">
      <button ref={buttonRef} className="" onClick={() => setToggle(!toggle)}>
        <HiUserCircle className="h-8 w-8 text-secondary-400" />
      </button>
      {toggle && (
        <div
          ref={boxRef}
          className="absolute left-0   rounded-lg border  bg-secondary-0 p-1 shadow-md"
        >
          <ul className=" text-sm child:my-1 child:cursor-pointer child:rounded-md child:p-2 child:px-4 hover:child:bg-secondary-800">
            <li className="flex items-center gap-x-2">
              <div className="text-end">
                <div>{user?.email} </div>
                <div>{user?.phoneNumber} </div>
              </div>
              <div>
                <HiUserCircle className="h-10 w-10 text-secondary-400" />
              </div>
            </li>
            <li>تم برنامه</li>
            <li onClick={logoutHandler} className="hover:text-error">
              خروج
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderDropdown;
