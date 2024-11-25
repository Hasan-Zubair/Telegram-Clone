import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

type SwitchItem = {
  id: number;
  label: string;
};

const Mods: SwitchItem[] = [
  {id: 1, label: 'Confirm before sending stickers'},
  {id: 2, label: 'Disable Forwarded'},
  {id: 3, label: 'Hide Date and Name'},
  {id: 4, label: 'Hide Chat FAB'},
  {id: 5, label: 'Hide scroll up icon'},
  {id: 6, label: 'Hide scroll down icon'},
  {id: 7, label: 'Hide the auto text icon'},
  {id: 8, label: 'Hide the translation icon'},
];

const voiceMods: SwitchItem[] = [
  {id: 9, label: 'Enable proximity sensor'},
  {id: 10, label: 'Disable output switching'},
];


const Conversation: React.FC = () => {
  const [switchStates, setSwitchStates] = useState<Record<number, boolean>>(
    [...Mods, ...voiceMods].reduce((state, item) => {
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
        <Text style={styles.headerText}>Conversation</Text>
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>Mods</Text>
        <View style={styles.sectionContainer}>{renderSwitchItems(Mods)}</View>
        <Text style={styles.sectionTitle}>Voice Notes/Audio Modes</Text>
        <View style={styles.sectionContainer}>{renderSwitchItems(voiceMods)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Conversation;

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
