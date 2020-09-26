import React from "react";
import { View, StyleSheet, ListRenderItem, Dimensions } from "react-native";
import BetterImage from "react-native-better-image";
import type { UnsplashImageData } from "../App";

const { width: windowWidth } = Dimensions.get("window");

const ImageRow: ListRenderItem<UnsplashImageData> = ({ item }) => {
  return (
    <View style={styles.rowContainer}>
      <BetterImage
        source={{ uri: item.urls.full }}
        thumbnailSource={{ uri: item.urls.thumb }}
        viewStyle={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    overflow: "hidden",
    height: 250,
    marginHorizontal: 16,
    borderRadius: 4,
    width: windowWidth - 32,
    backgroundColor: "grey",
  },
});

export default ImageRow;
