import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const AddTransactionScreen = () => {
  const [type, setType] = useState("r"); // 'expense' or 'income'
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const categories = [
    { name: "Food", icon: "restaurant-outline" },
    { name: "Shopping", icon: "cart-outline" },
    { name: "Transport", icon: "car-outline" },
    { name: "Bills", icon: "receipt-outline" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 24 }}
        >
          {/* Header */}
          <View className="items-center mb-8">
            <Text className="text-slate-900 text-xl font-black">
              Add Transaction
            </Text>
          </View>

          {/* Toggle Switch (Expense/Income) */}
          <View className="flex-row bg-slate-100 p-1.5 rounded-[24px] mb-8">
            <TouchableOpacity
              onPress={() =>
                setType(() => (type === "expense" ? "income" : "expense"))
              }
              className={`flex-1 py-3 rounded-[20px] flex-row justify-center items-center ${
                type === "expense" ? "bg-white shadow-sm" : ""
              }`}
            >
              <Text
                className={`font-bold ${
                  type === "expense" ? "text-rose-500" : "text-slate-500"
                }`}
              >
                Expense
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setType("income")}
              className={`flex-1 py-3 rounded-[20px] flex-row justify-center items-center ${
                type === "income" ? "bg-white shadow-sm" : ""
              }`}
            >
              <Text
                className={`font-bold ${
                  type === "income" ? "text-emerald-600" : "text-slate-500"
                }`}
              >
                Income
              </Text>
            </TouchableOpacity>
          </View>

          {/* Amount Input */}
          <View className="mb-10 items-center">
            <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
              Enter Amount
            </Text>
            <View className="flex-row items-center">
              <Text className="text-slate-900 text-4xl font-black mr-2">$</Text>
              <TextInput
                className="text-slate-900 text-6xl font-black min-w-[100px]"
                keyboardType="numeric"
                placeholder="0.00"
                placeholderTextColor="#CBD5E1"
                value={amount}
                onChangeText={setAmount}
                autoFocus
              />
            </View>
          </View>

          {/* Category Selection */}
          <Text className="text-slate-900 text-lg font-black mb-4">
            Category
          </Text>
          <View className="flex-row flex-wrap gap-3 mb-8">
            {categories.map((item) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => setCategory(item.name)}
                className={`px-5 py-3 rounded-2xl border flex-row items-center ${
                  category === item.name
                    ? "bg-indigo-600 border-indigo-600"
                    : "bg-white border-slate-100"
                }`}
              >
                <Ionicons
                  name={item.icon}
                  size={18}
                  color={category === item.name ? "white" : "#64748B"}
                />
                <Text
                  className={`ml-2 font-bold ${
                    category === item.name ? "text-white" : "text-slate-500"
                  }`}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Account/Wallet Selection */}
          <Text className="text-slate-900 text-lg font-black mb-4">
            Account
          </Text>
          <TouchableOpacity className="flex-row items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8">
            <View className="bg-white p-2 rounded-xl shadow-sm">
              <Ionicons name="wallet-outline" size={20} color="#6366F1" />
            </View>
            <Text className="flex-1 ml-4 text-slate-700 font-bold">
              Main Savings Account
            </Text>
            <Ionicons name="chevron-down" size={18} color="#94A3B8" />
          </TouchableOpacity>

          {/* Attach Receipt (AI Feature) */}
          <TouchableOpacity className="border-2 border-dashed border-slate-200 rounded-[32px] p-8 items-center justify-center bg-slate-50/50">
            <View className="bg-white p-4 rounded-full shadow-sm mb-3">
              <MaterialCommunityIcons
                name="camera-plus-outline"
                size={32}
                color="#6366F1"
              />
            </View>
            <Text className="text-slate-900 font-bold text-base">
              Attach Receipt
            </Text>
            <Text className="text-slate-400 text-xs mt-1">
              AI will automatically fill the details
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Action Button */}
      <View className="p-6 border-t border-slate-50">
        <TouchableOpacity
          className={`h-16 rounded-[24px] items-center justify-center shadow-xl ${
            type === "expense"
              ? "bg-slate-900 shadow-slate-300"
              : "bg-emerald-600 shadow-emerald-200"
          }`}
        >
          <Text className="text-white text-lg font-black">
            Add {type === "expense" ? "Expense" : "Income"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddTransactionScreen;
