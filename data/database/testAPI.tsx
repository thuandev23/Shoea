import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.3.2:3000/products')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })

      .catch(error => console.error(error));
  }, []);

  const renderItem = ({item}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
      <Text style={{fontSize: 25}}>{item.text}</Text>
      <Text style={{fontSize: 25}}>{item.star}</Text>
      <Text style={{fontSize: 25}}>{item.money}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
}
