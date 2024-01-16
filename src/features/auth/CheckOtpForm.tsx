import Button from "../../ui/Button";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useCheckOtp } from "./useCheckOtp";
import { HiArrowSmRight } from "react-icons/hi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Props = {
  optCode: number;
  phoneNumber: string;
  setStep: React.Dispatch<React.SetStateAction<"sendOtp" | "checkOtp">>;
};

function CheckOtpForm({ optCode, phoneNumber, setStep }: Props) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(90);

  const { mutate } = useCheckOtp();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(
      { phoneNumber, otp: value },
      {
        onSuccess: (res) => {
          console.log(res);
          toast.success(res.data.message);
          const isActive = res.data.user.isActive;
          const userStatus = res.data.user.status;
          const userRole = res.data.user.role;

          if (!isActive)
            return navigate("/complete-profile", { replace: true });
          if (userStatus !== 2) {
            toast("پروفایل شما در انتظار تایید است.");
            return navigate("/", { replace: true });
          }
          if (userRole === "OWNER")
            return navigate("/owner", { replace: true });
          if (userRole === "FREELANCER")
            return navigate("/freelancer", { replace: true });
          if (userRole === "ADMIN")
            return navigate("/admin", { replace: true });
        },
      },
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t > 0) return t - 1;
        return 0;
      });
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <button
        className="mb-4 flex items-center space-x-2"
        onClick={() => setStep("sendOtp")}
      >
        <HiArrowSmRight />
        <span className=" text-sm">بازگشت</span>
      </button>
      <div className="flex items-center justify-between rounded-md bg-secondary-700 p-2">
        <p> ارسال به شماره : {phoneNumber}</p>
        <button onClick={() => setStep("sendOtp")}>ویرایش</button>
      </div>
      <form className=" space-y- p-2" onSubmit={submitHandler}>
        <div className="flex items-center justify-between">
          <p className="mb-2 font-medium">کد تایید را وارد کنید.</p>
        </div>
        <OtpInput
          shouldAutoFocus={true}
          value={value}
          onChange={setValue}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-1 p-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: ".5rem .2rem",
            border: "2px solid rgb(var(--color-primary-400))",
            borderRadius: "10px",
          }}
        />
        <div className="my-4 text-center">
          {timer === 0 ? (
            <Button onClick={() => setStep("sendOtp")}>ارسال مجدد کد</Button>
          ) : (
            <p className="text-xs">زمان باقی مانده:{timer}</p>
          )}
        </div>
        <span className=" my-1 flex justify-center text-sm font-bold ">
          {optCode}
        </span>
        <Button
          type="submit"
          disabled={value.trim().length !== 6}
          className="primary-button w-full"
        >
          تایید
        </Button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
