import { useProjects } from "../../hook/useProjects";
import { useProposals } from "../freelancer/useProposals";
import { useUsers } from "./useUsers";

function AdminDashboard() {
  const { users, isLoading: loading1 } = useUsers();
  const { data: projects, isLoading: loading2 } = useProjects();
  const { data: proposals, isLoading: loading3 } = useProposals();

  if (loading1 || loading2 || loading3) return <p>loading...</p>;

  return (
    <div className="mt-6 flex flex-wrap gap-2 text-white">
      <p className="rounded-xl  bg-primary-400 px-10 py-5 ">
        کاربران
        <span className="mt-2 block text-center text-5xl">{users?.length}</span>
      </p>
      <p className="rounded-xl  bg-primary-400 px-10 py-5">
        درخواست ها
        <span className="mt-2 block text-center text-5xl">
          {proposals?.length}
        </span>
      </p>
      <p className="rounded-xl bg-primary-400  px-10 py-5">
        پروژه ها
        <span className="mt-2 block text-center text-4xl">
          {projects?.length}
        </span>
      </p>
    </div>
  );
}

export default AdminDashboard;
