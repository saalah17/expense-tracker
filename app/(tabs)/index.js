import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// Importing specific icon sets from Expo
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HomeTab = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
              Dashboard
            </Text>
            <Text className="text-slate-900 text-2xl font-black">
              Hey, Alex 👋
            </Text>
          </View>
          <TouchableOpacity className="h-12 w-12 bg-white rounded-2xl items-center justify-center shadow-sm border border-slate-100">
            <Ionicons name="notifications-outline" size={24} color="#0F172A" />
          </TouchableOpacity>
        </View>

        {/* Hero Balance Card */}
        <View className="bg-indigo-600 p-8 rounded-[40px] mb-8 shadow-2xl shadow-indigo-300">
          <Text className="text-indigo-100 text-sm font-medium opacity-80">
            Total Balance
          </Text>
          <View className="flex-row items-baseline mt-1">
            <Text className="text-white text-4xl font-bold">$12,480</Text>
            <Text className="text-indigo-200 text-xl font-medium ml-1">
              .00
            </Text>
          </View>

          {/* AI Insight Pill */}
          <View className="flex-row items-center mt-6 bg-white/20 self-start px-4 py-2 rounded-full">
            <MaterialCommunityIcons name="auto-fix" size={16} color="white" />
            <Text className="text-white text-xs font-bold ml-2">
              AI: You saved 15% more than last month
            </Text>
          </View>
        </View>

        {/* Monthly Income vs Expense Stats */}
        <View className="flex-row gap-4 mb-8">
          {/* Income Box */}
          <View className="flex-1 bg-white p-5 rounded-[32px] border border-slate-50 shadow-sm">
            <View className="bg-emerald-100 h-10 w-10 rounded-full items-center justify-center mb-3">
              <Ionicons name="arrow-down" size={20} color="#059669" />
            </View>
            <Text className="text-slate-400 text-xs font-bold uppercase">
              Income
            </Text>
            <Text className="text-slate-900 text-lg font-black mt-1">
              $5,200
            </Text>
          </View>

          {/* Expense Box */}
          <View className="flex-1 bg-white p-5 rounded-[32px] border border-slate-50 shadow-sm">
            <View className="bg-rose-100 h-10 w-10 rounded-full items-center justify-center mb-3">
              <Ionicons name="arrow-up" size={20} color="#E11D48" />
            </View>
            <Text className="text-slate-400 text-xs font-bold uppercase">
              Expenses
            </Text>
            <Text className="text-slate-900 text-lg font-black mt-1">
              $2,840
            </Text>
          </View>
        </View>

        {/* Transactions Section */}
        <View className="flex-row justify-between items-end mb-6">
          <View>
            <Text className="text-slate-900 text-xl font-black">
              Recent Activity
            </Text>
            <Text className="text-slate-400 text-xs font-medium">
              Your latest transactions
            </Text>
          </View>
          <TouchableOpacity onPress={() => router.navigate("/transaction")}>
            <Text className="text-indigo-600 font-bold">View All</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction List */}
        {[
          {
            name: "Subscription",
            label: "Netflix",
            price: "-$12.99",
            icon: "logo-netflix",
            color: "#E50914",
          },
          {
            name: "Shopping",
            label: "Apple Store",
            price: "-$99.00",
            icon: "logo-apple",
            color: "#000000",
          },
          {
            name: "Food",
            label: "Starbucks",
            price: "-$6.50",
            icon: "cafe",
            color: "#00704A",
          },
        ].map((item, index) => (
          <View
            key={index}
            className="flex-row items-center bg-white p-4 rounded-3xl mb-4 border border-slate-50"
          >
            <View
              className="h-12 w-12 rounded-2xl items-center justify-center"
              style={{ backgroundColor: `${item.color}15` }} // Adding 15% opacity to brand color
            >
              <Ionicons name={item.icon} size={22} color={item.color} />
            </View>
            <View className="flex-1 ml-4">
              <Text className="text-slate-900 font-bold text-base">
                {item.label}
              </Text>
              <Text className="text-slate-400 text-xs uppercase font-semibold tracking-tighter">
                {item.name}
              </Text>
            </View>
            <Text className="text-slate-900 font-black text-base">
              {item.price}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Modern + Add Expense Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="absolute bottom-10 right-6 bg-slate-900 h-16 w-44 rounded-full flex-row items-center justify-center shadow-xl shadow-slate-400"
      >
        <Ionicons name="add-circle" size={24} color="white" />
        <Text className="text-white font-bold ml-2 text-base">Add Expense</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeTab;
