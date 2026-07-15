import { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import styles from './Styles';

export default function TaxCalculator() {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  const calculatetax = () => {
    const incomeFloat = parseFloat(income.trim());
    if (isNaN(incomeFloat) || incomeFloat < 0) {
      setTax('Invalid Income!');
      return;
    }
    let taxFloat = 0;
    if (incomeFloat <= 10000000) {
      taxFloat = incomeFloat * 0.1;
    } else if (incomeFloat <= 50000000) {
      taxFloat = 10000000 * 0.1 + (incomeFloat - 10000000) * 0.2;
    } else {
      taxFloat =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeFloat - 50000000) * 0.3;
    }

    setTax(`Income Tax: ${taxFloat.toFixed(2)} đ`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income Tax Calculator</Text>
      <TextInput
        textAlign="right"
        style={styles.input}
        placeholder="Enter your income"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />
      <Button title="Calculate Tax Baby!" onPress={() => calculatetax()} />
      <Text style={styles.result}>{tax}</Text>
    </View>
  );
}
