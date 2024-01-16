import { useState } from "react";
import Modal from "../../../ui/Modal";
import ChangeStatusProposal from "./ChangeStatusProposal";

type Props = {
  propsalId: string;
};

function ProposalActions({ propsalId }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="primary-button rounded-md p-2"
        onClick={() => setShowModal(true)}
      >
        تغییر وضعیت
      </button>
      <>
        {showModal && (
          <Modal
            title={` تغییر وضعیت درخواست `}
            onClose={() => setShowModal(false)}
          >
            <ChangeStatusProposal
              proposalId={propsalId}
              setShowModal={setShowModal}
            />
          </Modal>
        )}
      </>
    </>
  );
}

export default ProposalActions;
