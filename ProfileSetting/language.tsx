import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Platform,
  NativeModules,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import Modal from 'react-native-modal';
import {CommonActions} from '@react-navigation/native';
const languages = [
  {code: 'en', name: 'English'},
  {code: 'vi', name: 'Vietnamese'},
  {code: 'fr', name: 'French'},
  // Add more languages here
];

const LanguageScreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    // Get the default language of the device
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale // iOS
      : NativeModules.I18nManager.localeIdentifier, // Android
  );

  const saveSelectedLanguage = async language => {
    try {
      await AsyncStorage.setItem('selectedLanguage', language);
    } catch (error) {
      console.log('Error saving selected language: ', error);
    }
  };
  const changeLanguage = language => {
    saveSelectedLanguage(language);
    setSelectedLanguage(language);
    toggleModal();
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const restartApp = () => {
    toggleModal();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Tabs'}],
      }),
    );
    RNRestart.Restart();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Language</Text>
      {languages.map(language => (
        <TouchableOpacity
          key={language.code}
          onPress={() => changeLanguage(language.code)}
          style={[
            styles.languageButton,
            {
              backgroundColor:
                selectedLanguage === language.code ? '#2196F3' : 'white',
            },
          ]}>
          <Text
            style={[
              styles.languageName,
              {color: selectedLanguage === language.code ? 'white' : 'black'},
            ]}>
            {language.name}
          </Text>
        </TouchableOpacity>
      ))}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Image
            style={styles.image}
            source={require('../assets/img-logo/restart.png')}
          />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.buttonlogout, {backgroundColor: '#FB7366'}]}
              onPress={() => {
                restartApp();
              }}>
              <Text style={styles.buttonText}>Restart Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonlogout, {backgroundColor: '#6ADE88'}]}
              onPress={() => {
                toggleModal();
              }}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 32,
  },
  languageButton: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonlogout: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default LanguageScreen;
