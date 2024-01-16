import { toPersianNumnersWithComma, trauncate } from "../../../helper";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import { ProposalType } from "./useProject";

import ProposalActions from "./ProposalActions";

type Props = {
  proposals: ProposalType[] | undefined;
};

const statusProposal = [
  { status: 0, text: "رد درخواست  ", color: "bg-error text-secondary-0" },
  {
    status: 1,
    text: "در انتظار تایید",
    color: "bg-secondary-500 text-secondary-0",
  },
  { status: 2, text: "قبول شده  ", color: "bg-success text-secondary-0" },
];
function ProposalList({ proposals }: Props) {
  if (!proposals?.length)
    return <p className="my-8 ">درخواستی برای این پروژه نیست.</p>;

  return (
    <div className="my-8 overflow-x-auto ">
      <Table>
        <Table.Head>
          <tr className="whitespace-nowrap text-xs child:px-2 child:py-4 child:text-center">
            <th>#</th>
            <th> فریلنسر</th>
            <th> توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th> وضعیت</th>
            <th> عملیات</th>
          </tr>
        </Table.Head>
        <Table.Body>
          {proposals?.map((proposal, index) => {
            return (
              <tr
                key={proposal?._id}
                className="border even:bg-secondary-800 child:whitespace-nowrap child:px-6 child:py-6 child:text-center"
              >
                <th>{index + 1}</th>
                <td>{proposal?.user?.name}</td>
                <td title={proposal?.description}>
                  {trauncate(proposal?.description, 15)}
                </td>
                <td>{proposal?.duration}روز</td>
                <td>{toPersianNumnersWithComma(proposal?.price)}</td>

                <td>
                  <Tag className={statusProposal[proposal?.status].color}>
                    {statusProposal[proposal?.status].text}
                  </Tag>
                </td>
                <td>
                  <ProposalActions propsalId={proposal?._id} />
                </td>
              </tr>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalList;
