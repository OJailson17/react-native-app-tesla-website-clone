import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const StyledButton = ({ primary, text, handleClick }) => {
  // Dinamic styles
  const backgroundColor = primary ? "#171a20cc" : "#ffffffa6";
  const color = primary ? "#fff" : "#171a20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={handleClick}
      >
        <Text style={[styles.text, { color }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
