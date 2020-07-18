import React, { useContext, useReducer, useEffect } from "react";
import firebase from "./firebase";
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

//queries
import { getCatalogue } from "./src/api/catalogue";

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

  useEffect(() => {
    //get auth user info
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "GET_USERINFO",
          payload: user,
        });
      } else {
        console.log("err @ Get_UserInfo");
      }
    });

    //get episodes
    getCatalogue().then((value) => {
      const catalogue = value.reflex;
      //get latest episode
      let latestEpId = Math.max.apply(
        Math,
        catalogue.map((o) => {
          return o.id;
        })
      );
      let latestEpisode = catalogue.find((o) => {
        return o.id == latestEpId;
      });

      return (
        dispatch({
          type: "GET_LATEST_EPISODE",
          payload: latestEpisode,
        }),
        dispatch({
          type: "GET_CATALOGUE",
          payload: catalogue,
        })
      );
    });
  }, []);
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
