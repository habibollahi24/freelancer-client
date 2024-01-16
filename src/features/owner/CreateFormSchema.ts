import * as yup from "yup";

export type CreateFormType = {
  title: string;
  description: string;
  budget: string;
  category: {value:string , label:string};
  tags: any[];
  deadline: any;
};

export const CreateFormSchema = yup.object().shape({
  title: yup.string().trim().required("لطفا عنوان را وارد کنید."),
  description: yup.string().required("لطفا توضیحات را وارد کنید."),
  budget: yup.string().required("لطفا مبلغ خود را وارد کنید."),
  // category: yup.string().required("لطفا دسته خود را وارد کنید."),
  category: yup
    .object({
      value: yup.string().required("لطفا دسته خود را وارد کنید."),
      label: yup.string().required("لطفا دسته خود را وارد کنید."),
    })
    .required("لطفا دسته خود را وارد کنید."),
  tags: yup.array().of(yup.string()).required("لطفا تگ های خود را وارد کنید."),
  deadline: yup.string().required("لطفا ددلاین را وارد کنید."),
});
