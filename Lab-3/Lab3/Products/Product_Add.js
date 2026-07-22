import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const Product_Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add successful!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add a Product</Text>

      <Text>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        onChangeText={setTitle}
      />

      <Text>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        onChangeText={setDescription}
      />

      <Text>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        onChangeText={setPrice}
      />

      <Text>Discount Percentage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter discount percentage"
        onChangeText={setDiscountPercentage}
      />

      <Text>Rating</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter rating"
        onChangeText={setRating}
      />

      <Text>Stock</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter stock"
        onChangeText={setStock}
      />

      <Text>Brand</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter brand"
        onChangeText={setBrand}
      />

      <Text>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        onChangeText={setCategory}
      />

      <Text>Images</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter images URL(s)"
        onChangeText={setImages}
      />

      <View style={styles.buttonWrapper}>
        <Button title="SUBMIT" onPress={handleSubmit} color="#2196F3" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#fff' },
  header: { fontSize: 18, color: 'blue', fontWeight: 'bold', marginBottom: 15 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 5,
  },
  buttonWrapper: { marginTop: 10, marginBottom: 40 },
});

export default Product_Add;
