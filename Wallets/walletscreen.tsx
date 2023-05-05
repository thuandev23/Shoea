import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Wallet</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Image
            source={require('../assets/img-logo/plus.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Current Balance</Text>
        <Text style={styles.balanceAmount}>$2,500.00</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.transactionsTitle}>Recent Transactions</Text>
        <View style={styles.transaction}>
          <Image
            style={styles.transactionIcon}
            source={require('../assets/img-logo/card.png')}
          />
          <View>
            <Text style={styles.transactionTitle}>Payment Received</Text>
            <Text style={styles.transactionAmount}>$500.00</Text>
            <Text style={styles.transactionDate}>Apr 26, 2023</Text>
          </View>
        </View>
        <View style={styles.transaction}>
          <Image
            style={styles.transactionIcon}
            source={require('../assets/img-logo/card1.png')}
          />
          <View>
            <Text style={styles.transactionTitle}>Online Purchase</Text>
            <Text style={styles.transactionAmount}>-$100.00</Text>
            <Text style={styles.transactionDate}>Apr 25, 2023</Text>
          </View>
        </View>
        <View style={styles.transaction}>
          <Image
            style={styles.transactionIcon}
            source={require('../assets/img-logo/card2.png')}
          />
          <View>
            <Text style={styles.transactionTitle}>Payment Sent</Text>
            <Text style={styles.transactionAmount}>-$200.00</Text>
            <Text style={styles.transactionDate}>Apr 24, 2023</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    marginLeft: 15,
    padding: 5,
  },
  addBtn: {
    backgroundColor: '#1e90ff',
    padding: 8,
    borderRadius: 20,
  },
  balanceContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  balanceTitle: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  transactionsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  transactionAmount: {
    fontSize: 14,
    color: '#1e90ff',
  },
  transactionDate: {
    fontSize: 12,
    color: '#999999',
  },
});
