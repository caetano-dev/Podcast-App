import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import {
  Layout,
  Text,
  Button,
  Card,
  ButtonGroup,
  Icon,
  CardHeader
} from "@ui-kitten/components";

import { logoutUser } from "../../../api/auth-api";
import {
  CartButton,
  LogoutButton,
  RefreshButton,
  BackHomeButton
} from "../../../components/Icons/Icons";

import Logo from "../../../components/Logo";
import StoreList from "../components/StoreList";
import SizePicker from "../components/SizePicker";
import { AddButton } from "../../../components/Icons/Icons";
export default Shop = ({ navigation }) => {
  const [cart, setCart] = useState(true);
  const [select, setSelect] = useState("A");
  let src = require("../../../components/Icons/1.png");

  const ItemHeader = () => (
    <View>
      <Text>Title</Text>
    </View>
  );

  const ItemFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ width: "70%", flex: 1 }}>
          <SizePicker />
        </View>
        <View style={{ flex: 1 }}>
          <AddButton />
        </View>
      </View>
    );
  };

  const shopSwitch = select => {
    switch (select) {
      case "B":
        return (
          <StoreList
            mainHeader="/Shop/Shirts"
            component={
              <>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
              </>
            }
          />
        );
      case "C":
        return (
          <StoreList
            mainHeader="/Shop/Sweaters"
            component={
              <>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
              </>
            }
          />
        );
      case "D":
        return (
          <StoreList
            mainHeader="/Shop/Accessories"
            component={
              <>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
              </>
            }
          />
        );
      default:
        return (
          <StoreList
            mainHeader={"/Shop"}
            component={
              <>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
                <Card
                  style={styles.shopItem}
                  header={ItemHeader}
                  footer={ItemFooter}
                >
                  <Image
                    style={{ height: 160, width: "100%", marginBottom: -10 }}
                    source={src}
                  />
                </Card>
              </>
            }
          />
        );
    }
  };

  return (
    <Layout style={{ flex: 1, backgroundColor: "#A0A1B5" }}>
      <Layout style={styles.buttonGroup}>
        <BackHomeButton navigation={navigation} />
        <CartButton cartNum={0} />
        <RefreshButton press={() => console.log("refresh")} />
      </Layout>

      <Layout style={styles.logo}>
        <Logo height={"100"} />
      </Layout>

      <Layout
        style={{
          flex: 5,
          margin: 10,
          backgroundColor: null,
          alignItems: "center"
        }}
      >
        <ButtonGroup status="basic" style={{ margin: 10 }}>
          <Button onPress={() => setSelect()}>All</Button>
          <Button onPress={() => setSelect("B")}>Shirts</Button>
          <Button onPress={() => setSelect("C")}>Sweaters</Button>
          <Button onPress={() => setSelect("D")}>Accessories</Button>
        </ButtonGroup>

        {shopSwitch(select)}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    backgroundColor: null,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  logo: {
    flex: 1,
    backgroundColor: null,
    marginVertical: 15,
    alignSelf: "center"
  },
  shopItem: {
    borderColor: "black",
    height: "82%",
    width: "28%",
    margin: 5
  }
});
