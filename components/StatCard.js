import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function StatCard({
  variant,
  title,
  percentage,
  balanceLabel,
  balance,
}) {
  const isPrimary = variant === "primary";

  return (
    <View className="flex-1">
      <View
        className={`${
          isPrimary ? "bg-indigo-600" : "bg-white border border-gray-200"
        } rounded-2xl p-4 pb-2 h-44 justify-between`}
      >
        <View>
          <View className="flex-row justify-between items-start mb-2">
            <Text
              className={`${
                isPrimary ? "text-white" : "text-gray-900"
              } text-sm`}
            >
              {title}
            </Text>
            <Feather
              name="more-horizontal"
              size={20}
              color={isPrimary ? "white" : "#6b7280"}
            />
          </View>
          <Text
            className={`${
              isPrimary ? "text-white" : "text-gray-500"
            } text-4xl font-bold`}
          >
            {percentage}
          </Text>
        </View>
        <View
          className={`${
            isPrimary ? "bg-white" : "bg-gray-100"
          } rounded-xl p-3 mb-1`}
        >
          <Text className="text-gray-500 text-xs mb-1">{balanceLabel}</Text>
          <Text className="text-gray-900 text-xl font-semibold">{balance}</Text>
        </View>
      </View>
    </View>
  );
}
