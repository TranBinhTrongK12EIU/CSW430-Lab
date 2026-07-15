import { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Styles';
const buttons = [
  { value: '7', width: '20%', type: 'number' },
  { value: '8', width: '20%', type: 'number' },
  { value: '9', width: '20%', type: 'number' },
  { value: '⌫', width: '20%', type: 'backspace' },

  { value: '4', width: '20%', type: 'number' },
  { value: '5', width: '20%', type: 'number' },
  { value: '6', width: '20%', type: 'number' },
  { value: '÷', width: '20%', type: 'operator' },

  { value: '1', width: '20%', type: 'number' },
  { value: '2', width: '20%', type: 'number' },
  { value: '3', width: '20%', type: 'number' },
  { value: '\u00d7', width: '20%', type: 'operator' },

  { value: '0', width: '42%', type: 'number' },
  { value: '+', width: '20%', type: 'operator' },
  { value: '-', width: '20%', type: 'operator' },

  { value: 'C', width: '66%', type: 'clear' },
  { value: '=', width: '20%', type: 'equal' },
];

export default function CalculatorScreen() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = ope => {
    setOperator(ope);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    let firstNum = parseFloat(firstValue);
    let secondNum = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((firstNum + secondNum).toString());
    } else if (operator === '-') {
      setDisplayValue((firstNum - secondNum).toString());
    } else if (operator === '\u00d7') {
      setDisplayValue((firstNum * secondNum).toString());
    } else if (operator === '÷') {
      setDisplayValue((firstNum / secondNum).toString());
    }

    setOperator(null);
    setFirstValue(displayValue);
  };

  const handleClearBtn = () => {
    setDisplayValue('0');
    setFirstValue('');
    setOperator(null);
  };

  const handleBackspace = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };

  const getHandleFunction = ({ type, value }) => {
    switch (type) {
      case 'number':
        handleNumberInput(value);
        break;
      case 'operator':
        handleOperatorInput(value);
        break;
      case 'equal':
        handleEqual();
        break;
      case 'clear':
        handleClearBtn();
        break;
      case 'backspace':
        handleBackspace();
        break;
    }
  };

  const getSpecialStyleForButton = ({ type }) => {
    switch (type) {
      case 'number':
        return styles.numberButton;
      case 'operator':
        return styles.operatorButton;
      case 'equal':
        return styles.equalButton;
      case 'clear':
        return styles.clearButton;
      case 'backspace':
        return styles.backspaceButton;
    }
  };

  const getSpecialStyleButtonText = ({ type }) => {
    switch (type) {
      case 'operator':
        return styles.operatorButtonText;
      case 'equal':
        return styles.equalButtonText;
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.container}>
          <View style={styles.displayContainer}>
            <Text style={styles.displayText}>{displayValue}</Text>
          </View>

          <View style={styles.buttonContainer}>
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  { width: button.width },
                  getSpecialStyleForButton(button),
                ]}
                onPress={() => getHandleFunction(button)}
              >
                <Text
                  style={[styles.buttonText, getSpecialStyleButtonText(button)]}
                >
                  {button.value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
