import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hook/useOutsideClick";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
};

function Modal({ onClose, children, title }: Props) {
  const { boxRef } = useOutsideClick(onClose);

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-gray-800/50 backdrop-blur-[2px] ">
      <div
        ref={boxRef}
        className="max-h-screen  w-[calc(100vw-2rem)] overflow-y-auto rounded-xl bg-secondary-0 p-6 shadow-md md:max-w-md"
      >
        <div className="text-end">
          <button className="text-error" onClick={onClose}>
            <HiOutlineX />
          </button>
        </div>
        <h2 className="border-b-2  pb-2 text-sm font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
