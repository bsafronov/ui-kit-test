import clsx from "clsx";
import s from "./Input.module.scss";
import { IInputProps } from "./Input.interface";

export const useInputStyles = (props: IInputProps) => {
  const initial = {
    s_wrapper: s.input__wrapper,
    s_input: clsx(s.input, {
      [s.input__invalid]: props.invalid || props.error,
    }),
    s_label: s.input__label,
    s_error: clsx(s.input__error, {
      [s.visible]: props.invalid || props.error,
    }),
  };

  return initial;
};
