import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContext";
import { logoutUser } from "../../api/auth-api";

import { Button, Icon, Text, Layout } from "@ui-kitten/components";

export const HomeScreenButton = ({ title, press, alertCount }) => {
  return (
    <View style={{ flex: 1 }}>
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: null,
          marginHorizontal: "5%",
        }}
      >
        <View>
          <Text
            status="basic"
            category="h1"
            onPress={press}
            style={{ color: "black" }}
          >
            {title}
          </Text>
        </View>
        <View>
          {alertCount >= 1 ? (
            <>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  category="h3"
                  status="control"
                  style={{
                    marginRight: 5,
                    fontWeight: "bold",
                  }}
                >
                  {alertCount}
                </Text>
                <Icon name="bell" width={35} height={35} fill="#DF6F0D" />
              </View>
            </>
          ) : (
            <Icon name="bell-outline" width={35} height={35} fill="#000" />
          )}
        </View>
      </Layout>
      {/* <Button
        status="control"
        appearance="ghost"
        size="giant"
        icon={() =>
          alertCount >= 1 ? (
            <>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Icon name="bell" width={35} height={35} fill="#DF6F0D" />
                <Text
                  category="h3"
                  style={{color: 'black', marginLeft: 20, fontWeight: 'bold'}}>
                  {alertCount}
                </Text>
              </View>
            </>
          ) : (
            <Icon name="bell-outline" width={35} height={35} fill="#000" />
          )
        }
        onPress={press}
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}>
        {title}
      </Button> */}
    </View>
  );
};

export const CartButton = ({ navigation, cartNum }) => {
  const [count, setCount] = useState(cartNum);

  const CartIcon = (style) => {
    return count >= 1 ? (
      <>
        <Icon name="shopping-cart" style={{ height: 32, width: 32 }} />
        <Text category="h6" style={{ marginRight: -10 }}>
          {count}
        </Text>
      </>
    ) : (
      <>
        <Icon name="shopping-cart-outline" style={{ height: 32, width: 32 }} />
      </>
    );
  };

  return (
    <Button
      icon={CartIcon}
      appearance="ghost"
      style={styles.button}
      // onPress={() => navigation.navigation("Cart")}
    />
  );
};

export const AddButton = ({ press }) => {
  return (
    <Button
      icon={() => <Icon name="plus-circle" width={32} height={32} />}
      appearance="ghost"
      onPress={press}
      style={styles.addButton}
    />
  );
};

export const LogoutButton = () => (
  <Button
    status="control"
    appearance="ghost"
    onPress={() => logoutUser()}
    style={styles.button}
  >
    Log Out
  </Button>
);

export const BackHomeButton = ({ navigation: { goBack } }) => {
  return (
    <Button
      icon={() => (
        <Icon name="arrow-ios-back" style={{ height: 20, width: 20 }} />
      )}
      appearance="ghost"
      status="control"
      onPress={() => goBack()}
    >
      home
    </Button>
  );
};

export const SettingsButton = () => {
  return (
    <Button
      icon={() => (
        <Icon name="settings-2-outline" width={25} height={25} fill="#000" />
      )}
      appearance="ghost"
      status="primary"
      onPress={() => console.log("Settings Clicked")}
    />
  );
};

export const RefreshButton = ({ press }) => {
  return (
    <Button
      icon={() => <Icon name="refresh" width={25} height={25} fill="#000" />}
      appearance="ghost"
      status="primary"
      onPress={press}
    />
  );
};

export const LikeButton = ({ liked }) => {
  const [heart, setHeart] = useState(false);

  return heart ? (
    <Icon
      name="heart"
      fill="#DB3A3A"
      onPress={() => setHeart(!heart)}
      style={{ height: 35, width: 35 }}
    />
  ) : liked ? (
    <Icon
      name="heart"
      fill="#DB3A3A"
      onPress={() => setHeart(true)}
      style={{ height: 35, width: 35 }}
    />
  ) : (
    <Icon
      name="heart-outline"
      onPress={() => setHeart(!heart)}
      style={{ height: 35, width: 35 }}
    />
  );
};

export const FavButton = ({ favouited }) => {
  const [fav, setFav] = useState(false);

  return fav ? (
    <Icon
      name="star"
      fill="#E8DE57"
      onPress={() => setFav(!fav)}
      style={{ marginLeft: 10, height: 35, width: 35 }}
    />
  ) : favouited ? (
    <Icon
      name="star"
      fill="#E8DE57"
      onPress={() => setFav(true)}
      style={{ marginLeft: 10, height: 35, width: 35 }}
    />
  ) : (
    <Icon
      name="star-outline"
      onPress={() => setFav(!fav)}
      style={{ marginLeft: 10, height: 35, width: 35 }}
    />
  );
};

export const DownloadButton = ({ downloaded }) => {
  const [down, setDown] = useState(false);

  return down ? (
    <Icon
      name="cloud-download"
      fill="#B1481A"
      onPress={() => setDown(!down)}
      style={{ marginLeft: 10, height: 40, width: 40 }}
    />
  ) : downloaded ? (
    <Icon
      name="cloud-download"
      fill="#B1481A"
      onPress={() => setDown(true)}
      style={{ marginLeft: 10, height: 40, width: 40 }}
    />
  ) : (
    <Icon
      name="cloud-download-outline"
      onPress={() => setDown(!down)}
      style={{ marginLeft: 10, height: 40, width: 40 }}
    />
  );
};

export const InfoButton = () => {
  // const [info, setInfo] = useState(false);

  return (
    <AppContext.Consumer>
      {(context) => {
        return context.state.infoSection ? (
          <Icon
            name="info"
            fill="#1A83B1"
            onPress={() => context.closeInfo()}
            style={{ marginLeft: 10, height: 40, width: 40 }}
          />
        ) : (
          <Icon
            name="info-outline"
            onPress={() => context.openInfo()}
            style={{ marginLeft: 10, height: 40, width: 40 }}
          />
        );
      }}
    </AppContext.Consumer>
  );
};

export const AdButton = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return context.state.adSection ? (
          <Icon
            name="music"
            fill="#E1940F"
            style={{ marginLeft: 10, height: 40, width: 40 }}
            onPress={() => context.closeAd()}
          />
        ) : (
          <Icon
            name="music-outline"
            onPress={() => context.openAd()}
            style={{ marginLeft: 10, height: 40, width: 40 }}
          />
        );
      }}
    </AppContext.Consumer>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 100,
  },
});
