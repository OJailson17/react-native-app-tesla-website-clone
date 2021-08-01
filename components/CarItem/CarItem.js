import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { StyledButton } from "../Buttons/Button";
import { styles } from "./CarItem.styles";

export const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/ModelS.jpeg")}
        style={styles.imageBcg}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        primary
        text="Custom Order"
        handleClick={() => alert("Button 1 typed")}
      />
      <StyledButton
        text="Existing Inventory"
        handleClick={() => alert("Button 2 typed")}
      />
    </View>
  );
};
