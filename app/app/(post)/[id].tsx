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
import fontsizes from "@/constants/Fontsizes";
import Devider from "@/components/divider/Devider";

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
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: fontsizes.subTitle,
            fontWeight: "bold",
            color: color.balck,
          }}
        >
          {post?.title}
        </Text>
        <Text
          style={{
            color: color.balck,
            fontSize: fontsizes.paragraph,
            fontWeight: "semibold",
          }}
        >
          {post?.location}
        </Text>
      </View>
      <Devider />
      <View style={{ width: "100%", paddingVertical: 10 }}>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View style={styles.profileContainer}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: post?.user?.profile,
              }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: fontsizes.paragraph,
                fontWeight: "bold",
                color: color.balck,
              }}
            >
              {post?.user?.fullName}
            </Text>
            <Text style={{ fontSize: fontsizes.span, color: color.lightBlack }}>
              Superhost ● {post?.user?.year} Years hosting
            </Text>
          </View>
        </View>
      </View>
      <Devider />
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
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    overflow: "hidden",
  },
});
