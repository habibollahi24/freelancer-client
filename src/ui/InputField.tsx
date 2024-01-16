interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  errors: any;
}

const InputField = ({
  type = "text",
  className,
  register,
  name,
  errors,
  ...props
}: Props) => {
  return (
    <div>
      <input
        {...props}
        type={type}
        name={name}
        {...register(name)}
        className={` rounded-xl border-2 border-primary-400 px-4 py-2 placeholder:absolute placeholder:right-2 placeholder:text-sm ${className}`}
      />
      {errors && errors[name as string] && (
        <p className=" py-1 text-sm text-error">
          {errors[name as string]?.message}
        </p>
      )}
    </div>
  );
};

export default InputField;
