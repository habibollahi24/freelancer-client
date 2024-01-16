import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { ProjectType } from "../../hook/useProjects";
import CreateAddProposalForm from "./CreateAddProposalForm";

function AddProposalAction({ project }: { project: ProjectType }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button
        disabled={project.status === "CLOSE"}
        onClick={() => setShowModal(true)}
        className="primary-button btn whitespace-nowrap"
      >
        درخواست همکاری
      </Button>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          title={`درخواست برای ${project.title}`}
        >
          <CreateAddProposalForm
            onClose={() => setShowModal(false)}
            projectId={project._id}
          />
        </Modal>
      )}
    </div>
  );
}

export default AddProposalAction;
