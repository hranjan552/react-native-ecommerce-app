import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

export default function ProfileScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/38069692?s=360&v=4'
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Himanshu Ranjan</Text>
            <Text style={styles.info}>MEAN Stack & React Native developer</Text>
            <Text style={styles.description}>
              Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है.
              Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन
              गया
            </Text>

            <View style={{ marginTop: 30 }}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Update Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  Alert.alert(
                    'Are You Sure to Logout ?',
                    'Press Sure to Logout, Cancel to revert back',
                    [
                      { text: 'Cancel', onPress: () => {} },
                      {
                        text: 'OK',
                        onPress: () => props.navigation.navigate('Home')
                      }
                    ]
                  )
                }
              >
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#28B351',
    height: 100
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  name: {
    fontSize: 28,
    color: '#6C6A85',
    fontWeight: '600'
  },
  info: {
    fontSize: 16,
    color: '#5B3640',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#28B351'
  }
});
