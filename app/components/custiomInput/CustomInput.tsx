import { View, TextInput, StyleSheet, Pressable } from "react-native";
import React, { FC, useState } from "react";
import color from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import iconsizes from "@/constants/IconSizes";

interface inputProps {
  onChangeText: (value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
  inputStyle?: any;
  value: string;
  secureTextEntry?: boolean;
}

const CustomInput: FC<inputProps> = ({
  onChangeText,
  value,
  icon,
  inputStyle,
  secureTextEntry,
  placeholder,
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      {icon}
      <TextInput
        style={{ width: "80%", paddingHorizontal: 10 }}
        secureTextEntry={hidePassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={color.lightBlack}
      />
      {secureTextEntry && (
        <Pressable
          style={{ position: "absolute", right: 20 }}
          onPress={() => setHidePassword((prev) => !prev)}
        >
          {hidePassword ? (
            <Entypo name="eye" size={iconsizes.md} color={color.lightBlack} />
          ) : (
            <Entypo
              name="eye-with-line"
              size={iconsizes.md}
              color={color.lightBlack}
            />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
    width: "100%",
    height: 60,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 10,
    gap: 5,
    position: "relative",
  },
});
