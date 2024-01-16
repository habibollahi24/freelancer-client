import { NavLink } from "react-router-dom";
import { optiosFreelancerPanel } from "../constants";
import Sidebar from "../ui/Sidebar";
import AppLayout from "./AppLayout";

function FreelancerLayout() {
  return (
    <AppLayout>
      <Sidebar title="پنل فریلنسر">
        {optiosFreelancerPanel.map((option) => {
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

export default FreelancerLayout;
