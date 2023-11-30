import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
  textOnly?: boolean;
  children: ReactNode;
};
type LinkProps = ComponentPropsWithoutRef<"a"> & {
  to: string;
  textOnly?: boolean;
  children: ReactNode;
};

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  if (isLinkProps(props)) {
    return (
      <Link className={`button ${props.textOnly && "button--text-only"}`} {...props}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={`button ${props.textOnly && "button--text-only"}`} {...props}>
      {props.children}
    </button>
  );
}
