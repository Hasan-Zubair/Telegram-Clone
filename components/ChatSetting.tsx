import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../assets/images';
import React from 'react';

const ChatSetting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>TelgChat Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.settingsContainer}>
          {/* Privacy and Security */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.lock} style={styles.image} />
              <Text style={styles.containerText}>Privacy and Security</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />

          {/* Backup and Restore */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.Database} style={styles.image} />
              <Text style={styles.containerText}>Backup and Restore</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />

          {/* Themes */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.Brush} style={styles.image} />
              <Text style={styles.containerText}>Themes</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.settingsContainer}>
          {/* Conversation Screen*/}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.Chat} style={styles.image} />
              <Text style={styles.containerText}>Conversation Screen</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />

          {/* Media Screen*/}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.Group} style={styles.image} />
              <Text style={styles.containerText}>Media Screen</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />

          {/* Schedule Message */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.Meeting} style={styles.image} />
              <Text style={styles.containerText}>
                Auto Reply/Schedule Message
              </Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />
          {/* Updates */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Image source={Images.Time} style={styles.image} />
              <Text style={styles.containerText}>Updates</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
          <View style={styles.line} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#517DA2',
    padding: 16,
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  settingsContainer: {
    marginTop: 10,
  },
  container1: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {
    color: 'black',
    fontSize: 16,
  },
  image: {
    marginRight: 10,
  },
  line: {
    borderBottomWidth: 1, // This creates the horizontal line
    borderBottomColor: '#D3D3D3',
    marginLeft: 60,
  },
});

export default ChatSetting;
