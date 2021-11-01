import React from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import Todo from "../components/Todo";

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = React.useState([]);
  const [todoText, setTodoText] = React.useState("");

  function addTodo() {
    // Alert.alert(todoText);
    setTodos((todos) => [...todos, todoText]);
    setTodoText("");
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <View style={{ flex: 1, flexDirection: "row", maxHeight: 51 }}>
        <TextInput
          style={{ borderWidth: 1, width: 300, height: 50, padding: 5 }}
          onChangeText={(txt) => setTodoText(txt)}
          value={todoText}
        ></TextInput>
        <Button
          onPress={() => addTodo()}
          title="Add"
          style={{ marginLeft: 3 }}
        ></Button>
      </View>
      {todos.map((todo, i) => (
        <Todo text={todo} key={i}></Todo>
      ))}
      <Text>HOME_SCREEN</Text>
      <TextInput placeholder="Give a text"></TextInput>
      <Button
        title="Go Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
