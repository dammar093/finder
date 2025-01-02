import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import iconsizes from "@/constants/IconSizes";
import Ionicons from "@expo/vector-icons/Ionicons";
import fontsizes from "@/constants/Fontsizes";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.inputWrapper}>
              <Feather name="search" size={iconsizes.md} color={color.balck} />
              <TextInput style={styles.search} placeholder="Search here." />
            </View>
            <View style={{ padding: 10 }}>
              <Ionicons
                name="notifications"
                size={iconsizes.xl}
                color={color.balck}
              />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: color.red,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: color.white,
                    fontSize: fontsizes.span,
                    fontWeight: "semibold",
                  }}
                >
                  9+
                </Text>
              </View>
            </View>
          </View>
        </View>
        <StatusBar barStyle="dark-content" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  topContainer: {
    width: "100%",
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 0.5,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
    padding: 20,
  },
  inputWrapper: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 55,
    flexDirection: "row",
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 1,
    boxShadow:
      "-0.5 -0.5 0.5 0.5 rgba(0, 0, 0, 0.1), 0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.1)",
  },
  search: {
    width: "90%",
    height: "100%",
    paddingHorizontal: 5,
  },
});
