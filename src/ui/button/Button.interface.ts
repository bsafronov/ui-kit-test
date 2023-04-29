type ButtonVariant =
  | "primary"
  | "secondary"
  | "plain"
  | "outline"
  | "accept"
  | "decline";
type ButtonSize = "lg" | "md" | "sm";
type ButtonRounded = ButtonSize;

export interface IButton
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    IButtonProps {}

export interface IButtonProps extends IButtonStyleProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export interface IButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
}
