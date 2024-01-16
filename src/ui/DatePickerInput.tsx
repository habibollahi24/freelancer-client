import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerInput({
  deadlineHandler,
  errors,
  value,
}: {
  deadlineHandler: (selectedOption: any) => void;
  errors: any;
  value: any;
}) {
  return (
    <div>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        inputClass="w-72 rounded-xl border-2 border-primary-400 px-4 py-2 placeholder:absolute placeholder:right-2 placeholder:text-sm"
        containerClassName="w-72"
        placeholder="ددلاین"
        onChange={deadlineHandler}
        value={value}
        format="YYYY/MM/DD"
        calendarPosition="center "
      />
      {errors.deadline && (
        <p className=" py-1 text-sm text-error">
          {errors.deadline.message as string}
        </p>
      )}
    </div>
  );
}

export default DatePickerInput;
