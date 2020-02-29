import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  addToCartAction,
  removeFromCartAction
} from '../store/action/counterAction';
import { useSelector, useDispatch } from 'react-redux';

export default function CartScreen(props) {
  const counterData = useSelector(state => {
    // console.log(state.counter);
    return state.counter.cartItems;
  });
  const loginData = useSelector(state => {
    return state.isLogged.isLogged;
  });
  // console.log(counterData);
  // // console.log(loginData);
  const myDispatch = useDispatch();

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={counterData}
      horizontal={false}
      keyExtractor={item => item.id}
      renderItem={post => {
        const item = post.item;
        return (
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.boxContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>₹ {item.price}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => {
                    myDispatch(removeFromCartAction(item));
                  }}
                >
                  <Ionicons name="ios-remove" size={23} color={'white'} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 8, marginVertical: 6 }}>
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => {
                    myDispatch(addToCartAction(item));
                  }}
                >
                  <Ionicons name="ios-add" size={23} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  boxContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    color: '#151515'
  },
  description: {
    fontSize: 15,
    color: '#646464',
    marginVertical: 10
  },
  buttons: {
    flexDirection: 'row'
  },
  // button: {
  //   height: 35,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   width: 50,
  //   marginRight: 5,
  //   marginTop: 5
  // },
  icon: {
    width: 20,
    height: 20
  },
  view: {
    backgroundColor: '#FF1493'
  },
  profile: {
    backgroundColor: '#1E90FF'
  },
  message: {
    backgroundColor: '#228B22'
  },
  shareButton: {
    width: 35,
    height: 35,
    backgroundColor: '#034263',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20
  }
});

// const cartArr = [
//   { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
//   { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
//   { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
//   { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
//   { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar4.png' }
// ];
