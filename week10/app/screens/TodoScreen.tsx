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
import { addTodo, toggleTodo, removeTodo } from "../redux/todoSlice";

export default function TodoScreen() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now().toString(), // 🔥 ไม่ใช้ uuid จะง่ายกว่า
        text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="เพิ่มงาน..."
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="เพิ่มงาน" onPress={handleAdd} />

      <Text style={{ marginTop: 10 }}>
        จำนวนงาน: {todos.length}
      </Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: "#eee",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => dispatch(toggleTodo(item.id))}
            >
              <Text
                style={{
                  textDecorationLine: item.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => dispatch(removeTodo(item.id))}
            >
              <Text style={{ color: "red" }}>ลบ</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}