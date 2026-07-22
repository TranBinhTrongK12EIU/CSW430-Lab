import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

const Product_Detail = () => {
  const [data, setData] = useState(null);
  const filePath = 'https://dummyjson.com/products/2';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => {
        setData(d);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return (
      <View style={styles.center}>
        <Text>Loading product detail...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Detail</Text>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: data.thumbnail }} style={styles.image} />
        <Card.Content style={styles.content}>
          <Text style={styles.title}>Title: {data.title}</Text>
          <Text>Description: {data.description}</Text>
          <Text>Price: ${data.price}</Text>
          <Text>Discount: {data.discountPercentage}%</Text>
          <Text>Rating: {data.rating} stars</Text>
          <Text>Stock: {data.stock} units</Text>
          <Text>Brand: {data.brand}</Text>
          <Text>Category: {data.category}</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.button}
            buttonColor="#6750A4"
          >
            Delete
          </Button>
          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.button}
            buttonColor="#6750A4"
          >
            Cancel
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 16, marginBottom: 15 },
  card: { borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff' },
  image: { height: 200 },
  content: { marginTop: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  actions: { justifyContent: 'flex-end', paddingRight: 15, paddingBottom: 15 },
  button: { marginLeft: 10, borderRadius: 20 },
});

export default Product_Detail;
