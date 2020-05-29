import React, { Component } from "react";
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

let src = require("../../../components/Icons/1.png");

export default Shop = ({ navigation }) => {
  return <ShopScreen navigation={navigation} />;
};

class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "A",
      cartValue: 0
    };
  }

  render() {
    const { navigation } = this.props;
    const { select, cartValue } = this.state;

    console.log(cartValue);

    const ItemHeader = props => (
      <View>
        <Text>{props.children}</Text>
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
            <AddButton press={() => console.log("add button press")} />
          </View>
        </View>
      );
    };

    const shopSwitch = select => {
      switch (select) {
        default:
          return (
            <StoreList
              mainHeader={"/Shop"}
              component={
                <>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 0 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 0 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 0 </ItemHeader>}
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
        case "B":
          return (
            <StoreList
              mainHeader="/Shop/Shirts"
              component={
                <>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 1 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 1 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 1 </ItemHeader>}
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
                    header={() => <ItemHeader> Title 2 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 2 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 2 </ItemHeader>}
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
                    header={() => <ItemHeader> Title 3 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 3 </ItemHeader>}
                    footer={ItemFooter}
                  >
                    <Image
                      style={{ height: 160, width: "100%", marginBottom: -10 }}
                      source={src}
                    />
                  </Card>
                  <Card
                    style={styles.shopItem}
                    header={() => <ItemHeader> Title 3 </ItemHeader>}
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
          <CartButton cartNum={cartValue} />
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
            <Button onPress={() => this.setState({ select: "A" })}>All</Button>
            <Button onPress={() => this.setState({ select: "B" })}>
              Shirts
            </Button>
            <Button onPress={() => this.setState({ select: "C" })}>
              Sweaters
            </Button>
            <Button onPress={() => this.setState({ select: "D" })}>
              Accessories
            </Button>
          </ButtonGroup>

          {shopSwitch(select)}
        </Layout>
      </Layout>
    );
  }
}

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
