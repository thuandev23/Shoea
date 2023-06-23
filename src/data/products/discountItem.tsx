import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {setSelectedDiscounts} from '../../screen/store/discountsReducer';

const DiscountItem = () => {
  const [Products, setProducts] = useState([]);
  const [selectedDiscountId, setSelectedDiscountId] = useState(1);
  const dispatch = useDispatch();
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
  }, []);

  const handleSelectDiscounts = (discountsData: never) => {
    setSelectedDiscountId(discountsData.id);
    dispatch(setSelectedDiscounts(discountsData));
  };

  return (
    <View style={styles.dataListItem}>
      <ScrollView>
        {Products.map(discounts => (
          <TouchableOpacity
            key={discounts.id}
            onPress={() => handleSelectDiscounts(discounts)}>
            <View style={styles.flastlist}>
              <Image
                source={{uri: discounts.image}}
                style={{height: '100%', width: '100%', borderRadius: 20}}
              />
              <Text style={styles.percent}>{discounts.percent}%</Text>
              <Text style={styles.title}>{discounts.title}</Text>
              <Text style={styles.txt}>{discounts.txt}</Text>
            </View>
          </TouchableOpacity>
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
