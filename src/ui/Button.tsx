interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, type = "button", className, ...props }: Props) {
  return (
    <>
      <button
        type={type}
        className={`rounded-lg py-2 disabled:!bg-gray-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
