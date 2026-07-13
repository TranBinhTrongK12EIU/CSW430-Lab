import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  // State Employee & Sum Digit
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [sumNumber, setSumNumber] = useState('');

  // State find Min
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [numC, setNumC] = useState('');
  const [minResult, setMinResult] = useState<number | null>(null);

  // State for Hailstone
  const [hailstoneInput, setHailstoneInput] = useState('');
  const [hailstoneSeq, setHailstoneSeq] = useState<number[]>([]);

  // Employee
  const handleUpdateEmployee = () => {
    if (!fullName || !age || !occupation) {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin nhân viên!');
      return;
    }
    Alert.alert('Thành công', `Cập nhật nhân viên: ${fullName} (${age} tuổi) - Chuyên ngành: ${occupation} thành công!`);
  };

  // Sum first and last digit
  const getSumOfFirstAndLastDigit = (val: string) => {
    const cleanStr = val.replace(/[^0-9]/g, '');
    if (cleanStr.length === 0) return '-';
    const firstDigit = parseInt(cleanStr[0]);
    const lastDigit = parseInt(cleanStr[cleanStr.length - 1]);
    return firstDigit + lastDigit;
  };

  // Find Min
  const handleFindMin = () => {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    const c = parseFloat(numC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      Alert.alert('Lỗi', 'Vui lòng nhập đủ cả 3 số hợp lệ!');
      return;
    }
    setMinResult(Math.min(a, b, c));
  };

  // Generate Hailstone sequence
  const handleGenerateHailstone = () => {
    let n = parseInt(hailstoneInput);
    if (isNaN(n) || n <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập một số nguyên dương (n > 0)!');
      return;
    }

    const seq: number[] = [n];
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
      seq.push(n);
    }
    setHailstoneSeq(seq);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f6fa" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <Text style={styles.headerTitle}>BÀI THỰC HÀNH LAB 1 - Q6</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Thông tin & Tính tổng chữ số</Text>

          <Text style={styles.subLabel}>Cập nhật thông tin nhân viên (Props & Component)</Text>
          <TextInput
            style={styles.input}
            placeholder="Họ và tên nhân viên"
            placeholderTextColor="#a0a5b5"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Tuổi"
            placeholderTextColor="#a0a5b5"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
          <TextInput
            style={styles.input}
            placeholder="Chuyên ngành / Nghề nghiệp"
            placeholderTextColor="#a0a5b5"
            value={occupation}
            onChangeText={setOccupation}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateEmployee}>
            <Text style={styles.buttonText}>Cập nhật thông tin</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <Text style={styles.subLabel}>Tính tổng chữ số đầu & cuối (State)</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập vào một số tự nhiên bất kỳ"
            placeholderTextColor="#a0a5b5"
            keyboardType="numeric"
            value={sumNumber}
            onChangeText={setSumNumber}
          />
          <Text style={styles.resultText}>
            Kết quả tổng: <Text style={styles.highlight}>{getSumOfFirstAndLastDigit(sumNumber)}</Text>
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tìm số nhỏ nhất (Min of 3)</Text>
          <Text style={styles.subLabel}>Nhập vào 3 số cần so sánh:</Text>

          <View style={styles.rowInputs}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              placeholder="Số a"
              placeholderTextColor="#a0a5b5"
              keyboardType="numeric"
              value={numA}
              onChangeText={setNumA}
            />
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 8 }]}
              placeholder="Số b"
              placeholderTextColor="#a0a5b5"
              keyboardType="numeric"
              value={numB}
              onChangeText={setNumB}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Số c"
              placeholderTextColor="#a0a5b5"
              keyboardType="numeric"
              value={numC}
              onChangeText={setNumC}
            />
          </View>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#2ecc71' }]} onPress={handleFindMin}>
            <Text style={styles.buttonText}>Tìm số nhỏ nhất</Text>
          </TouchableOpacity>

          {minResult !== null && (
            <Text style={styles.resultText}>
              Số nhỏ nhất là: <Text style={styles.highlight}>{minResult}</Text>
            </Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Hiển thị chuỗi Hailstone</Text>
          <Text style={styles.subLabel}>Nhập số nguyên dương (n &gt; 0):</Text>

          <TextInput
            style={styles.input}
            placeholder="Ví dụ: 6, 7, 11..."
            placeholderTextColor="#a0a5b5"
            keyboardType="numeric"
            value={hailstoneInput}
            onChangeText={setHailstoneInput}
          />

          <TouchableOpacity style={[styles.button, { backgroundColor: '#e67e22' }]} onPress={handleGenerateHailstone}>
            <Text style={styles.buttonText}>Tạo dãy số</Text>
          </TouchableOpacity>

          {hailstoneSeq.length > 0 && (
            <View style={styles.hailstoneContainer}>
              <Text style={styles.subLabel}>Dãy số kết quả (Vuốt ngang để xem):</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {hailstoneSeq.map((num, index) => (
                  <View key={index} style={styles.badge}>
                    <Text style={styles.badgeText}>{num}</Text>
                    {index < hailstoneSeq.length - 1 && <Text style={styles.arrow}>→</Text>}
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scrollContainer: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 16,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    paddingLeft: 8,
  },
  subLabel: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#2d3748',
    marginBottom: 12,
  },
  rowInputs: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#edf2f7',
    marginVertical: 16,
  },
  resultText: {
    fontSize: 15,
    color: '#2c3e50',
    marginTop: 12,
    fontWeight: '500',
  },
  highlight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  hailstoneContainer: {
    marginTop: 12,
  },
  horizontalScroll: {
    flexDirection: 'row',
    marginTop: 6,
    paddingVertical: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {
    backgroundColor: '#f0f3f6',
    color: '#2c3e50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: '600',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#dcdde1',
  },
  arrow: {
    marginHorizontal: 8,
    color: '#95a5a6',
    fontWeight: 'bold',
  },
});