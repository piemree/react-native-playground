import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducers/counterReducer";

export default function DetailsScreen() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button
          title="Increment value"
          onPress={() => dispatch(increment())}
        ></Button>
        <Text>{count}</Text>
        <Button
          title="Decrement valuee"
          onPress={() => dispatch(decrement())}
        ></Button>
      </View>
    </View>
  );
}

// export function Counter() {

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => }
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )
// }
