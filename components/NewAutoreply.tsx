import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewAutoreply = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Auto Reply</Text>
      </View>
      <ScrollView>
        <View style={styles.settingsContainer}>
          {/* Privacy and Security */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Text style={styles.containerText}>Private to Private</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>

          {/* Backup and Restore */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Text style={styles.containerText}>Group to Private</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>

          {/* Themes */}
          <View style={styles.container1}>
            <View style={styles.imageContainer}>
              <Text style={styles.containerText}>Group to Group</Text>
            </View>
            <FontAwesome name="angle-right" size={25} color={'grey'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAutoreply;

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
  imgContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
  },
  image: {
    marginRight: 10,
  },
  containerText: {
    color: 'black',
    fontSize: 16,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  settingsItem: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsContainer: {
    marginTop: 10,
    padding: 16,
    borderRadius: '20px',
  },
  container1: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
