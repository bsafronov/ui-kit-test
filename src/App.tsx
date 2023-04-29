import Playground from "./components/Playground";
import useTheme from "./hooks/useTheme";
const App = () => {
  const { toggle } = useTheme();
  return (
    <div className="m-1">
      <Playground />
    </div>
  );
};

export default App;
