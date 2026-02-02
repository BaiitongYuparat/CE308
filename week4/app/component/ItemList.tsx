import { View, Text, FlatList } from 'react-native';
import { CustomButton } from './CustomButton';

export type  Item = {
    id: string;
    productname: string;
    price: number;
    pcs: number;
    btnSize: "sm" | "md" | "lg";
    btnColor?: "primary" | "secondary" | "danger";
};

type ItemListProps = {
    items: Item[];
};

export const ItemList = ({ items }: ItemListProps) => {
    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View className="p-4 bg-gray-300 rounded-lg m-2">
                    <Text className="text-gray-800 text-4xl">ชื่อสินค้า : {item.productname}</Text>
                    <Text className="text-base text-gray-800">ราคา : {item.price}</Text>
                    <Text className="text-base text-gray-800">จำนวน : {item.pcs}</Text>
                    <CustomButton title="สั่งซื้อ" size={item.btnSize} variant={item.btnColor} onPress={() => alert(item.productname)} />
                </View>
            )}
        />
    );
};
