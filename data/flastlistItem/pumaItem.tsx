import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PumaItem = () => {
  const productmain = [
    {
      text: 'hello',
      star:'4.3',
      sold:'8.000 sold',
      money:'$425',
    },
    {
      text: 'hello',
    },
    {
      text: 'hello',
    },
    {
      text: 'hello',
    },
    {
      text: 'hello',
    },
    {
      text: 'hello',
    },
    {
      text: 'hello',
    },
    {
      text: 'hello',
    },
  ];
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center', margin:20,}}>Puma</Text>

      <FlatList
        data={productmain}
        numColumns={2}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              height: 220,
              width:190,
              marginLeft: 10,
              marginTop: 5,
              marginRight: 10,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              backgroundColor: '#ffffffcf',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
            }}>
            <TouchableOpacity>
              <Text>{item.text}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default PumaItem;

const styles = StyleSheet.create({});
