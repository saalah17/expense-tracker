import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Flat_List,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TransactionScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Income", "Expenses", "Subscriptions", "Food"];

  const transactions = [
    {
      id: "1",
      name: "Netflix",
      category: "Subscription",
      amount: -12.99,
      date: "Jan 5",
      icon: "logo-netflix",
      color: "#E50914",
    },
    {
      id: "2",
      name: "Salary",
      category: "Monthly",
      amount: 4500.0,
      date: "Jan 4",
      icon: "cash-outline",
      color: "#10B981",
    },
    {
      id: "3",
      name: "Apple Store",
      category: "Shopping",
      amount: -99.0,
      date: "Jan 3",
      icon: "logo-apple",
      color: "#000000",
    },
    {
      id: "4",
      name: "Starbucks",
      category: "Food",
      amount: -6.5,
      date: "Jan 2",
      icon: "cafe",
      color: "#00704A",
    },
    {
      id: "5",
      name: "Uber",
      category: "Transport",
      amount: -24.0,
      date: "Jan 1",
      icon: "car-sport",
      color: "#000000",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Sticky Header Section */}
      <View className="bg-white px-6 pt-4 pb-6 border-b border-slate-100">
        <Text className="text-slate-900 text-2xl font-black mb-4">
          Transactions
        </Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-slate-100 px-4 py-3 rounded-2xl mb-4">
          <Ionicons name="search" size={20} color="#64748B" />
          <TextInput
            className="flex-1 ml-2 text-slate-900 font-medium"
            placeholder="Search transactions..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Horizontal Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row"
        >
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={filter}
              className={`px-5 py-2.5 rounded-full mr-2 ${
                index === 0 ? "bg-indigo-600" : "bg-slate-100"
              }`}
            >
              <Text
                className={`font-bold text-xs ${
                  index === 0 ? "text-white" : "text-slate-500"
                }`}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Transactions List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20 }}
      >
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            January 2026
          </Text>
          <View className="bg-indigo-50 px-3 py-1 rounded-lg">
            <Text className="text-indigo-600 text-[10px] font-bold">
              AI SORTED
            </Text>
          </View>
        </View>

        {transactions.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="flex-row items-center bg-white p-4 rounded-[28px] mb-3 shadow-sm border border-slate-50"
          >
            {/* Icon Container */}
            <View
              className="h-12 w-12 rounded-2xl items-center justify-center"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <Ionicons name={item.icon} size={22} color={item.color} />
            </View>

            {/* Content */}
            <View className="flex-1 ml-4">
              <Text className="text-slate-900 font-bold text-base leading-5">
                {item.name}
              </Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                  {item.category}
                </Text>
                <View className="h-1 w-1 bg-slate-300 rounded-full mx-2" />
                <Text className="text-slate-400 text-[10px] font-bold uppercase">
                  {item.date}
                </Text>
              </View>
            </View>

            {/* Price */}
            <View className="items-end">
              <Text
                className={`font-black text-base ${
                  item.amount > 0 ? "text-emerald-600" : "text-slate-900"
                }`}
              >
                {item.amount > 0
                  ? `+ $${item.amount.toFixed(2)}`
                  : `- $${Math.abs(item.amount).toFixed(2)}`}
              </Text>
              <Ionicons name="chevron-forward" size={14} color="#CBD5E1" />
            </View>
          </TouchableOpacity>
        ))}

        {/* Summary Footer */}
        <View className="mt-6 p-6 bg-slate-900 rounded-[32px] items-center">
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={24}
            color="#818CF8"
          />
          <Text className="text-white text-center font-medium mt-2 px-4">
            You've spent{" "}
            <Text className="text-indigo-400 font-bold">$240.50</Text> more on
            shopping this month than last.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionScreen;
