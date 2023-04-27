import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const HelpSetting = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'How do I create an account?',
      answer:
        'To create an account, go to our website and click the "Sign Up" button on the top right corner. Fill out the required information and click "Create Account."',
    },
    {
      id: 2,
      question: 'How do I reset my password?',
      answer:
        'To reset your password, click on the "Forgot Password" button on the login page. Follow the instructions provided to reset your password.',
    },
    {
      id: 3,
      question: 'What forms of payment do you accept?',
      answer:
        'We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal.',
    },
    {
      id: 4,
      question: 'How do I cancel my subscription?',
      answer:
        'To cancel your subscription, go to the "My Account" page and click on the "Subscription" tab. Click on "Cancel Subscription" and follow the instructions provided.',
    },
  ]);

  const renderQuestions = () => {
    return questions.map(item => {
      return (
        <View style={styles.questionContainer} key={item.id}>
          <Text style={styles.questionText}>{item.question}</Text>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {renderQuestions()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answerText: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default HelpSetting;
