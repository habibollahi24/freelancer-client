import { useState } from "react";
import { useTogglePropject } from "./useToggleProject";

type Props = {
  id: string;
  status: string;
};

function ToggleStatus({ id, status }: Props) {
  const [enabled, setEnabled] = useState(status === "OPEN" ? true : false);
  const { mutate: toggleProjectStatus } = useTogglePropject();
  const handleChange = () => {
    const newStatus =
      status === "OPEN" ? { status: "CLOSE" } : { status: "OPEN" };

    toggleProjectStatus(
      { id, status: newStatus },
      {
        onSuccess: (data) => {
          setEnabled(!enabled);
          console.log(data);
        },
      },
    );
  };
  return (
    <div className="relative -z-0 flex w-[5rem] flex-col items-center justify-center overflow-hidden ">
      <div className="flex ">
        <label
          htmlFor={id}
          className="relative  inline-flex cursor-pointer flex-row-reverse items-center "
        >
          <input
            id={id}
            type="checkbox"
            className="peer sr-only"
            checked={enabled}
            readOnly
          />
          <div
            onClick={handleChange}
            className="peer h-6 w-11 rounded-full bg-gray-200  after:absolute  after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
            {enabled ? "باز" : "بسته"}
          </span>
        </label>
      </div>
    </div>
  );
}

export default ToggleStatus;
