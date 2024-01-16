import CreatableSelect from "react-select/creatable";
function TagsInput({
  selectTagHandler,
  errors,
  defaultValue
}: {
  selectTagHandler: (selectedOption: any) => void;
  errors: any;
  defaultValue:any
}) {
  return (
    <div>
      <CreatableSelect
        placeholder=" تگ ها"
        isMulti
        onChange={selectTagHandler}
        className="w-72"
        defaultValue={defaultValue}
      />
      {errors.tags && (
        <p className=" py-1 text-sm text-error">
          {errors.tags.message as string}
        </p>
      )}
    </div>
  );
}

export default TagsInput;
