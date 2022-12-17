import { StatusBar } from "expo-status-bar";
import { Provider } from "./context";
import { Home } from "./Home";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider>
        <Home />
      </Provider>
    </>
  );
}
