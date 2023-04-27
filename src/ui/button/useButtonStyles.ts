import clsx from "clsx";
import { IButtonProps } from "./Button.interface";
import s from "./Button.module.scss";

export const useButtonStyles = (props: IButtonProps | undefined): string => {
  const initial: Required<IButtonProps> = {
    variant: props?.variant || "primary",
    size: props?.size || "md",
    outlined: props?.outlined || false,
    rounded: props?.rounded || "md",
  };

  return clsx(
    s.button,
    s[`variant-${initial.variant}`],
    s[`size-${initial.size}`],
    s[`rounded-${initial.rounded}`],
    {
      [s.outlined]: initial.outlined,
    }
  );
};
