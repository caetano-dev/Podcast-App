import { createStackNavigator } from "react-navigation";
import MainScreen from "./MainScreen";

//for future implementation
const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  Settings: { screen: Settings }
});
