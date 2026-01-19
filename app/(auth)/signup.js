import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/authContext";
import { Alert } from "react-native";

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/register`, {
        name: name,
        email: email,
        password: password,
      });
      login(email, password);
    } catch (err) {
      Alert.alert("Error", "Invalid Credentials");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 40 }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mb-8 self-start p-2 bg-slate-50 rounded-xl"
        >
          <Ionicons name="arrow-back" size={24} color="#0F172A" />
        </TouchableOpacity>

        <Text className="text-slate-900 text-4xl font-black">
          Create Account
        </Text>
        <Text className="text-slate-400 font-medium mt-2 text-lg">
          Join 10,000+ users managing money with AI.
        </Text>

        <View className="mt-10 space-y-4">
          {/* Inputs */}
          {[
            {
              placeholder: "Full Name",
              icon: "person-outline",
              value: name,
              action: setName,
            },
            {
              placeholder: "Email Address",
              icon: "mail-outline",
              value: email,
              action: setEmail,
            },
            {
              placeholder: "Password",
              icon: "lock-closed-outline",
              secure: true,
              value: password,
              action: setPassword,
            },
          ].map((item, index) => (
            <View
              key={index}
              className="bg-slate-50 flex-row items-center px-4 py-4 rounded-2xl border border-slate-100 mb-4"
            >
              <Ionicons name={item.icon} size={20} color="#64748B" />
              <TextInput
                placeholder={item.placeholder}
                secureTextEntry={item.secure}
                className="flex-1 ml-3 text-slate-900 font-semibold"
                placeholderTextColor="#94A3B8"
                value={item.value}
                onChangeText={item.action}
              />
            </View>
          ))}
        </View>

        <View className="flex-row items-start mt-4 px-1">
          <TouchableOpacity className="h-5 w-5 rounded bg-indigo-600 items-center justify-center mr-3 mt-1">
            <Ionicons name="checkmark" size={14} color="white" />
          </TouchableOpacity>
          <Text className="text-slate-500 text-xs leading-5">
            By signing up, you agree to our{" "}
            <Text className="text-indigo-600 font-bold">Terms of Service</Text>{" "}
            and{" "}
            <Text className="text-indigo-600 font-bold">Privacy Policy</Text>.
          </Text>
        </View>

        <TouchableOpacity
          className="bg-indigo-600 h-16 rounded-2xl items-center justify-center mt-10 shadow-lg shadow-indigo-200"
          onPress={handleRegister}
        >
          <Text className="text-white text-lg font-black tracking-wide">
            Create Account
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-8 mb-10">
          <Text className="text-slate-500 font-medium">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-indigo-600 font-black">Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
