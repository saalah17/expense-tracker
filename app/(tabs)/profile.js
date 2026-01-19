import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  // Navigation sections data
  const menuSections = [
    {
      title: "Finance Configuration",
      items: [
        {
          id: "accounts",
          label: "Linked Accounts",
          icon: "wallet-outline",
          color: "bg-blue-100",
          iconColor: "#2563eb",
        },
        {
          id: "categories",
          label: "Custom Categories",
          icon: "grid-outline",
          color: "bg-indigo-100",
          iconColor: "#4f46e5",
        },
        {
          id: "budgets",
          label: "Monthly Budgets",
          icon: "pie-chart-outline",
          color: "bg-emerald-100",
          iconColor: "#059669",
        },
      ],
    },
    {
      title: "Preferences & Security",
      items: [
        {
          id: "security",
          label: "Security & Biometrics",
          icon: "shield-checkmark-outline",
          color: "bg-rose-100",
          iconColor: "#e11d48",
        },
        {
          id: "theme",
          label: "Theme & Currency",
          icon: "color-palette-outline",
          color: "bg-amber-100",
          iconColor: "#d97706",
        },
        {
          id: "backup",
          label: "Cloud Backup",
          icon: "cloud-upload-outline",
          color: "bg-sky-100",
          iconColor: "#0284c7",
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Profile Header */}
        <View className="bg-white px-6 pt-4 pb-8 items-center border-b border-slate-100">
          <View className="relative">
            <View className="h-24 w-24 rounded-full bg-indigo-600 items-center justify-center border-4 border-slate-50">
              <Text className="text-white text-3xl font-black">AT</Text>
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-slate-900 p-2 rounded-full border-2 border-white">
              <Ionicons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>

          <Text className="text-slate-900 text-2xl font-black mt-4">
            Alex Taylor
          </Text>
          <Text className="text-slate-400 font-medium">
            alex.taylor@example.com
          </Text>

          <TouchableOpacity className="mt-4 bg-indigo-50 px-6 py-2 rounded-full">
            <Text className="text-indigo-600 font-bold text-xs uppercase tracking-widest">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* AI Plan Status */}
        <View className="mx-6 mt-6 p-4 bg-slate-900 rounded-[32px] flex-row items-center justify-between shadow-xl shadow-slate-300">
          <View className="flex-row items-center">
            <View className="bg-white/10 p-2 rounded-xl">
              <MaterialCommunityIcons
                name="auto-fix"
                size={24}
                color="#818CF8"
              />
            </View>
            <View className="ml-3">
              <Text className="text-white font-bold">AI Premium Plus</Text>
              <Text className="text-slate-400 text-xs">
                Active until Jan 2027
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </View>

        {/* Menu Sections */}
        {menuSections.map((section, idx) => (
          <View key={idx} className="mt-8 px-6">
            <Text className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-4 ml-2">
              {section.title}
            </Text>

            <View className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
              {section.items.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  className={`flex-row items-center p-4 ${
                    index !== section.items.length - 1
                      ? "border-b border-slate-50"
                      : ""
                  }`}
                >
                  <View
                    className={`${item.color} h-10 w-10 rounded-2xl items-center justify-center`}
                  >
                    <Ionicons
                      name={item.icon}
                      size={20}
                      color={item.iconColor}
                    />
                  </View>
                  <Text className="flex-1 ml-4 text-slate-700 font-bold text-[15px]">
                    {item.label}
                  </Text>
                  <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity className="mx-6 mt-10 mb-10 flex-row items-center justify-center p-5 bg-white rounded-[28px] border border-rose-50 shadow-sm shadow-rose-100">
          <Ionicons name="log-out-outline" size={22} color="#E11D48" />
          <Text className="ml-2 text-rose-500 font-bold text-base">
            Sign Out
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-slate-300 text-xs font-medium">
          App Version 2.4.0 (2026)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
