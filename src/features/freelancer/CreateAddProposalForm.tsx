import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProposalSchema, AddProposalType } from "./AddProposalSchema";
import { useCreateProposal } from "./useCreateProposal";

type Props = {
  onClose: () => void;
  projectId: string;
};

function CreateAddProposalForm({ onClose, projectId }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProposalType>({ resolver: yupResolver(AddProposalSchema) });

  const { mutate: addNewProposal } = useCreateProposal();

  const onSubmit = (formData: AddProposalType) => {
    const payload = { ...formData, projectId };
    addNewProposal(payload, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div>
      <form className="my-4 text-right" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          errors={errors}
          name="description"
          placeholder="توضیحات"
          className="my-1 w-full"
        />
        <InputField
          register={register}
          errors={errors}
          name="duration"
          type="number"
          placeholder="زمان/روز"
          className="my-1 w-full"
        />
        <InputField
          register={register}
          errors={errors}
          name="price"
          type="number"
          placeholder="قیمت"
          className="my-1 w-full"
        />
        <Button type="submit" className="primary-button btn mt-4 w-full">
          ارسال
        </Button>
      </form>
    </div>
  );
}

export default CreateAddProposalForm;
