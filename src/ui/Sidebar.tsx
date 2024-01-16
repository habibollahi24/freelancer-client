import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

function Sidebar({ title, children }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold"> {title}</h2>
      <ul className="pt-10" id="sidebar-options">
        {children}
      </ul>
    </div>
  );
}

export default React.memo(Sidebar);
