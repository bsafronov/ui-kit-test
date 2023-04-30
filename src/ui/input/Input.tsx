import { forwardRef, useState } from "react";
import { IInput } from "./Input.interface";
import { useInputStyles } from "./useInputStyles";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import OptionalMask from "./OptionalMask";

export const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { className, label, error, mask, before, after, ...rest } = props;
  const { s_label, s_input, s_wrapper, s_error } = useInputStyles(props);
  const [id] = useState(uuidv4());

  return (
    <div className={s_wrapper}>
      {label && (
        <label htmlFor={id} className={s_label}>
          {label}
        </label>
      )}
      <OptionalMask {...props}>
        <div>
          <input
            id={id}
            {...rest}
            ref={ref}
            className={clsx(s_input, className)}
          />
        </div>
      </OptionalMask>
      <span className={s_error}>{error}</span>
    </div>
  );
});
