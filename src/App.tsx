import useTheme from "./hooks/useTheme";
import { ReactComponent as Logo } from "svg/react.svg";

const App = () => {
  const { toggle } = useTheme();
  return (
    <div>
      <button onClick={toggle}>Изменить тему</button>
      <Logo />
    </div>
  );
};

export default App;
