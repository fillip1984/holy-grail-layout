import { BsInfoCircle } from "react-icons/bs";
import { Toast } from "../../Types";

interface ToastCardProps {
  toast: Toast;
  removeToast: (toastToRemove: Toast) => void;
}

const ToastCard = ({ toast, removeToast }: ToastCardProps) => {
  return (
    <div
      className={`pointer-events-auto z-50 flex min-h-[8vh] w-full items-center justify-between rounded-lg bg-sky-300 p-2 text-2xl transition-all duration-300 
      ${
        toast.visible
          ? "-translate-x-100 opacity-100"
          : "translate-x-full opacity-0"
      }`}>
      <div className="flex items-center space-x-2">
        <span>
          <BsInfoCircle />
        </span>
        <span>{toast.message}</span>
      </div>
      <button
        className="flex h-8 w-8 items-center justify-end rounded-full border border-black p-2"
        onClick={() => removeToast(toast)}>
        X
      </button>
    </div>
  );
};

export default ToastCard;
