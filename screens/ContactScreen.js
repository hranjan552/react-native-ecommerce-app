import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen(props) {
  let phoneNumber = '9876543210';
  let phoneNumber2 = '9472734442';
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phoneNumber}`;
    phoneNumber2 = `telprompt:${phoneNumber2}`;
  } else {
    phoneNumber = `tel:${phoneNumber}`;
    phoneNumber2 = `tel:${phoneNumber2}`;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.avatarLogo}
            source={require('../assets/icon.png')}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <Text style={styles.headerTitle}>Contact Us</Text>
          </View>
        </View>

        <View style={styles.postContent}>
          <Text style={styles.tags}>Sector-63 Noida-201301. UP India</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`${phoneNumber}`);
            }}
          >
            <Text style={styles.date}>
              <Ionicons name="ios-call" size={18} color="#696969" /> +91
              9548488295
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`${phoneNumber2}`);
            }}
          >
            <Text style={styles.date}>
              <Ionicons name="ios-call" size={18} color="#696969" /> +91
              9472734442
            </Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: '#034263',
              borderBottomWidth: 1,
              marginVertical: 20
            }}
          />

          <Text style={styles.postTitle}>Request Support </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid="transparent"
              keyboardType="default"
              autoCompleteType="off"
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri:
                  'https://img.icons8.com/plasticine/100/000000/speech-bubble-with-dots.png'
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              autoCompleteType="off"
              keyboardType="email-address"
            />
            <Image
              style={styles.inputIcon}
              source={{ uri: 'https://img.icons8.com/nolan/64/email.png' }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Mobile"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              autoCompleteType="off"
              keyboardType="phone-pad"
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://img.icons8.com/color/48/000000/android.png'
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Message"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              autoCompleteType="off"
              keyboardType="default"
              returnKeyType="next"
            />
            <Image
              style={styles.inputIcon}
              source={{
                uri: 'https://img.icons8.com/nolan/64/filled-message.png'
              }}
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => {}}
          >
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#28B351'
  },
  avatarLogo: {
    width: 70,
    height: 70
  },
  headerTitle: {
    marginRight: 10,
    paddingTop: 19,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  postContent: {
    flex: 1,
    padding: 22
  },
  postTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20
  },
  tags: {
    color: '#00BFFF',
    marginTop: 10,
    fontSize: 20
  },
  date: {
    color: '#696969',
    marginTop: 10,
    fontSize: 18
  },
  inputContainer: {
    // borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    // borderBottomWidth: 1,
    width: '100%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 3
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: '#28B351',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.35,
    elevation: 3
  },
  submitBtnText: {
    color: 'white'
  }
});
