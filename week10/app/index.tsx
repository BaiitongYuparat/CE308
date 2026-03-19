import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store"
import HomeScreen from "./screens/HomeScreen";
import TodoScreen from "./screens/TodoScreen";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
       <TodoScreen />
    </Provider>
  );
}