import { createPortal } from "react-dom";

// import CartItems from "./CartItems.tsx";

type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  return createPortal(
    <main className="modal">
      <div className="cart-backdrop" />
      <dialog id="cart-modal" open>
        <h2>Book a session section</h2>
        {/* <CartItems /> */}

        <h2>Upcoming sessions here</h2>
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </main>,
    document.getElementById("modal-root")!
  );
}
