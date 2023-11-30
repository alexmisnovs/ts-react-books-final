import { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Input from "../UI/Input";

// import { useTimersContext } from "../store/timers-store.tsx";

export default function Header() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // const cartQuantity = useAppSelector(state =>
  //   state.cart.items.reduce((value, item) => value + item.quantity, 0)
  // );

  // const timersCtx = useTimersContext();

  function handleOpenCartClick() {
    setModalIsVisible(true);
  }

  function handleCloseCartClick() {
    setModalIsVisible(false);
  }

  return (
    <header>
      {modalIsVisible && (
        <Modal onClose={handleCloseCartClick}>
          <Button textOnly={true} to="http.google.com">
            This is a link
          </Button>

          <Input id="first" name="first" label="First input" />
        </Modal>
      )}
      <h1>Sessions booking</h1>

      <Button onClick={handleOpenCartClick}>Open Modal</Button>
    </header>
  );
}
