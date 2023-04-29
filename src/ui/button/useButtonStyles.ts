import clsx from "clsx";
import { IButtonProps, IButtonStyleProps } from "./Button.interface";
import s from "./Button.module.scss";

export const useButtonStyles = (props: IButtonProps | undefined): string => {
  const initial: Required<IButtonStyleProps> = {
    variant: props?.variant || "primary",
    size: props?.size || "md",
    rounded: props?.rounded || "md",
  };

  return clsx(
    s.button,
    s[`variant-${initial.variant}`],
    s[`size-${initial.size}`]
  );
};
