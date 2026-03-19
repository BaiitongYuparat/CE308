import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addItem, removeItem, clearCart } from "../redux/cartSlice";


export default function HomeScreen() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !quantity || !price) return;

    dispatch(
      addItem({
        id: Date.now().toString(),
        name,
        quantity: Number(quantity),
        price: Number(price),
      })
    );

    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="ชื่อสินค้า"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="จำนวน"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="ราคา"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="เพิ่มลงตะกร้า" onPress={handleAdd} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: "#eee",
            }}
          >
            <Text>
              {item.name} x{item.quantity} ราคา {item.price} บาท
            </Text>

            <TouchableOpacity
              onPress={() => dispatch(removeItem(item.id))}
            >
              <Text style={{ color: "red" }}>ลบ</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={{ marginTop: 20 }}>
        ยอดรวม: {totalAmount} บาท
      </Text>

      <Button title="ล้างตะกร้า" onPress={() => dispatch(clearCart())} />
    </View>
  );
}