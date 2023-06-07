import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SecuritySettings = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [faceId, setFaceId] = useState(false);
  const [password, setPassword] = useState('');

  const toggleRememberMe = () => setRememberMe(prevState => !prevState);
  const toggleFaceId = () => setFaceId(prevState => !prevState);

  const handlePasswordChange = (password: React.SetStateAction<string>) =>
    setPassword(password);

  const handlePasswordSubmit = () => {
    // Submit the new password to the server
    console.log(`New password: ${password}`);
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Security Settings</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Remember Me</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={rememberMe ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleRememberMe}
          value={rememberMe}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Face ID</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={faceId ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleFaceId}
          value={faceId}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Change Password</Text>
        <TouchableOpacity onPress={handlePasswordSubmit}></TouchableOpacity>
      </View>
      <View style={styles.passwordSection}>
        <Text style={styles.passwordLabel}>New Password:</Text>
        <TextInput
          style={styles.passwordInput}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
          placeholder="Enter new password"
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
  section: {
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
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  passwordLabel: {
    fontSize: 18,
    marginRight: 8,
  },
  passwordInput: {
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 15,
  },
});

export default SecuritySettings;
