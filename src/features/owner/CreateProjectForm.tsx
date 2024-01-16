import { useForm, useController } from "react-hook-form";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateFormSchema, CreateFormType } from "./CreateFormSchema";
import SelectOption from "../../ui/SelectOption";
import TagsInput from "../../ui/TagsInput";
import DatePickerInput from "../../ui/DatePickerInput";
import { useCreatePropject } from "./useCreatePropject";
import { miladiDate } from "../../helper";
import { ProjectType } from "./useOwnerProjects";
import { useEditPropject } from "./useEditProject";

type Props = {
  editMode?: boolean;
  project?: ProjectType;
};

function CreateProjectForm({ editMode, project }: Props) {
  let defaultValues = {};
  if (editMode) {
    defaultValues = {
      ...project,
      category: {
        value: project?.category._id,
        label: project?.category.title,
      },
      deadline: project?.deadline,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<CreateFormType>({
    resolver: yupResolver(CreateFormSchema),
    defaultValues,
  });

  const { mutate: createNewProject } = useCreatePropject();
  const { mutate: editProject } = useEditPropject();

  const {
    field: { onChange: setCategoryValue },
  } = useController({ name: "category", control });
  const {
    field: { onChange: setTagsValue },
  } = useController({ name: "tags", control });
  const {
    field: { value: deadlineValue, onChange: setDeadlineValue },
  } = useController({ name: "deadline", control });

  const onSubmit = (data: CreateFormType) => {
   
    if (!editMode) {
      const deadline = miladiDate(data.deadline);

      const newProject = {
        ...data,
        deadline: new Date(deadline).toISOString(),
        category: data.category.value,
      };

      createNewProject(newProject);
    } else {
      
      if (project?.deadline === data.deadline) {
        const editedProject = {
          title: data.title,
          description: data.description,
          tags: data.tags,
          budget: data.budget,
          deadline: new Date(project?.deadline!).toISOString(),
          category: data.category.value,
        };

        
        editProject({ id: project?._id, editedProject });
      } else {
        const deadline = miladiDate(data.deadline);
        const editedProject = {
          title: data.title,
          description: data.description,
          tags: data.tags,
          budget: data.budget,
          deadline: new Date(deadline).toISOString(),
          category: data.category.value,
        };
        

        editProject({ id: project?._id, editedProject });
      }
    }
  };

  const selectHandler = (selectedOption: any) => {
    console.log(selectedOption);
    setCategoryValue({
      value: selectedOption?.value,
      label: selectedOption?.label,
    });
  };
  const selectTagHandler = (selectedOption: any) => {
    setTagsValue(selectedOption.map((selected: any) => selected.value));
  };
  const deadlineHandler = (date: any) => {
    setDeadlineValue("");
    setDeadlineValue(date);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mx-auto flex max-w-2xl flex-wrap justify-center gap-4 py-4 text-sm md:justify-center"
    >
      <InputField
        register={register}
        errors={errors}
        name="title"
        className="w-72"
        placeholder="عنوان"
      />
      <InputField
        register={register}
        errors={errors}
        name="description"
        className="w-72"
        placeholder="توضیحات"
      />
      <InputField
        register={register}
        type="number"
        errors={errors}
        name="budget"
        className="w-72"
        placeholder="بودجه"
      />
      <SelectOption
        defaultValue={
          editMode && {
            value: project?.category?._id,
            label: project?.category?.title,
          }
          // editMode && project?.category?._id
        }
        selectHandler={selectHandler}
        errors={errors}
      />
      <TagsInput
        errors={errors}
        selectTagHandler={selectTagHandler}
        defaultValue={
          editMode && project?.tags.map((tag) => ({ value: tag, label: tag }))
        }
      />
      <DatePickerInput
        deadlineHandler={deadlineHandler}
        errors={errors}
        value={deadlineValue}
      />

      <Button type="submit" className="primary-button col-span-2 w-72">
        ارسال
      </Button>
    </form>
  );
}

export default CreateProjectForm;
