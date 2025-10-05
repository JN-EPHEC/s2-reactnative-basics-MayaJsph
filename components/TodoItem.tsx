import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TodoItemProps = {
  text: string;
};

export default function TodoItem({ text }:TodoItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});