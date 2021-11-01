import React from "react";
import { View, Text } from "react-native";

export default function Todo(props) {
  //const [state, setstate] = useState("")
  return (
    <View style={{ height: 30, width: 300, borderWidth: 1 }}>
      <Text style={{ padding: 3, textAlign: "center" }}>{props.text}</Text>
    </View>
  );
}
