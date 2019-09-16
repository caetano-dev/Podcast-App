import { createStackNavigator } from "react-navigation";
import MainScreen from "./MainScreen";

const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  Settings: { screen: Settings }
});
