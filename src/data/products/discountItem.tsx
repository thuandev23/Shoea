import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const DiscountItem = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const snapshot = await firestore().collection('discounts').get();

        const productsData = snapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore: ', error);
      }
    };

    fetchDataFromFirestore();
    // pushProductsToFirestore('converse', productmain);
  }, []);
  return (
    <View style={styles.dataListItem}>
      <ScrollView>
        {Products.map(item => (
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
