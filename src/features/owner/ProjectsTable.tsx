import { Link } from "react-router-dom";
import {
  toLocaleDateString,
  toPersianNumnersWithComma,
  trauncate,
} from "../../helper";
import { HiEye } from "react-icons/hi";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import TableActions from "./TableActions";
import ToggleStatus from "./ToggleStatus";
import { useOwnerProjects } from "./useOwnerProjects";

function ProjectsTable() {
  const { data, isLoading } = useOwnerProjects();

  if (isLoading) return <p>loading...</p>;
  if (!data?.length) return <p>شما هنوز پروژه ای ایجاد نکرده اید.</p>;
  return (
    <div className="flex w-full overflow-x-auto pt-8">
      <Table>
        <Table.Head>
          <tr className=" whitespace-nowrap text-xs child:px-2 child:py-4">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th> فریلنسر</th>
            <th> وضعیت</th>
            <th> عملیات</th>
            <th> درخواست ها</th>
          </tr>
        </Table.Head>
        <Table.Body>
          {data?.map((project, index) => {
            return (
              <tr
                key={project._id}
                className="border text-center even:bg-secondary-800 child:px-2 child:py-6"
              >
                <th>{index + 1}</th>
                <td title={project.title}>{trauncate(project.title, 15)}</td>
                <td>{project.category.title}</td>
                <td>{toPersianNumnersWithComma(project.budget)}</td>
                <td>{toLocaleDateString(project.deadline)}</td>
                <td className="flex max-w-[180px] flex-wrap gap-1 ">
                  {project.tags.map((tag) => (
                    <Tag key={tag} className="bg-secondary-700 ">
                      {tag}
                    </Tag>
                  ))}
                </td>
                <td>{project.freelancer?.name || "-"}</td>
                <td>
                  <ToggleStatus id={project._id} status={project.status} />
                </td>
                <td>
                  <TableActions project={project} />
                </td>
                <td className="flex justify-center">
                  <Link to={project._id}>
                    <HiEye className="text-center text-xl text-primary-700" />
                  </Link>
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
