import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {Slider} from 'react-native-elements';
import {firebase} from '@react-native-firebase/auth';

const ReviewScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from Firestore
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('reviews')
      .onSnapshot(snapshot => {
        const reviewsData = snapshot.docs.map(doc => doc.data());
        setReviews(reviewsData);
      });

    return () => unsubscribe();
  }, []);

  const handleNameChange = (value: React.SetStateAction<string>) => {
    setName(value);
  };

  const handleRatingChange = (value: React.SetStateAction<number>) => {
    setRating(value);
  };

  const handleCommentChange = (value: React.SetStateAction<string>) => {
    setComment(value);
  };

  const handleSubmit = () => {
    // Save review to Firestore
    firebase
      .firestore()
      .collection('reviews')
      .add({
        name,
        rating,
        comment,
      })
      .then(() => {
        Alert.alert('Notify', 'Review saved successfully');
      })
      .catch(error => {
        console.error('Error saving review:', error);
      });
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
        step={0.1}
      />
      <Text>Comment</Text>
      <TextInput value={comment} onChangeText={handleCommentChange} />
      <Button title="Submit" onPress={handleSubmit} />

      <Text>Product Reviews:</Text>
      {reviews.map((review, index) => (
        <View key={index}>
          <Text>Name: {review.name}</Text>
          <Text>Rating: {review.rating}</Text>
          <Text>Comment: {review.comment}</Text>
          <Text>--------------------------</Text>
        </View>
      ))}
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
