import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

const NotificationSettings = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [textEnabled, setTextEnabled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const togglePushSwitch = () =>
    setPushEnabled(previousState => !previousState);
  const toggleEmailSwitch = () =>
    setEmailEnabled(previousState => !previousState);
  const toggleTextSwitch = () =>
    setTextEnabled(previousState => !previousState);
  const toggleSoundSwitch = () =>
    setSoundEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={pushEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={togglePushSwitch}
          value={pushEnabled}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email Notifications</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={emailEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleEmailSwitch}
          value={emailEnabled}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Text Notifications</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={textEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTextSwitch}
          value={textEnabled}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Sound</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={soundEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSoundSwitch}
          value={soundEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
});

export default NotificationSettings;
