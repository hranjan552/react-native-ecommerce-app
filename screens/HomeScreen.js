import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  Alert,
  TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen(props) {
  const [deviceWidth, setSeviceWidth] = useState(width);

  Dimensions.addEventListener('change', e => {
    setSeviceWidth(Dimensions.get('window').width);
  });

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white'
      }}
    >
      <ScrollView>
        <FlatList
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={imagesArr}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => Alert.alert('test')}
              >
                <Image
                  source={{ uri: item }}
                  style={{
                    height: 200,
                    width: deviceWidth - 10,
                    borderRadius: 5,
                    marginHorizontal: 5,
                    marginTop: 6
                  }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item}
        />

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#034263',
            marginVertical: 30,
            marginHorizontal: 0
          }}
        >
          <View>
            <View style={[styles.cardBox, { width: deviceWidth * 0.34 }]}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'mobile'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/977/977411.png'
                  }}
                />
                <Text style={styles.cardText}>Mobile</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.cardBox, { width: deviceWidth * 0.34 }]}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'desktop'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2004/2004699.png'
                  }}
                />
                <Text style={styles.cardText}>Desktop</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.cardBox, { width: deviceWidth * 0.34 }]}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'speakers'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2618/2618154.png'
                  }}
                />
                <Text style={styles.cardText}>Speakers</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 0 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'keyboard'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/1383/1383416.png'
                  }}
                />
                <Text style={styles.cardText}>Keyboard</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 1, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'tv'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/1699/1699568.png'
                  }}
                />
                <Text style={styles.cardText}>Tv</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 1, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'camera'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2623/2623460.png'
                  }}
                />
                <Text style={styles.cardText}>Camera</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 1, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'printers'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/1497/1497542.png'
                  }}
                />
                <Text style={styles.cardText}>Printers</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 0, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'pendrive'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2165/2165070.png'
                  }}
                />
                <Text style={styles.cardText}>Pendrive</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 1, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'laptop'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2636/2636332.png'
                  }}
                />
                <Text style={styles.cardText}>Laptop</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 1, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'smart-watch'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2611/2611360.png'
                  }}
                />
                <Text style={styles.cardText}>Smart Watch</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 1, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'mouse'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/420/420298.png'
                  }}
                />
                <Text style={styles.cardText}>Mouse</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.cardBox,
                { width: deviceWidth * 0.34, marginBottom: 0, marginLeft: 1 }
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('ProductList', {
                    productCat: 'router'
                  });
                }}
              >
                <Image
                  style={styles.cardImage}
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/128/2303/2303538.png'
                  }}
                />
                <Text style={styles.cardText}>Router</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  cardBox: {
    height: 110,
    marginBottom: 1,
    backgroundColor: 'white',
    padding: 8
  },
  cardImage: {
    height: 55,
    width: 55,
    alignSelf: 'center'
  },
  cardText: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 15,
    color: '#034263'
  }
});

const imagesArr = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
  'https://source.unsplash.com/1024x768/?film',
  'https://source.unsplash.com/1024x768/?travel',
  'https://source.unsplash.com/1024x768/?animals',
  'https://source.unsplash.com/1024x768/?fashion',
  'https://source.unsplash.com/1024x768/?wallpapers'
];
