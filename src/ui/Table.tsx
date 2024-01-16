type Props = {
  children: React.ReactNode;
};

function Table({ children }: Props) {
  return (
    <table className=" w-full overflow-hidden  rounded-xl  text-sm">
      {children}
    </table>
  );
}

function HeadTable({ children }: Props) {
  return (
    <thead className="  bg-primary-600 text-secondary-0">{children}</thead>
  );
}
function BodyTable({ children }: Props) {
  return <tbody className="">{children}</tbody>;
}

export default Table;
Table.Head = HeadTable;
Table.Body = BodyTable;
