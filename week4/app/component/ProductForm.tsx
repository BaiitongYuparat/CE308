import { View, Text, Alert } from "react-native";
import { useState } from "react";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";

export const ProductForm = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [pcs, setPcs] = useState("");

    const handleSubmit = () => {
        Alert.alert(
            "ข้อมูลสินค้า",
            `ชื่อสินค้า: ${productName}\nราคา: ${price}\nจำนวน: ${pcs}`
        );
    };

    return (
        <View className="p-4 w-full">


            <Text className="text-gray-800 text-2xl font-bold">กรอกข้อมูลสินค้า </Text>
            <CustomInput
                label="ชื่อสินค้า"
                value={productName}
                onChangeText={setProductName}
                placeholder="กรอกชื่อสินค้า"
            />

            <CustomInput
                label="ราคา"
                value={price}
                onChangeText={setPrice}
                placeholder="กรอกราคา"
            />

            <CustomInput
                label="จำนวน"
                value={pcs}
                onChangeText={setPcs}
                placeholder="กรอกจำนวน"
            />

            <CustomButton
                title="ยืนยัน"
                size="md"
                variant="primary"
                onPress={handleSubmit}
            />

        </View>
    );
};
