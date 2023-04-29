import clsx from "clsx";
import { IHeadingProps } from "./Heading.interface";
import s from "./Heading.module.scss";

export const useHeadingStyles = (props: IHeadingProps | undefined) => {
  const initial: Required<IHeadingProps> = {
    lvl: props?.lvl || 6,
  };

  return clsx(s.title, s[`level-${initial.lvl}`]);
};
