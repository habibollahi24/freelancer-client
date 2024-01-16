import { toPersianNumnersWithComma, trauncate } from "../../helper";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import { useProposals } from "./useProposals";

const statusProposal = [
  { status: 0, text: "رد درخواست  ", color: "bg-error text-secondary-0" },
  {
    status: 1,
    text: "در انتظار تایید",
    color: "bg-secondary-500 text-secondary-0",
  },
  { status: 2, text: "قبول شده  ", color: "bg-success text-secondary-0" },
];

function ProposalTable() {
  const { data: proposals, isLoading } = useProposals();

  if (isLoading) return <p>loading ...</p>;

  return (
    <div className="my-8 overflow-x-auto ">
      <Table>
        <Table.Head>
          <tr className="whitespace-nowrap text-xs child:px-2 child:py-4 child:text-center">
            <th>#</th>
            <th> توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th> وضعیت</th>
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
                <td>{trauncate(proposal.description, 50)}</td>
                <td>{proposal?.duration}روز</td>
                <td>{toPersianNumnersWithComma(proposal?.price)}</td>

                <td>
                  <Tag className={statusProposal[proposal?.status].color}>
                    {statusProposal[proposal?.status].text}
                  </Tag>
                </td>
              </tr>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTable;
