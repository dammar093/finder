import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import iconsizes from "@/constants/IconSizes";
import Ionicons from "@expo/vector-icons/Ionicons";
import fontsizes from "@/constants/Fontsizes";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
interface Categories {
  id: string;
  name: string;
  icon: React.ReactNode;
}
const categories: Categories[] = [
  {
    id: "1",
    name: "Room",
    icon: <Ionicons name="home" size={iconsizes.lg} color={color.lightBlack} />,
  },
  {
    id: "2",
    name: "Land",
    icon: (
      <MaterialCommunityIcons
        name="island"
        size={iconsizes.lg}
        color={color.lightBlack}
      />
    ),
  },
  {
    id: "3",
    name: "Car",
    icon: <AntDesign name="car" size={iconsizes.lg} color={color.lightBlack} />,
  },
  {
    id: "4",
    name: "Bike",
    icon: (
      <MaterialCommunityIcons
        name="motorbike-electric"
        size={iconsizes.lg}
        color={color.lightBlack}
      />
    ),
  },
  {
    id: "5",
    name: "Mobile",
    icon: (
      <AntDesign name="mobile1" size={iconsizes.lg} color={color.lightBlack} />
    ),
  },
  {
    id: "6",
    name: "Animal",
    icon: (
      <MaterialCommunityIcons
        name="cow"
        size={iconsizes.lg}
        color={color.lightBlack}
      />
    ),
  },
];
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              height: 70,
              gap: 45,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {categories.map((category) => (
              <Pressable key={category?.id}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {category.icon}
                  <Text
                    style={{
                      color: color.lightBlack,
                      fontSize: fontsizes.span,
                    }}
                  >
                    {category.name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
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
    height: "20%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 0.5,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  inputWrapper: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "80%",
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
