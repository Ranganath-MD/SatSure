import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export const Button = (props) => {
  const { onPress, title, primary, disabled } = props;
  return (
    <Pressable
      style={disabled ? styles.disabledButton : primary ? styles.primaryButton : styles.button}
      onPress={onPress}
    >
      <Text style={primary ? styles.textPrimary : styles.text}>{title}</Text>
    </Pressable>
  );
}

const button = {
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 10,
  borderRadius: 4,
};

const text = {
  fontSize: 15,
  lineHeight: 21,
  letterSpacing: 0.25,
};
const styles = StyleSheet.create({
  button: {
    ...button,
    backgroundColor: "transparent",
  },
  primaryButton: {
    ...button,
    backgroundColor: "#25215d",
  },
  disabledButton: {
    backgroundColor: "#c3c4c3",
    ...button,
  },
  text: {
    ...text,
    color: "#006D5B",
  },
  textPrimary: {
    ...text,
    color: "white",
  },
});
