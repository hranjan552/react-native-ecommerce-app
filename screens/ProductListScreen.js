import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../store/action/counterAction';

function ProductListScreen(props) {
  const [deviceWidth, setSeviceWidth] = useState(width);

  Dimensions.addEventListener('change', e => {
    setSeviceWidth(Dimensions.get('window').width);
  });

  const myDispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={productArr}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <View style={[styles.card, { width: deviceWidth / 2 - 14 }]}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  props.navigation.navigate('ProductDetail', {
                    productId: item.id
                  });
                }}
              >
                <Image style={styles.cardImage} source={{ uri: item.image }} />
              </TouchableOpacity>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 3
                  }}
                >
                  <Text style={styles.price}>{item.price}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      myDispatch(addToCartAction(item));
                    }}
                  >
                    <Ionicons name="ios-cart" size={25} color={'#034263'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6'
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 10
  },
  separator: {
    marginTop: 10
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 3
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    marginVertical: 6,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 5
  },
  cardHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16
  },

  cardImage: {
    flex: 1,
    height: 150,
    width: null,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  title: {
    fontSize: 18,
    flex: 1
  },
  price: {
    fontSize: 16,
    color: '#034263',
    marginTop: 4
  }
});

const productArr = [
  {
    id: 1,
    title: 'Product 1',
    price: 25,
    image: 'https://lorempixel.com/400/200/nature/6/'
  },
  {
    id: 2,
    title: 'Product 2',
    price: 10,
    image: 'https://lorempixel.com/400/200/nature/5/'
  },
  {
    id: 3,
    title: 'Product 3',
    price: 12,
    image: 'https://lorempixel.com/400/200/nature/4/'
  },
  {
    id: 4,
    title: 'Product 4',
    price: 11,
    image: 'https://lorempixel.com/400/200/nature/6/'
  },
  {
    id: 5,
    title: 'Product 5',
    price: 20,
    image: 'https://lorempixel.com/400/200/sports/1/'
  },
  {
    id: 6,
    title: 'Product 6',
    price: 33,
    image: 'https://lorempixel.com/400/200/nature/8/'
  },
  {
    id: 7,
    title: 'Product 7',
    price: 20,
    image: 'https://lorempixel.com/400/200/nature/1/'
  },
  {
    id: 8,
    title: 'Product 8',
    price: 13,
    image: 'https://lorempixel.com/400/200/nature/3/'
  },
  {
    id: 9,
    title: 'Product 9',
    price: 15,
    image: 'https://lorempixel.com/400/200/nature/4/'
  },
  {
    id: 9,
    title: 'Product 10',
    price: 21,
    image: 'https://lorempixel.com/400/200/nature/5/'
  }
];

export default ProductListScreen;
