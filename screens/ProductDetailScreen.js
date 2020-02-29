import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Share
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

async function shareFunction() {
  try {
    const result = await Share.share({
      message: 'React Native | A framework for building native apps using React'
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}

export default function ProductDetailScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={{ uri: 'https://source.unsplash.com/1024x768/?nature' }}
          style={{ height: 400, width: null }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="md-arrow-back" size={25} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Ionicons name="ios-home" size={25} color={'white'} />
        </TouchableOpacity>

        <View style={[styles.card, { width: '100%' }]}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
              Product Name 1
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10
            }}
          >
            <Text style={{ fontSize: 20, marginTop: 5 }}>123 Rs.</Text>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => {
                shareFunction();
              }}
            >
              <Ionicons name="md-share" size={23} color={'white'} />
            </TouchableOpacity>
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
  button: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    position: 'absolute',
    left: 20,
    top: 40
  },
  button1: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 40
  },
  shareButton: {
    width: 35,
    height: 35,
    backgroundColor: '#034263',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20
  },
  card: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 3
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 5,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 15
  }
});
