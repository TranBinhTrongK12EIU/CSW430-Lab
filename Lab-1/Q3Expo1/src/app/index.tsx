import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text>You've pressed thhe button: {count} time(s)</Text>
      <Button title="Press me baby!" onPress={() => setCount(count + 1)}></Button>
    </View>
  )
}
