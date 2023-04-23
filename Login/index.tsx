import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import signinscreen from './signinscreen';
import introscreen from './introscreen';
import singupscreen from './singupscreen';
import loginscreen from './loginscreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeScreenContainer} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IntroScreen from './introscreen';
import LoginScreen from './loginscreen';
import DangNhapScreen from './signinscreen';
import DangKiScreen from './singupscreen';
import Mainscreen from '../Main/mainscreen';
import ProfileScreen from '../Main/profilescreen';
import SettingScreen from '../Main/settingscreen';
import WalletScreen from '../Wallets/walletscreen';
import CartScreen from '../Cart/cartscreen';
import AllItemScreen from '../data/flastlistItem/allItem';
import DiscountItem from '../data/flastlistItem/discountItem';
import OtherScreen from '../Others/otherscreen';
import Fullname from './fullname';
import Search from '../Loading/search';
import {
  NikeItem,
  AdidasItem,
  ConverseItem,
  PumaItem,
  MoreItem,
} from '../data/flastlistItem/connect';
import Fullnamescreen from './fullname';
import CheckOutScreen from '../Cart/checkOut';
import TestAPIScreen from '../data/database/testAPI';
import AddressScreen from '../Wallets/addressscreen';
import LoadingScreen from '../Loading/loadding';
import Loading_headerMain from '../Loading/loadingscreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#F9C7F2',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          borderRadius: 10,
          marginLeft: 8,
          marginRight: 8,
        },
        tabBarStyle: [
          {
            display: 'flex',
            paddingTop: 3,
            height: 60,
            backgroundColor: '#fff',
            // borderTopColor: '#000',
          },
          null,
        ],
      }}>
      {/* I don't use icon in library so I using image */}
      <Tab.Screen
        name="Main"
        component={Mainscreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icon-button-tab/home-icon-buttom-tab.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icon-button-tab/cart-icon-buttom-tab.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OtherScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icon-button-tab/order-icon-buttom-tab.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icon-button-tab/wallet-icon-buttom-tab.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icon-button-tab/profile-icon-buttom-tab.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const IndexComponent = ({navigation}) => {
  return (
    // <IntroScreen/>
    // <LoginScreen/>
    // <DangNhapScreen/>
    // <DangKiScreen/>
    // <AllItemScreen />
    // <DiscountItem/>
    // <Loading_headerMain />
    // <Mainscreen/>
    // <Search/>
    // <Fullname />
    // <WalletScreen/>
    // <TestAPIScreen />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={signinscreen}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="SignUp"
          component={singupscreen}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="Name"
          component={Fullnamescreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={MainTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Mainscreen" component={Mainscreen} />

        <Stack.Screen name="Nike shoe all of here" component={NikeItem} />
        <Stack.Screen name="Puma shoe all of here" component={PumaItem} />
        <Stack.Screen name="Adidas shoe all of here" component={AdidasItem} />
        <Stack.Screen
          name="Converse shoe all of here"
          component={ConverseItem}
        />
        <Stack.Screen name="Discount of here" component={DiscountItem} />
        <Stack.Screen name="More" component={MoreItem} />
        <Stack.Screen name="All" component={AllItemScreen} />
        <Stack.Screen name="Check out" component={CheckOutScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexComponent;
