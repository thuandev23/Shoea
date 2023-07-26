import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CheckItemScreen = ({navigation}) => {
  const cart = useSelector(state => state.cart.cart);
  const selectedShippingId = useSelector(
    state => state.shipping.selectedShippingId,
  );
  const selectedDiscount = useSelector(
    state => state.discounts.selectedDiscount,
  );

  const totalPrice = cart.reduce(
    (acc: number, item: {money: number; quantity: number}) =>
      acc + item.money * item.quantity,
    0,
  );

  const [text, setText] = React.useState('');
  const route = useRoute();
  const addressname = route.params?.address.name;
  const addressaddress = route.params?.address.address;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewAddressHome}>
          <Text style={[styles.texth3, styles.texth4]}> Shipping Address</Text>
          <View style={styles.btn_address}>
            <TouchableOpacity onPress={() => navigation.navigate('Address')}>
              <View>
                <Image
                  source={require('../assets/img-logo/address.png')}
                  style={styles.imgAddress}
                />
                <Text style={styles.nametxt}>
                  {addressname ||
                    'Please select the address you want to send shoes'}
                </Text>
                <Text style={styles.addresstxt}>{addressaddress}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.viewOrderList}>
          <Text style={[styles.texth3, styles.texth4]}>Order List</Text>

          <FlatList
            data={cart}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <View style={styles.view_flatlist}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="cover"
                  style={styles.image}
                />
                <View style={{position: 'absolute'}}>
                  <Text style={styles.nameItem}>{item.text}</Text>
                  <View style={{position: 'absolute', marginTop: 50}}>
                    <Text style={styles.money}>${item.money}</Text>
                  </View>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.viewChooseShipping}>
          <Text style={[styles.texth3, styles.texth4]}>Shipping: </Text>
          <Text style={[styles.texth3, styles.nameShip]}>
            {selectedShippingId && selectedShippingId.nameship
              ? selectedShippingId.nameship
              : ''}
          </Text>
          <View style={styles.btn_ship}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Choose Shipping')}>
              <Image
                source={require('../assets/img-logo/truck.png')}
                style={styles.imgship}
              />
              <Text style={styles.chooseShip}>Choose Shipping Type</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewPromoCode}>
          <Text style={[styles.texth3, styles.texth4]}>Promo Code</Text>

          <View style={styles.btn_promcode}>
            <TextInput
              style={{fontSize: 17}}
              placeholder=" Enter Promo Code"
              value={text}
              onChangeText={text => setText(text)}></TextInput>
            <TouchableOpacity
              style={styles.addPromoCode}
              onPress={() => navigation.navigate('Discount of here')}>
              <Text style={styles.textaddpromocode}>+</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.total]}>Amouunt </Text>
            <Text
              style={[styles.total, {position: 'absolute', marginLeft: 300}]}>
              {totalPrice} $
            </Text>
            <Text style={[styles.total]}>Shipping</Text>
            <Text
              style={[
                styles.total,
                {position: 'absolute', marginLeft: 300, marginTop: 45},
              ]}>
              {selectedShippingId && selectedShippingId.moneysafe
                ? selectedShippingId.moneysafe
                : ''}{' '}
              $
            </Text>
            <Text style={[styles.total]}>Promo</Text>
            <Text
              style={[
                styles.total,
                {position: 'absolute', marginLeft: 300, marginTop: 90},
              ]}>
              {selectedDiscount && selectedDiscount.percent
                ? selectedDiscount.percent
                : ''}
              %
            </Text>
            <View style={styles.line} />

            <Text style={[styles.total]}>Total</Text>
            <Text
              style={[
                styles.total,
                {position: 'absolute', marginLeft: 300, marginTop: 140},
              ]}>
              {totalPrice -
                (selectedShippingId && selectedShippingId.moneysafe
                  ? selectedShippingId.moneysafe
                  : 0) -
                (totalPrice *
                  (selectedDiscount && selectedDiscount.percent
                    ? selectedDiscount.percent
                    : 0)) /
                  100}
              $
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.viewContinue}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoadingOrderScreen')}
          style={styles.btn_order}>
          <Text style={styles.text_order}>
            Order{'     '}
            <Image
              source={require('../assets/img-logo/next.png')}
              style={{height: 30, width: 30}}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewAddressHome: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  viewOrderList: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  viewChooseShipping: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  viewPromoCode: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewContinue: {
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopColor: 'gray',
    borderTopWidth: 3,
  },
  line: {
    height: 0.5,
    marginLeft: 20,
    width: '90%',
    borderWidth: 0.15,
    margin: 3,
    borderStartColor: 'gray',
  },
  btn_address: {
    margin: 20,
    borderRadius: 35,
    height: 70,
    shadowColor: '#2343',
    borderWidth: 0.5,
    borderColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },
  texth3: {
    fontSize: 21,
    fontWeight: '500',
    color: 'black',
  },
  texth4: {
    padding: 15,
  },
  texth4_home: {
    position: 'absolute',
    marginLeft: 70,
  },
  texth4_add: {
    position: 'absolute',
    marginLeft: 75,
    marginTop: 30,
    fontSize: 17,
    padding: 10,
  },
  imgAddress: {
    height: 50,
    width: 50,
    borderRadius: 20,
    resizeMode: 'cover',
    padding: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  imgChangeAddress: {
    position: 'absolute',
    height: 20,
    width: 20,
    resizeMode: 'cover',
    padding: 20,
    marginLeft: 300,
    marginTop: 20,
  },
  view_flatlist: {
    height: 100,
    width: 380,
    marginLeft: 20,
    marginTop: 25,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },
  nameItem: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 110,
  },
  money: {
    color: 'black',
    fontSize: 18,
    marginLeft: 110,
    marginTop: 10,
  },
  quantity: {
    position: 'absolute',
    color: 'black',
    fontSize: 17,
    backgroundColor: '#2344',
    height: 40,
    width: 40,
    borderRadius: 20,
    textAlign: 'center',
    paddingTop: 9,
    marginLeft: 300,
    marginTop: 50,
  },
  chooseShip: {
    fontSize: 20,
    position: 'absolute',
    paddingTop: 10,
    paddingLeft: 60,
    fontWeight: 'bold',
  },
  btn_ship: {
    margin: 20,
    borderRadius: 20,
    height: 50,
    width: '90%',
    shadowColor: '#2343',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  imgship: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'cover',
    padding: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  nameShip: {
    color: '#367BF5',
    position: 'absolute',
    margin: 15,
    paddingLeft: 100,
  },
  btn_promcode: {
    flexDirection: 'row',
    margin: 20,
    borderRadius: 20,
    height: 50,
    width: '70%',
    shadowColor: '#2343',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  addPromoCode: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginLeft: 160,
  },
  textaddpromocode: {
    color: '#fff',
    fontSize: 25,
    paddingTop: 7,
    paddingLeft: 17,
  },
  nametxt: {
    position: 'absolute',
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 90,
    marginTop: 5,
  },
  addresstxt: {
    position: 'absolute',
    color: 'black',
    fontSize: 18,
    marginLeft: 90,
    marginTop: 40,
  },
  total: {
    color: 'black',
    fontSize: 18,
    padding: 10,
  },
  btn_order: {
    height: 50,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  text_order: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
});
