import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Movies</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    padding: 10,
  },
});
