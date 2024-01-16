import { useOwnerProjects } from "../../features/owner/useOwnerProjects";

function Dashboard() {
  const { data: projects } = useOwnerProjects();

  return (
    <div className="mt-6 flex flex-wrap gap-2 text-white">
      <p className="rounded-xl  bg-primary-400 px-10 py-5 ">
        پروژه ها
        <span className="mt-2 block text-center text-5xl">
          {projects?.length}
        </span>
      </p>
      <p className="rounded-xl  bg-primary-400 px-10 py-5">
        پروژه های باز
        <span className="mt-2 block text-center text-5xl">
          {projects?.filter((p) => p.status === "OPEN").length}
        </span>
      </p>
      <p className="rounded-xl  bg-primary-400 px-10 py-5 ">
        تعداد درخواست های فریلنسرها
        <span className="mt-2 block text-center text-5xl">
          {projects?.reduce((acc, cur) => acc + cur.proposals.length, 0)}
        </span>
      </p>
    </div>
  );
}

export default Dashboard;
