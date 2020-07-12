import React from "react";

import {
  Background,
  Logo,
  Header,
  Button,
  Paragraph,
} from "../components/onBoard";

const OnBoard = ({ navigation }) => (
  <Background>
    <Logo />

    <Paragraph>
      This template supports Firebase authorization out of the box.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

export default OnBoard;
