import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setData(json.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Price: ${item.price}</Text>
        <Text style={styles.discountText}>
          Discount: {item.discountPercentage}% off
        </Text>
        <Text>Rating: {item.rating}</Text>
        <Text>Stock: {item.stock}</Text>
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
        <View style={styles.buttonContainer}>
          <Button title="DETAIL" onPress={() => {}} />
          <Button title="ADD" onPress={() => {}} />
          <Button title="DELETE" onPress={() => {}} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product list</Text>
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
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#666' },
  itemContainer: { flexDirection: 'row', marginBottom: 20, paddingBottom: 10 },
  image: { width: 100, height: 100, marginRight: 10, resizeMode: 'contain' },
  infoContainer: { flex: 1 },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  discountText: {
    color: '#007D00',
    fontWeight: '500',
  },
});

export default ProductList;
