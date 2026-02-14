import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  selected: string;
  onSelect: (value: string) => void;
  error?: string;
}

const options = ["ชาย", "หญิง", "ไม่ระบุ"];

export default function RadioGroup({
  selected,
  onSelect,
  error,
}: Props) {
  return (
    <View className="mt-4">
      <Text className="mb-2 font-semibold">เพศ</Text>

      <View className="flex-row justify-between">
        {options.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => onSelect(item)}
            className="flex-row items-center"
          >
            <View
              className={`w-5 h-5 rounded-full border-2 mr-2 items-center justify-center ${
                selected === item
                  ? "border-blue-600"
                  : "border-gray-400"
              }`}
            >
              {selected === item && (
                <View className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
              )}
            </View>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {error && (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      )}
    </View>
  );
}
