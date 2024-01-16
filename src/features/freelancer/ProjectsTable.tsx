import {
  trauncate,
  toPersianNumnersWithComma,
  toLocaleDateString,
} from "../../helper";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

import { useProjects } from "../../hook/useProjects";

import AddProposalAction from "./AddProposalAction";

const statusTag = {
  CLOSE: {
    text: "بسته   ",
    color: "bg-error text-secondary-0",
  },
  OPEN: {
    text: " باز  ",
    color: "bg-success text-secondary-0",
  },
};

function ProjectsTable() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) return <p>LOADING ...</p>;

  if (!projects?.length) return <p>پروژه ای یافت نشد!</p>;

  return (
    <div className="flex w-full overflow-x-auto pt-8">
      <Table>
        <Table.Head>
          <tr className=" whitespace-nowrap text-xs child:px-2 child:py-4">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th> وضعیت</th>
            <th> عملیات</th>
          </tr>
        </Table.Head>
        <Table.Body>
          {projects?.map((project, index) => {
            return (
              <tr
                key={project._id}
                className="border text-center even:bg-secondary-800 child:px-2 child:py-6"
              >
                <th>{index + 1}</th>
                <td title={project.title}>{trauncate(project.title, 15)}</td>
                <td>{toPersianNumnersWithComma(project.budget)}</td>
                <td>{toLocaleDateString(project.deadline)}</td>
                <td>
                  <Tag className={statusTag[project.status].color}>
                    {statusTag[project.status].text}
                  </Tag>
                </td>
                <td>
                  <AddProposalAction project={project} />
                </td>
              </tr>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProjectsTable;
