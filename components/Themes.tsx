import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Images from '../assets/images';
type Message = {
  message: string;
  sender: string;
};

const Themes: React.FC<Message> = ({message, sender}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Themes</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.sectionTitle}>Color Theme</Text>
          <ImageBackground source={Images.bgImg}>
            <View>
              <View
                style={[
                  styles.messageContainer,
                  sender === 'user' ? styles.userMessage : styles.otherMessage,
                ]}>
                <Text style={styles.messageText}>{message}</Text>
                <Text style={styles.timestamp}>
                  {sender === 'user' ? '00:20' : '00:20'}
                </Text>
              </View>
              <View
                style={[
                  styles.messageContainer1,
                  sender === 'user' ? styles.userMessage : styles.otherMessage,
                ]}>
                <Text style={styles.messageText}>{message}</Text>
                <Text style={styles.timestamp}>
                  {sender === 'user' ? '00:20' : '00:20'}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View>
            <View></View>
            <View></View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Themes;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#517DA2',
    padding: 20,
  },
  headerText: {
    color: '#F4F4F4',
    fontWeight: '500',
    fontSize: 20,
  },
  sectionTitle: {
    marginLeft: 26,
    marginTop: 26,
    fontSize: 16,
    fontWeight: '400',
    color: '#636366',
    textTransform: 'uppercase',
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    margin: 5,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
  messageContainer1: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    marginLeft: 250,
    marginBottom: 5,
    marginTop: 5,
  },
});
