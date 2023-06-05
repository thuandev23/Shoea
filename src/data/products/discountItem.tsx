import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import dataSlide from './datalist';

const DiscountItem = () => {
  return (
    <View style={styles.dataListItem}>
      <ScrollView>
        {dataSlide.map(item => (
          <View key={item.id} style={styles.flastlist}>
            <Image
              source={{uri: item.image}}
              style={{height: '100%', width: '100%', borderRadius: 20}}
            />
            <Text style={styles.percent}>{item.percent}%</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.txt}>{item.txt}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default DiscountItem;

const styles = StyleSheet.create({
  dataListItem: {
    flex: 1,
    backgroundColor: 'white',
  },
  flastlist: {
    height: 230,
    margin: 10,
  },
  percent: {
    position: 'absolute',
    fontSize: 85,
    color: 'white',
  },
  title: {
    position: 'absolute',
    fontSize: 30,
    marginTop: 100,
    padding: 5,
    color: 'white',
  },
  txt: {
    position: 'absolute',
    fontSize: 17,
    color: 'white',
    padding: 10,
    marginTop: 180,
  },
});
