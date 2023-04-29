export interface ICard
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    ICardProps {}

export interface ICardProps {
  head?: React.ReactNode | string;
}
