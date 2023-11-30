import { ReactNode } from "react";
import { createPortal } from "react-dom";

// import CartItems from "./CartItems.tsx";

type ModalProps = {
  children?: ReactNode;
  onClose: () => void;
};

/**
 * So it seems I need a very flexible modal, that shows different contents depending if it was called
 * in different places. What is a bit weird but ok, I will pass children to output different components
 *  So now I can pass what ever into the modal
 */

export default function Modal({ onClose, children }: ModalProps) {
  return createPortal(
    <main className="modal">
      <dialog id="modal" open>
        {children}
        <p>
          <button className="button" onClick={onClose}>
            Close
          </button>
        </p>
      </dialog>
    </main>,
    document.getElementById("modal-root")!
  );
}
