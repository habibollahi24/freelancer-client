import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompleteProfileType, CompleteProfileSchema } from "./FormSchema";
import { useCompleteProfile } from "./useCompleteProfile";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import RadioGroup from "../../ui/RadioInput";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const { mutate } = useCompleteProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteProfileType>({
    resolver: yupResolver(CompleteProfileSchema),
  });

  const onSubmit = (formData: CompleteProfileType) => {
    mutate(formData, {
      onSuccess: (res) => {
        console.log(res);
        toast.success(res.data.message);
        const userStatus = res.data.user.status;
        const userRole = res.data.user.role;
        if (userStatus !== 2) {
          toast("پروفایل شما در انتظار تایید است.");
          return navigate("/", { replace: true });
        }
        if (userRole === "OWNER") return navigate("/owner", { replace: true });
        if (userRole === "FREELANCER")
          return navigate("/freelancer", { replace: true });
      },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[24rem] max-w-md flex-col gap-y-2  p-2"
      >
        <p className="mb-4 text-secondary-200">اطلاعات خود را تکمیل کنید.</p>
        <InputField
          placeholder="نام و نام خانوادگی"
          className=""
          name="name"
          register={register}
          errors={errors}
        />
        <InputField
          placeholder="ایمیل"
          name="email"
          register={register}
          errors={errors}
        />
        <RadioGroup errors={errors} name="role">
          <RadioGroup.RadioButton
            className="peer hidden"
            id="OWNER"
            register={register}
            name="role"
            value="OWNER"
            label="کارفرما"
          />
          <RadioGroup.RadioButton
            className="peer hidden"
            id="FREELANCER"
            register={register}
            name="role"
            value="FREELANCER"
            label="فریلنسر"
          />
        </RadioGroup>
        <Button type="submit" className="primary-button w-full">
          ارسال
        </Button>
      </form>
    </>
  );
}

export default CompleteProfileForm;
