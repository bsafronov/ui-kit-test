import { forwardRef } from "react";
import s from "./Card.module.scss";
import { ICard } from "./Card.interface";
import clsx from "clsx";

export const Card = forwardRef<HTMLDivElement, ICard>((props, ref) => {
  const { className, children, head, ...rest } = props;

  return (
    <div ref={ref} {...rest} className={s.card}>
      {head && <div className={s["card__title-wrapper"]}>{head}</div>}
      <div className={clsx(className, s["card__content-wrapper"])}>
        {children}
      </div>
    </div>
  );
});
