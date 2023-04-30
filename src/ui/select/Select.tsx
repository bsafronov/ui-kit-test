import { forwardRef, useEffect, useState } from "react";
import s from "./Select.module.scss";
import clsx from "clsx";
import { ReactComponent as ArrowDown } from "@svg/arrow-down.svg";

interface ISelect
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  options: ISelectOption[];
  value?: ISelectOption;
  setValue?: (e: ISelectOption) => void;
}

export interface ISelectOption {
  value: string;
  label: string;
}

export const Select = forwardRef<HTMLDivElement, ISelect>((props, ref) => {
  const { options, value, setValue, ...rest } = props;
  const [isOpen, setOpen] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<ISelectOption | null>(
    value ?? null
  );

  useEffect(() => {
    if (setValue && activeOption) setValue(activeOption);
  }, [activeOption]);

  function handleSetActive(item: ISelectOption) {
    setActiveOption(item);
    setOpen(false);
  }

  return (
    <div className={s.select} ref={ref} {...rest}>
      <div
        className={s.select__header}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={s["select__header-text"]}>
          {activeOption?.label ?? "Выбрать"}
        </span>
        <ArrowDown
          color="#d3d9de"
          width={10}
          height={10}
          className={clsx(s.select__arrow, { [s.active]: isOpen })}
        />
      </div>
      <ul className={clsx(s.select__list, { [s.active]: isOpen })}>
        {options.map((item, index) => (
          <li
            className={clsx(s.select__item, {
              [s.active]: item.value === activeOption?.value,
            })}
            key={index}
            onClick={() => handleSetActive(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
});
