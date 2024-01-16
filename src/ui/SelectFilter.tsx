import { useSearchParams } from "react-router-dom";

type Props = {
  by: string;
  options: any[];
};

function SelectFilter({ by, options }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(by) || "";

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set(by, e.target.value);
    setSearchParams(searchParams);
    
  };

  return (
    <select
      value={value}
      onChange={changeHandler}
      className="xx w-48 cursor-pointer appearance-none rounded-xl border-2 border-primary-400 px-4 py-2 placeholder:absolute placeholder:right-2 placeholder:text-sm"
    >
      {options?.map((opt: any) => {
        return (
          <option
            key={opt.englishTitle}
            className="p-5"
            value={opt.englishTitle}
          >
            {opt.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectFilter;
