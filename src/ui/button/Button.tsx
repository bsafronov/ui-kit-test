import { forwardRef } from "react";
import { IButton } from "./Button.interface";
import { useButtonStyles } from "./useButtonStyles";
import clsx from "clsx";

export const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { children, className, before, after, ...rest } = props;
  const styles = useButtonStyles(props);

  return (
    <button ref={ref} {...rest} className={clsx(className, styles)}>
      {before}
      {children}
      {after}
    </button>
  );
});
