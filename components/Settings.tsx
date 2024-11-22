import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import Images from '../assets/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Account {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
}

interface AccountItemProps {
  avatar?: ImageSourcePropType;
  name: string;
  onPress?: () => void;
  isAddAccount?: boolean;
  style?: object;
}

// Reusable component for account items
const AccountItem: React.FC<AccountItemProps> = ({
  avatar,
  name,
  onPress,
  isAddAccount = false,
  style,
}) => (
  <TouchableOpacity style={[styles.accountItem, style]} onPress={onPress}>
    {isAddAccount ? (
      <MaterialIcons name="add" style={styles.plusIcon} size={20} />
    ) : (
      <Image source={avatar} style={styles.avatar1} />
    )}
    <Text style={styles.accountName}>{name}</Text>
  </TouchableOpacity>
);

interface SettingsItemProps {
  icon: ImageSourcePropType;
  text: string;
  onPress?: () => void;
  style?: object;
}

// Reusable component for settings list items
const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  text,
  onPress,
  style,
}) => (
  <View>
    <TouchableOpacity style={[styles.settingsItem, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.containerText}>{text}</Text>
      </View>
      <FontAwesome name="angle-right" size={25} color={'grey'} />
    </TouchableOpacity>
    <View style={styles.line} />
  </View>
);

const Settings: React.FC = () => {
  const accounts: Account[] = [
    {id: '1', name: 'lamia qassim 1', avatar: Images.Rectangle},
    {id: '2', name: 'lamia qassim 2', avatar: Images.Rectangle},
    {id: '3', name: 'lamia qassim 3', avatar: Images.Rectangle},
    {id: '4', name: 'lamia qassim 4', avatar: Images.Rectangle},
    {id: '5', name: 'lamia qassim 5', avatar: Images.Rectangle},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Settings</Text>
      </View>
      <ScrollView>
        {/* User Info Section */}
        <View style={styles.imgContainer}>
          <Image source={Images.Oval} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Lamia Qassiam</Text>
            <Text style={styles.phone}>+1 207 555 0147</Text>
            <Text style={styles.username}>@lamia-8</Text>
          </View>
          <FontAwesome name="angle-right" style={styles.chevron} size={25} />
        </View>

        {/* Accounts Section */}
        {accounts.map(account => (
          <AccountItem
            key={account.id}
            avatar={account.avatar}
            name={account.name}
          />
        ))}

        {/* Add Account Button */}
        <AccountItem
          name="Add Account"
          isAddAccount={true}
          onPress={() => console.log('Add Account')}
          style={{marginBottom: 20}}
        />

        {/* Settings List */}
        <SettingsItem
          icon={Images.Saves}
          text="Saved Messages"
          onPress={() => console.log('Saved Messages')}
        />
        <SettingsItem
          icon={Images.Phone}
          text="Recent Calls"
          onPress={() => console.log('Recent Calls')}
        />
        <SettingsItem
          icon={Images.Stickers}
          text="Stickers"
          onPress={() => console.log('Stickers')}
          style={{marginBottom: 20}}
        />
        <SettingsItem
          icon={Images.Notifications}
          text="Notifications and Sound"
          onPress={() => console.log('Notification and calls')}
        />
        <SettingsItem
          icon={Images.lock}
          text="Privacy and Security"
          onPress={() => console.log('Notification and calls')}
        />
        <SettingsItem
          icon={Images.Database}
          text="Data and Storage"
          onPress={() => console.log('Notification and calls')}
        />
        <SettingsItem
          icon={Images.Brush}
          text="Appearance"
          onPress={() => console.log('Notification and calls')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#517DA2',
    fontWeight: '500',
    fontSize: 20,
    color: '#fff',
    padding: 16,
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  avatar1: {
    width: 29,
    height: 29,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 19,
    fontWeight: '500',
  },
  phone: {
    fontSize: 15,
    fontWeight: '400',
    color: '#7E7E82',
  },
  username: {
    color: '#7E7E82',
    fontWeight: '400',
    fontSize: 15,
  },
  chevron: {
    color: '#3C3C434D',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  accountName: {
    fontWeight: '400',
    fontSize: 17,
  },
  plusIcon: {
    color: '#007BFF',
    marginRight: 8,
    marginLeft: 6,
  },
  settingsItem: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
