import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import carList from "../../utils/carsList";
import { CarItem } from "../CarItem/CarItem";

export const CarList = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={carList}
        keyExtractor={(item) => item.name}
        snapToAlignment="center"
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height}
        renderItem={({ item }) => (
          <CarItem
            carName={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            bcgImage={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
