import { StyleSheet, Image } from 'react-native'
import React from 'react'

export const Chevron = () => {
  return (
    <Image
      style={styles.chevron}
      source={{
        uri: "https://img.icons8.com/ios-filled/50/null/sort-down.png",
      }}
    />
  );
}

const styles = StyleSheet.create({
  chevron: {
    width: 15,
    height: 10,
  },
});