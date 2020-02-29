import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{ uri: 'https://i.imgur.com/KZsmUi2l.jpg' }}
          style={{
            flex: 1,
            width: 280,
            height: 88.5,
            justifyContent: 'center'
          }}
        ></ImageBackground>
      </View>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View>
            <Image
              source={{
                uri:
                  'https://avatars0.githubusercontent.com/u/38069692?s=260&v=4'
              }}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text
              numberOfLines={1}
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 10,
                marginLeft: 10
              }}
            >
              Himanshu Ranjan
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}
            >
              <Text
                numberOfLines={1}
                style={{
                  color: '#9EB6EE',
                  textDecorationLine: 'underline',
                  fontSize: 14,
                  fontWeight: 'bold',
                  paddingTop: 8,
                  paddingBottom: 5,
                  marginLeft: 45
                }}
              >
                Go To Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1 }} />
        <View style={styles.screenContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <View
              style={[
                styles.screenStyle,
                props.activeItemKey == 'MainDrawer' ? null : null
              ]}
            >
              <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
                <View>
                  <Ionicons name="ios-home" size={20} color={'#fff8f8'} />
                </View>
                <View>
                  <Text style={styles.screenTextStyle}>Home</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Wishlist')}
          >
            <View
              style={[
                styles.screenStyle,
                props.activeItemKey == 'Wishlist'
                  ? styles.activeBackgroundColor
                  : null
              ]}
            >
              <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
                <View>
                  <Ionicons name="md-heart" size={20} color={'#fff8f8'} />
                </View>
                <View>
                  <Text style={styles.screenTextStyle}>Wish List</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('UserOrders')}
          >
            <View
              style={[
                styles.screenStyle,
                props.activeItemKey == 'UserOrders'
                  ? styles.activeBackgroundColor
                  : null
              ]}
            >
              <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
                <View>
                  <Ionicons name="md-archive" size={20} color={'#fff8f8'} />
                </View>
                <View>
                  <Text style={styles.screenTextStyle}>Your Orders</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}
          >
            <View
              style={[
                styles.screenStyle,
                props.activeItemKey == 'Profile'
                  ? styles.activeBackgroundColor
                  : null
              ]}
            >
              <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
                <View>
                  <Ionicons name="md-contact" size={20} color={'#fff8f8'} />
                </View>
                <View>
                  <Text style={styles.screenTextStyle}>Profile</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <View
              style={[
                styles.screenStyle,
                props.activeItemKey == 'Login'
                  ? styles.activeBackgroundColor
                  : null
              ]}
            >
              <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
                <View>
                  <Ionicons name="ios-unlock" size={20} color={'#fff8f8'} />
                </View>
                <View>
                  <Text style={styles.screenTextStyle}>Login</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034263'
  },
  headerContainer: {
    height: 90
  },
  profileContainer: {
    paddingTop: 2,
    paddingBottom: 5,
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  headerText: {
    color: '#fff8f8'
  },
  screenContainer: {
    paddingTop: 2,
    paddingHorizontal: 1,
    width: '100%'
  },
  screenStyle: {
    height: 45,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  screenTextStyle: {
    fontSize: 18,
    marginLeft: 20,
    color: '#fff8f8'
  },
  selectedTextStyle: {
    fontWeight: 'bold',
    color: '#00adff'
  },
  activeBackgroundColor: {
    backgroundColor: 'grey'
  }
});
