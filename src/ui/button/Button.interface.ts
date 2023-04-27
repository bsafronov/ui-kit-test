type ButtonVariant = "primary" | "danger" | "caution" | "link";
type ButtonSize = "lg" | "md" | "sm";
type ButtonRounded = ButtonSize;

export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  _s?: IButtonProps;
}

export interface IButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  outlined?: boolean;
}
