import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { posts } from "../(tabs)";
import AntDesign from "@expo/vector-icons/AntDesign";
import iconsizes from "@/constants/IconSizes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { togglePost } from "@/redux/slices/wishlist";
import color from "@/constants/Colors";

const Post = () => {
  const { id } = useLocalSearchParams();
  const wishlist = useSelector((state: RootState) => state.wishlist.posts);
  const post = posts.find((post) => post.id == id);
  const dispatch = useDispatch<AppDispatch>();

  //function to handle toggle wishlist
  const handleToggleWishlist = (id: string) => {
    dispatch(togglePost(id));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.cotainer}>
      <View style={{ width: "100%", height: 300, position: "relative" }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{
            height: 300,
            flexDirection: "row",
            position: "relative",
          }}
        >
          {post?.images.map((image, index) => (
            <View
              key={index}
              style={{
                height: 300,
                width: 372,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
        <Pressable
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            padding: 5,
            borderRadius: 50,
            opacity: 0.8,
          }}
          onPress={() => handleToggleWishlist(id.toString())}
        >
          <AntDesign
            name="heart"
            size={iconsizes.md}
            color={
              wishlist?.includes(id.toString()) ? color.primary : color.balck
            }
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
