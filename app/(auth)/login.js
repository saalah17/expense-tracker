import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { AuthContext } from "../../contexts/authContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {login} = useContext(AuthContext);
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 px-8 justify-center"
      >
        {/* Logo / Brand Area */}
        <View className="items-center mb-12">
          <View className="bg-indigo-600 h-20 w-20 rounded-[24px] items-center justify-center shadow-xl shadow-indigo-200">
            <MaterialCommunityIcons name="robot" size={40} color="white" />
          </View>
          <Text className="text-slate-900 text-3xl font-black mt-6">
            Gemini Finance
          </Text>
          <Text className="text-slate-400 font-medium text-center mt-2">
            Smart insights for your daily spending
          </Text>
        </View>

        {/* Input Fields */}
        <View className="space-y-4">
          <View className="bg-slate-50 flex-row items-center px-4 py-4 rounded-2xl border border-slate-100">
            <Ionicons name="mail-outline" size={20} color="#64748B" />
            <TextInput
              placeholder="Email Address"
              className="flex-1 ml-3 text-slate-900 font-semibold"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>

          <View className="bg-slate-50 flex-row items-center px-4 py-4 rounded-2xl border border-slate-100">
            <Ionicons name="lock-closed-outline" size={20} color="#64748B" />
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              className="flex-1 ml-3 text-slate-900 font-semibold"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="items-end mt-3">
          <Text className="text-indigo-600 font-bold text-sm">
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <TouchableOpacity className="bg-slate-900 h-16 rounded-2xl items-center justify-center mt-10 shadow-lg shadow-slate-300">
          <Text className="text-white text-lg font-black tracking-wide">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View className="flex-row justify-center mt-10">
          <Text className="text-slate-500 font-medium">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.navigate("/signup")}>
            <Text className="text-indigo-600 font-black">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
