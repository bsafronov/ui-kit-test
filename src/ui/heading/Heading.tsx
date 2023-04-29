import { createElement, forwardRef } from "react";
import { IHeading } from "./Heading.interface";
import { useHeadingStyles } from "./useHeadingStyles";
import clsx from "clsx";

export const Heading = forwardRef<HTMLHeadingElement, IHeading>(
  (props, ref) => {
    const { className, children, lvl, ...rest } = props;
    const styles = useHeadingStyles(props);
    const level = lvl ? `h${lvl}` : `h6`;

    return createElement(
      level,
      { ...rest, className: clsx(styles, className), ref },
      children
    );
  }
);
