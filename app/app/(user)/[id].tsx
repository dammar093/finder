import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import color from "@/constants/Colors";
import { posts } from "../(tabs)";
import fontsizes from "@/constants/Fontsizes";
import Devider from "@/components/divider/Devider";
import Fontisto from "@expo/vector-icons/Fontisto";
import iconsizes from "@/constants/IconSizes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

const User = () => {
  const { id } = useLocalSearchParams();
  const post = posts.find((post) => post?.user?.id == id);
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.boxContainer}>
          <View
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                borderWidth: 2,
                borderColor: color.primary,
                overflow: "hidden",
              }}
            >
              <Image
                width={120}
                height={120}
                source={{
                  uri: post?.user?.profile,
                }}
                resizeMode="cover"
              />
            </View>
            <Text
              style={{
                fontSize: fontsizes.title,
                fontWeight: "bold",
                color: color.balck,
              }}
            >
              {post?.user?.fullName.split(" ")[0]}
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <View style={{ width: "100%", paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: fontsizes.subTitle,
                  color: color.balck,
                  fontWeight: "bold",
                }}
              >
                12
              </Text>
              <Text
                style={{
                  fontSize: fontsizes.span,
                  color: color.lightBlack,
                }}
              >
                Reviews
              </Text>
            </View>
            <Devider />
            <View style={{ width: "100%", paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: fontsizes.subTitle,
                  color: color.balck,
                  fontWeight: "bold",
                }}
              >
                4.5★
              </Text>
              <Text
                style={{
                  fontSize: fontsizes.span,
                  color: color.lightBlack,
                }}
              >
                Reviews
              </Text>
            </View>
            <Devider />
            <View style={{ width: "100%", paddingVertical: 10 }}>
              <Text
                style={{
                  fontSize: fontsizes.subTitle,
                  color: color.balck,
                  fontWeight: "bold",
                }}
              >
                3
              </Text>
              <Text
                style={{
                  fontSize: fontsizes.span,
                  color: color.lightBlack,
                }}
              >
                Years of hosting
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
          <Fontisto name="date" color={color.lightBlack} size={iconsizes.md} />
          <Text
            style={{ fontSize: fontsizes.paragraph, fontWeight: "semibold" }}
          >
            Born in 2000
          </Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
          <FontAwesome
            name="language"
            color={color.lightBlack}
            size={iconsizes.md}
          />
          <Text
            style={{ fontSize: fontsizes.paragraph, fontWeight: "semibold" }}
          >
            Nepali and English
          </Text>
        </View>
        <View style={{ flexDirection: "row", padding: 10, gap: 10 }}>
          <Entypo
            name="location"
            color={color.lightBlack}
            size={iconsizes.md}
          />
          <Text
            style={{ fontSize: fontsizes.paragraph, fontWeight: "semibold" }}
          >
            Nepali and English
          </Text>
        </View>
      </View>
      <Devider />
    </ScrollView>
  );
};

export default User;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    height: 250,
    elevation: 1,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    boxShadow:
      "-2px -2px 6px 4px rgba(0,0,0,0.1), 2px 2px 6px 4px rgba(0,0,0,0.1)",
    flexDirection: "row",
  },
});
