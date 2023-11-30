import { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

// import { useTimersContext } from "../store/timers-store.tsx";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  // const cartQuantity = useAppSelector(state =>
  //   state.cart.items.reduce((value, item) => value + item.quantity, 0)
  // );

  // const timersCtx = useTimersContext();

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <header>
      {cartIsVisible && <Modal onClose={handleCloseCartClick} />}
      <h1>Sessions booking</h1>

      <Button textOnly={true} to="http.google.com">
        Hello this is a button
      </Button>

      <Button onClick={handleOpenCartClick}>Open Modal</Button>
    </header>
  );
}
