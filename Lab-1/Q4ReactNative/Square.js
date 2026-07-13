import Styles from './Styles';
import { View, Text, Alert, Button } from 'react-native';
const ClickOnTheSquare = value => {
  Alert.alert(value);
};

export default function Square({ text }) {
  return (
    <View style={[Styles.box, { backgroundColor: '#7ce09f' }]}>
      <Text>{text}</Text>
      <Button title="Click" onPress={() => ClickOnTheSquare(text)} />
    </View>
  );
}
