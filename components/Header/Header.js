import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { styles } from "./Header.style";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Image source={require("../../assets/menu.png")} style={styles.menu} />
    </View>
  );
};
