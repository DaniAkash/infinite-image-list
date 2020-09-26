import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, View } from "react-native";
import ImageRow from "./Components/ImageRow";
import { ACCESS_KEY } from "./constants/accessKey";

export type UnsplashImageData = {
  id: string;
  urls: {
    full: string;
    thumb: string;
  };
};

export default function App() {
  const [data, setData] = useState<UnsplashImageData[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos?page=${page}&client_id=${ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((data: UnsplashImageData[]) =>
        setData((prev) => [...prev, ...data])
      )
      .catch(console.error);
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        renderItem={ImageRow}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        keyExtractor={(data) => data.id}
        onEndReached={() => setPage((prev) => prev + 1)}
      />
    </SafeAreaView>
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
