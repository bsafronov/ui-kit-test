import Playground from "./components/Playground";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { toggle } = useTheme();
  return (
    <div>
      <Playground />
    </div>
  );
};

export default App;
