import { toPersianNumnersWithComma } from "../../helper";
import { useProposals } from "./useProposals";

function DashboardFreelancer() {
  const { data: proposals, isLoading } = useProposals();

  if (isLoading) return <p>loading ...</p>;

  return (
    <div className="mt-6 flex flex-wrap gap-2 text-white">
      <p className="rounded-xl  bg-primary-400 px-10 py-5 ">
        درخواست ها
        <span className="mt-2 block text-center text-5xl">
          {proposals?.length}
        </span>
      </p>
      <p className="rounded-xl  bg-primary-400 px-10 py-5">
        درخواست های تایید شده
        <span className="mt-2 block text-center text-5xl">
          {proposals?.filter((p) => p.status === 2).length}
        </span>
      </p>
      <p className="rounded-xl bg-primary-400  px-10 py-5">
        درآمد
        <span className="mt-2 block text-center text-4xl">
          {toPersianNumnersWithComma(
            proposals
              ?.filter((p) => p.status === 2)
              .reduce((acc, cur) => cur.price + acc, 0)!,
          )}
          <span className="text-xl">تومان</span>
        </span>
      </p>
    </div>
  );
}

export default DashboardFreelancer;
