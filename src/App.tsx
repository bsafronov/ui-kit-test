import Playground from "./components/Playground";
import useTheme from "./hooks/useTheme";
import { Button } from "./ui";
const App = () => {
  const { toggle } = useTheme();
  return (
    <div className="m-1 flex flex-col gap-1 align-start">
      <Button onClick={toggle}>Сменить тему</Button>
      <Playground />
    </div>
  );
};

export default App;
