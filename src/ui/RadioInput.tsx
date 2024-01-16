interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  label: string;
}

export default function RadioGroup({
  children,
  errors,
  name,
}: {
  children: React.ReactNode;
  errors: any;
  name: string;
}) {
  return (
    <div className="my-6 flex items-center  gap-x-4">
      {children}
      {errors && errors[name as string] && (
        <p className=" pb-1 text-sm text-error">
          {errors[name as string]?.message}
        </p>
      )}
    </div>
  );
}

const RadioInput = ({
  className,
  register,
  name,
  label,
  id,
  ...props
}: Props) => {
  return (
    <div>
      <input
        {...props}
        type="radio"
        name={name}
        id={id}
        {...register(name)}
        className={`w-full rounded-xl border-2 border-primary-400 px-4 py-2 placeholder:absolute placeholder:right-2 placeholder:text-sm ${className}`}
      />
      <label
        htmlFor={id}
        className="cursor-pointer rounded-lg border-2 border-primary-500 p-2 px-4 text-secondary-400 peer-checked:bg-primary-900 peer-checked:text-white "
      >
        {label}
      </label>
    </div>
  );
};

RadioGroup.RadioButton = RadioInput;
