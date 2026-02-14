import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  error?: string;
  touched?: boolean;
}

export default function Checkbox({
  label,
  checked,
  onPress,
  error,
  touched,
}: CheckboxProps) {
  return (
    <View className="mt-4">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center"
        activeOpacity={0.7}
      >
        <View
          className={`w-6 h-6 border-2 rounded mr-3 items-center justify-center ${
            checked ? "bg-blue-600 border-blue-600" : "border-gray-400"
          }`}
        >
          {checked && (
            <Text className="text-white font-bold">✓</Text>
          )}
        </View>

        <Text className="text-gray-700">{label}</Text>
      </TouchableOpacity>

      {touched && error && (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      )}
    </View>
  );
}
