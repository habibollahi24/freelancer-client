import { useSearchParams } from "react-router-dom";

const buttonsGroup = [
  { label: "همه", value: "ALL", id: 1 },
  { label: "باز", value: "OPEN", id: 2 },
  { label: "بسته", value: "CLOSE", id: 3 },
];

function ButtonGroupFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || buttonsGroup[0].value;

  const ClickHandler = (value: string) => {
    searchParams.set("status", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-2">
      <span>وضعیت:</span>
      <div className="border-primary-40 flex gap-x-2 rounded-xl  bg-secondary-0 p-1">
        {buttonsGroup.map((btn) => {
          return (
            <button
              disabled={status === btn.value}
              onClick={() => ClickHandler(btn.value)}
              key={btn.id}
              className={`rounded-xl px-2 py-1 transition-all duration-200 ${
                status === btn.value ? " bg-primary-400  text-white" : ""
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonGroupFilter;
