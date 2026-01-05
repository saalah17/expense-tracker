import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TransactionItem({ type, name, date, amount }) {
  const isIncome = type === "income";

  // Income: down arrow, green/cyan colors
  // Expense: up arrow, red colors
  const iconName = isIncome ? "arrow-down-left" : "arrow-up-right";
  const iconColor = isIncome ? "#0891b2" : "#dc2626";
  const bgColor = isIncome ? "bg-cyan-100" : "bg-red-100";
  const amountPrefix = isIncome ? "+" : "-";

  return (
    <View className="flex-row items-center mb-5">
      <View
        className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center mr-4`}
      >
        <Feather name={iconName} size={20} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-gray-900 text-base font-medium">{name}</Text>
        <Text className="text-gray-400 text-xs mt-1">{date}</Text>
      </View>
      <Text className="text-gray-900 text-base font-semibold">
        {amountPrefix}${amount}
      </Text>
    </View>
  );
}


