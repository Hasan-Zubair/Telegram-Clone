import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../assets/images';

type SwitchItem = {
  id: number;
  label: string;
  icon?: ImageSourcePropType;
};

const Video: SwitchItem[] = [{id: 1, label: 'Enable video player'}];

const Media: SwitchItem[] = [
  {id: 1, label: 'Photos', icon: Images.photo},
  {id: 2, label: 'Videos', icon: Images.video},
  {id: 2, label: 'Gifs', icon: Images.GIF},
];

const Help: SwitchItem[] = [{id: 1, label: 'Reset', icon: Images.reset}];

const MediaSettings = () => {
  const [switchStates, setSwitchStates] = useState<Record<number, boolean>>(
    [...Video, ...Media].reduce((state, item) => {
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
        <View style={styles.iconLabelContainer}>
          {item.icon && <Image source={item.icon} style={styles.icon} />}
          <Text style={styles.text}>{item.label}</Text>
        </View>
        <Switch
          onValueChange={() => toggleSwitch(item.id)}
          value={switchStates[item.id]}
        />
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conversation</Text>
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>Video Player</Text>
        <View style={styles.sectionContainer}>{renderSwitchItems(Video)}</View>
        <Text style={styles.sectionTitle}>Media, Links and Docs</Text>
        <View style={styles.sectionContainer}>{renderSwitchItems(Media)}</View>
        <Text style={styles.sectionTitle}>Help</Text>
        <View style={styles.sectionContainer}>{renderSwitchItems(Help)}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MediaSettings;

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
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  iconLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
