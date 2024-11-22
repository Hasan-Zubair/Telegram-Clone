import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

type SwitchItem = {id: number; label: string};

const Toast: SwitchItem[] = [
  {id: 1, label: 'Disable contact online toast'},
  {id: 2, label: 'Viewed Story toast'},
  {id: 3, label: 'contact profile opc change toast'},
  {id: 4, label: 'typing-recording toast'},
];

const Notifications = () => {
  const [switchStates, setSwitchStates] = useState<Record<number, boolean>>(
    [...Toast].reduce((state, item) => {
      state[item.id] = false;
      return state;
    }, {} as Record<number, boolean>),
  );
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

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>Toast</Text>
        <View style={styles.sectionContainer}>{renderSwitchItems(Toast)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

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
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
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
});
