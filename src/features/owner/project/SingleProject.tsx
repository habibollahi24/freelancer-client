import { useProject } from "./useProject";
import { HiArrowCircleRight } from "react-icons/hi";
import { useOnBack } from "../../../hook/useOnBack";
import ProposalList from "./ProposalList";

function SingleProject() {
  const { data: project, isLoading } = useProject();
  const onBack = useOnBack();

  if (isLoading) return <p>Loading ....</p>;

  return (
    <div className="">
      <button onClick={onBack}>
        <HiArrowCircleRight className="text-3xl" />
      </button>
      <h2>لیست درخواست های پروژه {project?.title}</h2>
      <ProposalList proposals={project?.proposals} />
    </div>
  );
}

export default SingleProject;
