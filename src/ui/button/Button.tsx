import { forwardRef } from "react";
import { IButton } from "./Button.interface";
import { useButtonStyles } from "./useButtonStyles";
import clsx from "clsx";

export const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { children, className, _s, ...rest } = props;
  const styles = useButtonStyles(_s);

  return (
    <button ref={ref} {...rest} className={clsx(className, styles)}>
      {children}
    </button>
  );
});
