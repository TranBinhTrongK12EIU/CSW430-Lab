import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View>
      <Text style={{ alignItems: "center", marginTop: 20 }}>You've pressed the button:{pressCount} time(s)</Text>
      <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}></Button>
    </View>
  );
}

