import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-paper';

const Product_Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const searchProduct = () => {
    let filePath = 'https://dummyjson.com/products';
    if (value !== '') {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.thumbnail }} style={styles.cardImage} />
      <Card.Content>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Discount: {item.discountPercentage}% off</Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Products</Text>
      <TextInput
        style={styles.input}
        placeholder="iphone"
        onChangeText={setValue}
        value={value}
      />
      <Button title="SEARCH" onPress={searchProduct} color="#2196F3" />

      <Text style={styles.subHeader}>Product Detail</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#fff' },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 15,
  },
  subHeader: { marginTop: 15, marginBottom: 10, fontSize: 16 },
  card: { marginBottom: 20, backgroundColor: '#fff' },
  cardImage: { height: 150 },
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 5 },
});

export default Product_Search;
