import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const width_screen = Dimensions.get('window').width;

const card_item = width_screen - 24 * 2;

const card_size = {
  width: 325,
  height: 196,
};
const listTransations = [
  {
    type: 'Spotify',
    icon: require('../assets/img-logo/ic_spotify.png'),
    date: 'Jun 12, 12:30',
    payment: '+ $12',
  },
  {
    type: 'Paypal',
    icon: require('../assets/img-logo/ic_paypal.png'),
    date: 'Jun 12, 12:30',
    payment: '+ $12',
  },
  {
    type: 'Dribble',
    icon: require('../assets/img-logo/ic_dribble.png'),
    date: 'Jun 12, 12:30',
    payment: '+ $14',
  },
];

const renderTransactionItem = item => (
  <View key={item.type} style={styles.items}>
    <View style={styles.icon}>
      <Image source={item.icon} />
    </View>
    <View style={styles.itemBody}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <View>
      <Text style={styles.payment}>{item.payment}</Text>
    </View>
  </View>
);
const listService = [
  {
    name: 'Wallet',
    icon: require('../assets/img-logo/ic_wallet.png'),
  },
  {
    name: 'Transfer',
    icon: require('../assets/img-logo/ic_transfer.png'),
  },
  {
    name: '   Pay',
    icon: require('../assets/img-logo/ic_pay.png'),
  },
  {
    name: 'Top Up',
    icon: require('../assets/img-logo/ic_topup.png'),
  },
];
const renderServiceItem = item => {
  return (
    <View key={item.name} style={styles.items}>
      <View style={styles.icon}>
        <Image source={item.icon} />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};
const WalletScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeaderCart}>
        <Image
          source={require('../assets/img-logo/logo.jpg')}
          style={styles.imagelogo}
        />
        <Text
          style={{fontSize: 30, color: 'black', marginLeft: 20, marginTop: 15}}>
          My Wallet
        </Text>
      </View>
      <ImageBackground
        source={require('../assets/img-logo/card_visa_bg.png')}
        style={styles.card}>
        <View style={styles.cardIcon}>
          <Image source={require('../assets/img-logo/card_icon.png')} />
        </View>
        <View style={styles.cardNumber}>
          <Text style={styles.cardNumberText}>{`1234 5678 1234 5678`}</Text>
        </View>
        <View style={styles.cardFooter}>
          <View>
            <Text style={styles.cardHolderName}>Card holder</Text>
            <Text style={styles.cardName}>Nguyen Van A</Text>
          </View>
          <Image source={require('../assets/img-logo/visa_text.png')} />
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.title1}>Service</Text>
        <View style={styles.list1}>{listService.map(renderServiceItem)}</View>
      </View>
      <Text style={styles.title}>Recent Transaction</Text>
      <View style={styles.list}>
        {listTransations.map(renderTransactionItem)}
      </View>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  viewHeaderCart: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  imagelogo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 15,
    marginLeft: 5,
  },
  card: {
    width: card_item,
    height: (card_item * card_size.height) / card_size.width,
    padding: 24,
    marginLeft: '5%',
  },
  cardNumber: {
    flex: 1,
    justifyContent: 'center',
  },
  cardNumberText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  cardHolderName: {
    color: 'rgba(255,255,255,0.4)',
  },
  cardName: {
    color: 'white',
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 10,
    marginTop: 30,
  },
  container: {
    backgroundColor: '#F2FCF1',
  },
  items: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    padding: 10,
    backgroundColor: 'white',
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {height: 10, width: 2},
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  itemBody: {
    flex: 1,
    paddingLeft: 14,
  },

  type: {
    fontWeight: '500',
    fontSize: 16,
  },

  date: {
    marginTop: 5,
  },

  payment: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 40,
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 10,
  },
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    position: 'absolute',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '500',
    marginLeft: 10,
  },
});
