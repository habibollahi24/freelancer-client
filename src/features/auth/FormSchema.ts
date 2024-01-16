import * as yup from "yup";

export type sendOtpType = {
  phoneNumber: string;
};

export const sendOtpSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("لطفا شماره را وارد کنید.")
    .matches(/^[0][9][0-9][0-9]{8,8}$/, "شماره صحیح نیست."),
});

export type CompleteProfileType = {
  name: string;
  email: string;
  role: string;
};

export const CompleteProfileSchema = yup.object().shape({
  name: yup.string().trim().required("لطفا نام را وارد کنید."),
  email: yup.string().email().required("لطفا ایمیل را وارد کنید."),
  role: yup.string().required("لطفا نقش خود را وارد کنید."),
});
