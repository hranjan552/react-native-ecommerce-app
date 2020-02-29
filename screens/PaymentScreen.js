import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PaymentScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Payment Screen</Text>
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
