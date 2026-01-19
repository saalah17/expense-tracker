import { Slot } from "expo-router";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "lucide-react-native";

export default function Layout() {
  const { userToken, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (userToken) {
    return <Redirect href="/" />;
  }

  return <Slot />;
}
