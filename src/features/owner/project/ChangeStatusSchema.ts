import * as yup from "yup";

export type ChangeStatusType = {
  //   status: { value: string; label: string };
  status: string;
};

export const ChangeStatusSchema = yup.object().shape({
  //   status: yup
  //     .object({
  //       value: yup.string().required("لطفا دسته خود را وارد کنید."),
  //       label: yup.string().required("لطفا دسته خود را وارد کنید."),
  //     })
  //     .required("لطفا دسته خود را وارد کنید."),
  status: yup.string().required("لطفا تغییر وضعیت را وارد کنید. "),
});
