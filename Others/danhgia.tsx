import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Slider} from 'react-native-elements';
const ReviewScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');

  const handleNameChange = value => {
    setName(value);
  };

  const handleRatingChange = value => {
    setRating(value);
  };

  const handleCommentChange = value => {
    setComment(value);
  };

  const handleSubmit = () => {
    // handle submit logic here
    navigation.goBack();
    console.log(name, rating, comment);
  };

  return (
    <View>
      <Text>Product Name</Text>
      <TextInput value={name} onChangeText={handleNameChange} />
      <Text>Rating ({rating})</Text>
      <Slider
        value={rating}
        onValueChange={handleRatingChange}
        minimumValue={1}
        maximumValue={5}
        step={1}
      />
      <Text>Comment</Text>
      <TextInput value={comment} onChangeText={handleCommentChange} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ReviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
