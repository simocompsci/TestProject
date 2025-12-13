import { X } from "lucide-react";


function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-3xl  border-2 border-black bg-amber-50 p-5">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 hover:scale-110 transition"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
export default Modal