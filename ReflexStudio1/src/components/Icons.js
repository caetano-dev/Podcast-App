import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

const Icons = () => {
  return (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => console.log("Cart")}>
        <Image
          source={require("../components/icons/shopping-cart.png")}
          style={styles.cart}
          tintColor="white"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Facebook")}>
        <Image
          source={require("./icons/facebook.png")}
          style={styles.facebook}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Instagram")}>
        <Image
          source={require("./icons/instagram.png")}
          style={styles.instagram}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Twitter")}>
        <Image source={require("./icons/twitter.png")} style={styles.twitter} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Spotify")}>
        <Image source={require("./icons/spotify.png")} style={styles.spotify} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Apple")}>
        <Image source={require("./icons/apple.png")} style={styles.apple} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: { flexDirection: "row", justifyContent: "center", marginTop: 15 },
  cart: { height: 30, width: 30, margin: 10 },
  twitter: { height: 30, width: 30, margin: 10 },
  facebook: { height: 30, width: 30, margin: 10 },
  instagram: { height: 30, width: 30, margin: 10 },
  spotify: { height: 30, width: 30, margin: 10 },
  apple: { height: 30, width: 30, margin: 10 }
});

export default Icons;
