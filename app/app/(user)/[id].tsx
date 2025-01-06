import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import color from "@/constants/Colors";
import { posts } from "../(tabs)";

const User = () => {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post?.user?.id == id);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: color.white }}
      showsVerticalScrollIndicator={false}
    >
      <Text>{id}</Text>
      <Text>{post?.user?.fullName}</Text>
    </ScrollView>
  );
};

export default User;
