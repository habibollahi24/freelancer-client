import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import { useChangeUserStatus } from "./useChangeUserStatus";
import { useUsers } from "./useUsers";

const statusUsers = [
  { status: 0, text: "رد درخواست  ", color: "bg-error text-secondary-0" },
  {
    status: 1,
    text: "در انتظار تایید",
    color: "bg-secondary-500 text-secondary-0",
  },
  { status: 2, text: "قبول شده  ", color: "bg-success text-secondary-0" },
];
const usersRole = {
  FREELANCER: {
    role: "فریلنسر",
  },
  OWNER: { role: "کارفرما" },
  ADMIN: { role: "ادمین" },
};

const buttonsGroup = [
  { label: "رد", status: 0, id: 1 },
  { label: "درانتظار", status: 1, id: 3 },
  { label: "قبول", status: 2, id: 2 },
];

function UsersTable() {
  const { users, isLoading } = useUsers();
  const { mutate } = useChangeUserStatus();

  const ClickHandler = (status: number, userId: string) => {
    mutate({ userId, status: { status } });
  };
  if (isLoading) return <p>loading...</p>;
  return (
    <div className="my-8 overflow-x-auto ">
      <Table>
        <Table.Head>
          <tr className="whitespace-nowrap text-xs child:px-2 child:py-4 child:text-center">
            <th>#</th>
            <th> نام</th>
            <th> ایمیل</th>
            <th>شماره موبایل</th>
            <th> نقش</th>
            <th> وضعیت</th>
            <th> عملیات</th>
          </tr>
        </Table.Head>
        <Table.Body>
          {users
            ?.filter((user) => user.role !== "ADMIN")
            ?.map((user, index) => {
              return (
                <tr
                  key={user?._id}
                  className="border even:bg-secondary-800 child:whitespace-nowrap child:px-6 child:py-6 child:text-center"
                >
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    <Tag className="bg-secondary-700">
                      {usersRole[user.role].role}
                    </Tag>
                  </td>
                  <td>
                    <Tag className={statusUsers[user?.status].color}>
                      {statusUsers[user?.status].text}
                    </Tag>
                  </td>
                  <td>
                    <div className="flex  items-center gap-x-2">
                      <div className="border-primary-40 flex flex-col gap-x-2 rounded-xl  bg-secondary-0 p-1">
                        {buttonsGroup.map((btn) => {
                          return (
                            <button
                              disabled={user.status === btn.status}
                              onClick={() => ClickHandler(btn.status, user._id)}
                              key={btn.id}
                              className={`rounded-xl px-2 py-1 transition-all duration-200 ${
                                user.status === btn.status
                                  ? " bg-primary-400  text-white"
                                  : ""
                              }`}
                            >
                              {btn.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default UsersTable;
