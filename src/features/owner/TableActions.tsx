import { useState } from "react";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import Modal from "../../ui/Modal";
import ComfirmDelete from "../../ui/ComfirmDelete";
import { useDeleteProject } from "./useDeleteProject";
import CreateProjectForm from "./CreateProjectForm";
import { ProjectType } from "./useOwnerProjects";

type Props = {
  project: ProjectType;
};

function TableActions({ project }: Props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { deleteProject } = useDeleteProject();

  return (
    <div className="flex items-center gap-x-2 text-xl">
      {/* edit action */}
      <>
        <button onClick={() => setShowEditModal(true)}>
          <HiOutlinePencilAlt className="text-secondary-400" />
        </button>
        {showEditModal && (
          <Modal
            title={`ویرایش پروژه ${project.title}`}
            onClose={() => setShowEditModal(false)}
          >
            <CreateProjectForm editMode project={project} />
          </Modal>
        )}
      </>
      {/* delete actions */}
      <>
        {showDeleteModal && (
          <Modal
            title={`حذف پروژه${project.title}`}
            onClose={() => setShowDeleteModal(false)}
          >
            <ComfirmDelete
              onClose={() => setShowDeleteModal(false)}
              onComfirm={() => deleteProject(project._id)}
            />
          </Modal>
        )}
        <button onClick={() => setShowDeleteModal(true)}>
          <HiOutlineTrash className="text-error" />
        </button>
      </>
    </div>
  );
}

export default TableActions;
