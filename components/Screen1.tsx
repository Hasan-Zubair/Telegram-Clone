import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

type SwitchItem = {
  id: number;
  label: string;
};

const privacyItems: SwitchItem[] = [
  {id: 1, label: 'Freeze Last Seen'},
  {id: 2, label: 'Anti-View Once'},
  {id: 3, label: 'Disable Forwarded'},
];

const statusItems: SwitchItem[] = [
  {id: 4, label: 'Hide View Status'},
  {id: 5, label: 'Anti-Delete Status'},
];

const chatItems: SwitchItem[] = [
  {id: 6, label: 'Anti-Delete Messages'},
  {id: 7, label: 'Show Blue Ticks after reply'},
  {id: 8, label: 'Make Pattern Invisible'},
  {id: 9, label: 'Disable pattern vibration'},
];

const Screen: React.FC = () => {
  const [switchStates, setSwitchStates] = useState<Record<number, boolean>>(
    [...privacyItems, ...statusItems, ...chatItems].reduce((state, item) => {
      state[item.id] = false;
      return state;
    }, {} as Record<number, boolean>),
  );
  const [showWhoCanCallDropdown, setShowWhoCanCallDropdown] = useState(false);
  const [selectedWhoCanCallOption, setSelectedWhoCanCallOption] =
    useState('All');
  const [showCustomPrivacyDropdown, setShowCustomPrivacyDropdown] =
    useState(false);
  const [selectedCustomPrivacyOption, setSelectedCustomPrivacyOption] =
    useState('View All');

  const toggleSwitch = (id: number) => {
    setSwitchStates(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderSwitchItems = (items: SwitchItem[]) => {
    return items.map(item => (
      <View key={item.id} style={styles.row}>
        <Text style={styles.text}>{item.label}</Text>
        <View>
          <Switch
            onValueChange={() => toggleSwitch(item.id)}
            value={switchStates[item.id]}
          />
        </View>
      </View>
    ));
  };

  const handleWhoCanCallOptionSelected = (option: string) => {
    setSelectedWhoCanCallOption(option);
    setShowWhoCanCallDropdown(false);
  };
  const handleCustomPrivacyOption = (option: string) => {
    setSelectedCustomPrivacyOption(option);
    setShowCustomPrivacyDropdown(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Privacy and Security</Text>
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.sectionContainer}>
          {renderSwitchItems(privacyItems)}

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setShowWhoCanCallDropdown(!showWhoCanCallDropdown)}>
            <Text style={styles.optionText}>
              Who can call me: {selectedWhoCanCallOption}
            </Text>
          </TouchableOpacity>
          {showWhoCanCallDropdown && (
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() => handleWhoCanCallOptionSelected('All')}>
                <Text style={styles.dropdownText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleWhoCanCallOptionSelected('Only Contacts')}>
                <Text style={styles.dropdownText}>Only Contacts</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* "Custom Privacy" Dropdown */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() =>
              setShowCustomPrivacyDropdown(!showCustomPrivacyDropdown)
            }>
            <Text style={styles.optionText}>
              Custom Privacy: {selectedCustomPrivacyOption}
            </Text>
          </TouchableOpacity>
          {showCustomPrivacyDropdown && (
            <View style={styles.dropdown}>
              <TouchableOpacity
                onPress={() => handleCustomPrivacyOption('View All')}>
                <Text style={styles.dropdownText}>View All</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Status Section */}
        <Text style={styles.sectionTitle}>Status</Text>
        <View style={styles.sectionContainer}>
          {renderSwitchItems(statusItems)}
        </View>

        {/* Chats Section */}
        <Text style={styles.sectionTitle}>Chats</Text>
        <View style={styles.sectionContainer}>
          {renderSwitchItems(chatItems)}
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionText}>Reset Privacy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  sectionTitle: {
    marginLeft: 26,
    marginTop: 26,
    fontSize: 16,
    color: '#848383',
    textTransform: 'uppercase',
  },
  sectionContainer: {
    backgroundColor: '#f7f7f7',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  text: {
    fontSize: 16,
  },

  optionRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Screen;
