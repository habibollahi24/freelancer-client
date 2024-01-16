import Button from "./Button";

type Props = {
  onClose: () => void;
  onComfirm: () => void;
};

function ComfirmDelete({ onClose, onComfirm }: Props) {
  return (
    <>
      <p className="py-4 text-base">آیا از حذف پروژه مطمئن هستید؟</p>
      <div className="flex items-center justify-evenly gap-x-4">
        <Button className="primary-button w-full" onClick={onClose}>
          لغو
        </Button>
        <Button className="secondary-button w-full" onClick={onComfirm}>
          بله
        </Button>
      </div>
    </>
  );
}

export default ComfirmDelete;
