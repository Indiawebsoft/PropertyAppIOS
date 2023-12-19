import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const data = [
  {id: '1', name: 'Item 1', image: 'image_url_1', price: '$10'},
  {id: '2', name: 'Item 2', image: 'image_url_2', price: '$15'},
  {id: '3', name: 'Item 3', image: 'image_url_3', price: '$20'},
  // Add more items as needed
];

const Item = ({name, image, price}) => (
  <View style={styles.item}>
    <Image source={{uri: image}} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

const HorizontalFlatList = () => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Item name={item.name} image={item.image} price={item.price} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 2,
    fontSize: 14,
    color: 'grey',
  },
});

export default HorizontalFlatList;
