import Select from "react-select";
import { useCategoryList } from "../hook/useCategoryList";

type Props = {
  selectHandler: (selectedOption: any) => void;
  errors: any;
  defaultValue?: any;
};

function SelectOption({ selectHandler, errors, ...props }: Props) {
  const { data: categories } = useCategoryList();

  return (
    <div>
      <Select
        {...props}
        placeholder="دسته بندی"
        isClearable
        options={categories}
        onChange={selectHandler}
        className="w-72"
        defaultValue={props.defaultValue || "Select"}
      />
      {errors.category && (
        <p className=" py-1 text-sm text-error">
          {errors.category?.value?.message as string}
        </p>
      )}
    </div>
  );
}

export default SelectOption;
