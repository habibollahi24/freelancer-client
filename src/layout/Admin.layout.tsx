import { NavLink } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import AppLayout from "./AppLayout";
import { optiosAdminPanel } from "../constants";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar title="پنل ادمین">
        {optiosAdminPanel.map((option) => {
          return (
            <NavLink to={option.path} key={option.id}>
              <li className="mb-4 flex items-center gap-x-1 rounded-md bg-secondary-900 p-2 text-secondary-300 shadow-sm hover:bg-secondary-800">
                <option.icon />
                <span>{option.title}</span>
              </li>
            </NavLink>
          );
        })}
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
