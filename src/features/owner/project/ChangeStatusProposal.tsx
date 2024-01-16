import { useController, useForm } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../ui/Button";
import { ChangeStatusSchema, ChangeStatusType } from "./ChangeStatusSchema";
import { useChangeStatus } from "./useChangeStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const statusList = [
  { value: 0, label: "رد درخواست " },
  { value: 1, label: "در انتظار تایید" },
  { value: 2, label: "قبول درخواست" },
];

type Props = {
  proposalId: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function ChangeStatusProposal({ proposalId, setShowModal }: Props) {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<ChangeStatusType>({
    resolver: yupResolver(ChangeStatusSchema),
  });

  const {
    field: { value: statusValue, onChange: setStatusValue, ...restLangField },
  } = useController({ name: "status", control });

  const { mutate: changeStatus } = useChangeStatus();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const onSubmit = (data: ChangeStatusType) => {
    changeStatus(
      { proposalId, projectId: id, ...data }, //{proposalId , projectId , status}
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["project", id] });
          setShowModal(false);
        },
      },
    );
  };

  return (
    <div className="pb-12 pt-2 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          placeholder="دسته بندی"
          isClearable
          options={statusList}
          value={
            statusValue
              ? statusList.find((x: any) => x.value === statusValue)
              : statusValue
          }
          onChange={(option: any) =>
            setStatusValue(option ? option.value : option)
          }
          className="w-full"
          {...restLangField}
        />
        {errors.status && (
          <p className=" py-1 text-sm text-error">
            {errors.status?.message as string}
          </p>
        )}

        <Button type="submit" className="primary-button mt-4 w-full">
          تغییر
        </Button>
      </form>
    </div>
  );
}

export default ChangeStatusProposal;

// sendOTP(phoneNumber, res) {
// const kaveNegarApi = Kavenegar.KavenegarApi({
//   apikey: `${process.env.KAVENEGAR_API_KEY}`,
// });
// kaveNegarApi.VerifyLookup(
//   {
//     receptor: phoneNumber,
//     token: this.code,
//     template: "registerVerify",
//   },
//   (response, status) => {
//     console.log("kavenegar message status", status);
//     if (response && status === 200)
//       return res.status(HttpStatus.OK).send({
//         statusCode: HttpStatus.OK,
//         data: {
//           message: `کد تائید برای شماره موبایل ${toPersianDigits(
//             phoneNumber
//           )} ارسال گردید`,
//           expiresIn: CODE_EXPIRES,
//           phoneNumber,
//         },
//       });

//     return res.status(status).send({
//       statusCode: status,
//       message: "کد اعتبارسنجی ارسال نشد",
//     });
//   }
// );
//   return res.status(HttpStatus.OK).send({
//     statusCode: HttpStatus.OK,
//     data: {
//       message: `کد تائید برای شماره موبایل ${toPersianDigits(
//         phoneNumber
//       )} ارسال گردید`,
//       expiresIn: CODE_EXPIRES,
//       phoneNumber,
//       code: this.code,
//     },
//   });
// }
