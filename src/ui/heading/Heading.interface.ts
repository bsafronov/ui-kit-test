export interface IHeading
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    IHeadingProps {}

export interface IHeadingProps {
  lvl?: 1 | 2 | 3 | 4 | 5 | 6;
}
