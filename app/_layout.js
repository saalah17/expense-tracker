import { View } from "react-native";
import "../global.css";
import { Stack } from "expo-router";
import { AIProvider } from "../contexts/aiContext";
import { AuthProvider } from "../contexts/authContext";

export default function layout({ children }) {
  return (
    <AuthProvider>
      <AIProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AIProvider>
    </AuthProvider>
  );
}
