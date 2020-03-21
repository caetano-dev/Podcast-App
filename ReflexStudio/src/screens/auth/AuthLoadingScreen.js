import React, { memo } from "react";
import { ActivityIndicator } from "react-native";

import firebase from "../../../firebase";
import "firebase/auth";
import Background from "../../components/Background";

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("Root");
    } else {
      // User is not logged in
      navigation.navigate("OnBoard");
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color="#F6820D" />
    </Background>
  );
};

export default memo(AuthLoadingScreen);
