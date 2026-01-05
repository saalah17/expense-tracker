import { View } from "react-native";
import "../global.css";
import { Stack } from "expo-router";

export default function layout({ children }) {
  return <Stack screenOptions={{ headerShown: false }} />;
}
