import React from "react";

import { Background, Logo, Button } from "../components/onBoard";
import { Text } from "@ui-kitten/components";

const OnBoard = ({ navigation }) => (
  <>
    <Background>
      <Logo />

      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
      </Button>
    </Background>
    <Text category="h3" status="basic">
      Demo mode
    </Text>
  </>
);

export default OnBoard;
