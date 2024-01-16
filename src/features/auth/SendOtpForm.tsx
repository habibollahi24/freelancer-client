import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendOtpSchema, sendOtpType } from "./FormSchema";

import toast from "react-hot-toast";
import { useSendOtp } from "./useSendOtp";
import { useEffect } from "react";
import InputField from "../../ui/InputField";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<"sendOtp" | "checkOtp">>;
  setOtpCode: React.Dispatch<React.SetStateAction<number>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
};

function SendOtpForm({
  setStep,
  setOtpCode,
  setPhoneNumber,
  phoneNumber,
}: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<sendOtpType>({
    resolver: yupResolver(sendOtpSchema),
  });
  const { mutate, isPending } = useSendOtp();

  const onSubmit = (data: sendOtpType) => {
    mutate(data, {
      onSuccess: (res) => {
        toast.success(res.data.message);
        setStep("checkOtp");
        setOtpCode(res.data.code);
        setPhoneNumber(data.phoneNumber);
      },
    });
  };

  useEffect(() => {
    setValue("phoneNumber", phoneNumber);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex w-[24rem] max-w-md flex-col space-y-2  p-2"
      >
        <h1 className="font-medium">به فریلنسر24 خوش آمدید</h1>
        <InputField
          register={register}
          name="phoneNumber"
          errors={errors}
          className="w-full"
        />
        <Button
          disabled={isPending}
          type="submit"
          className="primary-button w-full"
        >
          {isPending ? "درحال ارسال..." : "ارسال کد تایید"}
        </Button>
      </form>
    </>
  );
}

export default SendOtpForm;
