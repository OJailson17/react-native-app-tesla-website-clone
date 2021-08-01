import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { StyledButton } from "../Buttons/Button";
import { styles } from "./CarItem.styles";

export const CarItem = ({ carName, tagline, taglineCTA, bcgImage }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={bcgImage} style={styles.imageBcg} />
      <View style={styles.titles}>
        <Text style={styles.title}>{carName}</Text>
        <Text style={styles.subtitle}>
          {tagline}{" "}
          <Text style={{ textDecorationLine: "underline" }}>{taglineCTA}</Text>
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
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
    </View>
  );
};
