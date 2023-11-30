import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
  name: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, name, label, ...props },
  ref
) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} {...props} ref={ref} />
    </div>
  );
});

export default Input;
