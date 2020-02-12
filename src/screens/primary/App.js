import React from "react";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";

const Screen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Screen />
  </ApplicationProvider>
);

export default App;
