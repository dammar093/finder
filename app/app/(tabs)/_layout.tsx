import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import iconsizes from "@/constants/IconSizes";
import FontAwesome6 from "@expo/vector-icons/FontAwesome5";
import color from "@/constants/Colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: color.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={iconsizes.lg} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="heart" size={iconsizes.lg} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="user-circle"
              size={iconsizes.lg}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
