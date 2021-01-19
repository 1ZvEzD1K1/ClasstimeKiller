import { Provider } from "react-redux";
import { Profiler } from "react";
import store from "./redux/store";
import MainNavigator from "./navigation/MainNavigator";

function App() {
  console.log("RENDER APP");
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
