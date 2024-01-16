import * as yup from "yup";

export type AddProposalType = {
  description: string;
  duration: string;
  price: string;
};

export const AddProposalSchema = yup.object().shape({
  description: yup
    .string()
    .min(10, "حداقل ده کاراکتر")
    .required("لطفا توضیحات را وارد کنید."),
  duration: yup.string().required("لطفا تعداد روز را وارد کنید."),
  price: yup.string().required("لطفا قیمت را وارد کنید."),
});
