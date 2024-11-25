import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Images from '../assets/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AutoReply1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Auto Reply</Text>
      </View>
      <ScrollView>
        <ImageBackground
          source={Images.bgImg2}
          style={styles.imageBackground}
        />
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AutoReply1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#407F7F',
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  imageBackground: {
    width: '100%',
    height: 650,
  },
  button: {
    marginLeft: 320,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#407F7F', // Your desired background color
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds a shadow effect (Android)
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
