import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CarItem } from "./components/CarItem/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CarItem
        carName="Model 3"
        tagline="Order Online for"
        taglineCTA="Touchless Delivery"
        bcgImage={require("./assets/Model3.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
