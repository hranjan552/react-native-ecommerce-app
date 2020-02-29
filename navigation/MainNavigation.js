import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

/*
 *-----------------------------------------------------
 */
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ContactScreen from '../screens/ContactScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FilterScreen from '../screens/FilterScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductListScreen from '../screens/ProductListScreen';
import UserOrdersScreen from '../screens/UserOrdersScreen';
import WishListScreen from '../screens/WishListScreen';

/*
 *-----------------------------------------------------
 */
import CustomDrawer from '../components/CustomDrawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  const screenOptionMain = {
    headerStyle: {
      backgroundColor: '#034263'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  const userProfileStack = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={screenOptionMain}>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile Screen',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <View>
                  <Ionicons name="ios-menu" size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="Wishlist"
          component={WishListScreen}
          options={{
            title: 'Wish List Screen',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <View>
                  <Ionicons name="ios-menu" size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="UserOrders"
          component={UserOrdersScreen}
          options={{
            title: 'Orders Screen',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <View>
                  <Ionicons name="ios-menu" size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    );
  };

  const userOrderStack = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={screenOptionMain}>
        <Stack.Screen
          name="UserOrders"
          component={UserOrdersScreen}
          options={{
            title: 'Orders Screen',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <View>
                  <Ionicons name="ios-menu" size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    );
  };

  const userWishStack = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={screenOptionMain}>
        <Stack.Screen
          name="Wishlist"
          component={WishListScreen}
          options={{
            title: 'Wish List Screen',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <View>
                  <Ionicons name="ios-menu" size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    );
  };

  const mainTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Filter') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'ios-call' : 'ios-call';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#F9F3F3',
          inactiveTintColor: '#B69898',
          style: {
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: '#034263'
          }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Filter" component={FilterScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    );
  };

  const mainStackNavigator = ({ navigation }) => {
    return (
      <Stack.Navigator screenOptions={screenOptionMain}>
        <Stack.Screen
          name="HomeMainStack"
          component={mainTabNavigator}
          options={{
            headerTitle: 'React Native Ecommerce',
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 25 }}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              >
                <View>
                  <Ionicons name="ios-menu" size={30} color={'white'} />
                </View>
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{
            title: 'Product List'
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            title: 'Payment Screen'
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        disableGestures={true}
        initialRouteName="Auth"
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Login"
          options={{ gestureEnabled: false }}
          component={LoginScreen}
        />
        <Drawer.Screen
          name="SignUp"
          options={{ gestureEnabled: false }}
          component={SignUpScreen}
        />
        <Drawer.Screen name="HomeNav" component={mainStackNavigator} />
        <Drawer.Screen name="Profile" component={userProfileStack} />
        <Drawer.Screen name="UserOrders" component={userOrderStack} />
        <Drawer.Screen name="Wishlist" component={userWishStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
