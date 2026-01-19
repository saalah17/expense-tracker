import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useAI } from "../contexts/AIContext"; // Adjust path based on your folder structure
import { useAI } from "../../contexts/aiContext";

const AIChatScreen = () => {
  const [message, setMessage] = useState("");
  const { chatHistory, isTyping, sendMessage, clearChat } = useAI();
  const scrollViewRef = useRef();

  const handleSend = async () => {
    if (!message.trim() || isTyping) return;

    const userText = message;
    setMessage(""); // Clear input immediately for better UX
    await sendMessage(userText);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* AI Header */}
      <View className="px-6 py-4 bg-white border-b border-slate-100 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className="bg-indigo-600 h-10 w-10 rounded-full items-center justify-center shadow-lg shadow-indigo-200">
            <MaterialCommunityIcons name="robot" size={22} color="white" />
          </View>
          <View className="ml-3">
            <Text className="text-slate-900 font-black text-lg">
              Gemini Finance
            </Text>
            <View className="flex-row items-center">
              <View
                className={`h-2 w-2 rounded-full mr-1.5 ${
                  isTyping ? "bg-amber-400" : "bg-emerald-500"
                }`}
              />
              <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
                {isTyping ? "Gemini is thinking..." : "AI Assistant Active"}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={clearChat}
          className="p-2 bg-slate-50 rounded-full"
        >
          <Ionicons name="trash-outline" size={20} color="#64748B" />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      >
        {chatHistory.map((item) => (
          <View
            key={item.id}
            className={`mb-6 max-w-[85%] ${
              item.role === "user" ? "self-end" : "self-start"
            }`}
          >
            <View
              className={`p-4 rounded-[28px] shadow-sm ${
                item.role === "user"
                  ? "bg-slate-900 rounded-tr-none"
                  : "bg-white border border-slate-100 rounded-tl-none"
              }`}
            >
              <Text
                className={`text-[15px] leading-6 ${
                  item.role === "user"
                    ? "text-white"
                    : "text-slate-700 font-medium"
                }`}
              >
                {item.text}
              </Text>
            </View>
            <Text
              className={`text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter ${
                item.role === "user" ? "text-right" : "text-left"
              }`}
            >
              {item.role === "user" ? "You" : "Gemini AI"}
            </Text>
          </View>
        ))}

        {isTyping && (
          <View className="self-start mb-6 bg-white border border-slate-100 p-4 rounded-[28px] rounded-tl-none shadow-sm">
            <ActivityIndicator size="small" color="#6366F1" />
          </View>
        )}
      </ScrollView>

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View className="p-4 bg-white border-t border-slate-100 flex-row items-center">
          <TouchableOpacity className="bg-slate-100 h-12 w-12 rounded-2xl items-center justify-center mr-3">
            <Ionicons name="add" size={24} color="#64748B" />
          </TouchableOpacity>

          <View className="flex-1 bg-slate-100 rounded-2xl px-4 py-1 flex-row items-center">
            <TextInput
              placeholder="Ask about your finances..."
              placeholderTextColor="#94A3B8"
              value={message}
              onChangeText={setMessage}
              multiline
              className="flex-1 text-slate-900 font-medium max-h-24 py-2"
            />
            <TouchableOpacity className="ml-2">
              <MaterialCommunityIcons
                name="microphone"
                size={20}
                color="#64748B"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleSend}
            disabled={message.length === 0 || isTyping}
            className={`ml-3 h-12 w-12 rounded-2xl items-center justify-center shadow-lg ${
              message.length > 0 && !isTyping
                ? "bg-indigo-600 shadow-indigo-200"
                : "bg-slate-200"
            }`}
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AIChatScreen;
