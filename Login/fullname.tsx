import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

import Swiper from 'react-native-swiper';
import dataSlide from '../data/flastlistItem/datalist';


const fullname = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
       
        <View style={styles.dataListItem}>
          <Swiper autoplay={true} autoplayTimeout={3} horizontal={true}>
            {dataSlide.map(item => (
              <View key={item.id}>
                <Image
                  source={{uri: item.image}}
                  style={{height: '100%', width: '100%',}}
                />
                <Text style={styles.percent}>{item.percent}%</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.txt}>{item.txt}</Text>
              </View>
            ))}
          </Swiper>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2FCF1',
  },
  header: {
    marginTop: 5,
    width: '100%',
    padding: 10,
  },
  dataListItem: {
    height: 360,
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

export default fullname;
