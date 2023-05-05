import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OtherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OtherScreen</Text>
    </View>
  );
};

export default OtherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2341',
  },
});
