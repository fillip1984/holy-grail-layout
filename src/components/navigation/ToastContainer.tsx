import { Toast } from "../../Types";
import ToastCard from "./ToastCard";

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (toastToRemove: Toast) => void;
}

const ToastContainer = ({ toasts, removeToast }: ToastContainerProps) => {
  return (
    <div className="pointer-events-none absolute top-0 right-0 bottom-0 flex w-1/2 flex-col items-center justify-end space-y-2 px-4 py-6">
      {toasts.map((toast) => (
        <ToastCard key={toast.id} toast={toast} removeToast={removeToast} />
      ))}
    </div>
  );
};

export default ToastContainer;
