import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ArrayItem = {
  id: number;
  label: string;
};

const text: ArrayItem[] = [
  {id: 1, label: 'Backup App'},
  {id: 2, label: 'Restore App'},
];

const Backup = () => {
  const renderSwitchItems = (items: ArrayItem[]) => {
    return items.map(item => (
      <View key={item.id} style={styles.row}>
        <Text style={styles.text}>{item.label}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Backup and Restore</Text>
      </View>
      <ScrollView>
        <View style={styles.sectionContainer}>{renderSwitchItems(text)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Backup;

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
