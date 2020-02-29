import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SignUpScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SignUp Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
