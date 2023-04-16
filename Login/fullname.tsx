import {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Fullnamescreen = ({navigation}) => {
  const [firstname, setName] = useState('');
  const [isPulsing, setIsPulsing] = useState(false);

  const handlePressIn = () => {
    setIsPulsing(true);
  };

  const handlePressOut = () => {
    setIsPulsing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Full name</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={firstname}
          onChangeText={setName}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Tabs', {firstname: 'John'});
          }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.7}
          style={[styles.button, isPulsing && styles.pulsing]}>
          <View style={styles.innerButton} />

          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#399',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  innerButton: {
    backgroundColor: '#fff',
  },
  pulsing: {
    transform: [{scale: 1.2}],
  },
});

export default Fullnamescreen;
