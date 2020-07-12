import React, { useContext, useReducer } from "react";

import { decode, encode } from "base-64";
import "./fixtimerbug.js";

//context
import AppContext from "./context/AppContext";
import reducer from "./context/reducer";

//Navigation
import { NavigationContainer } from "@react-navigation/native";

//Style
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light as theme } from "@eva-design/eva";

//bug fix
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import StackPile from "./StackPile";

const App = () => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <NavigationContainer>
          <StackPile />
        </NavigationContainer>
      </ApplicationProvider>
    </AppContext.Provider>
  );
};

export default App;
