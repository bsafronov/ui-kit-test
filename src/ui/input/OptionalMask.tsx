import { IInput } from "./Input.interface";
import InputMask from "react-input-mask";

const OptionalMask = (props: IInput) => {
  const { mask, onChange, value, children } = props;

  if (!mask) {
    return <>{children}</>;
  }

  return (
    <InputMask mask={mask} onChange={onChange} value={value}>
      {children}
    </InputMask>
  );
};

export default OptionalMask;
