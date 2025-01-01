import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "@/constants/Colors";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <StatusBar backgroundColor={color.white} barStyle={"dark-content"} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
