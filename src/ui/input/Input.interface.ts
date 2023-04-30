export interface IInput
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    IInputProps {}

export interface IInputProps extends IInputStyleProps {
  label?: string;
  error?: string;
  invalid?: boolean;
  mask?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export interface IInputStyleProps {}
