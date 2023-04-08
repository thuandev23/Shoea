import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import signinscreen from './signinscreen';
import introscreen from './introscreen';
import singupscreen from './singupscreen';
import loginscreen from './loginscreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeScreenContainer} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import IntroScreen from './introscreen';
import LoginScreen from './loginscreen';
import DangNhapScreen from './signinscreen';
import DangKiScreen from './singupscreen';
import Mainscreen from '../Main/mainscreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Main/profilescreen';
import SettingScreen from '../Main/settingscreen';
import WalletScreen from '../Wallets/walletscreen';
import CartScreen from '../Cart/cartscreen';
import AllItemScreen from '../data/flastlistItem/allItem';
import DiscountItem from '../data/flastlistItem/discountItem';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: 'gray',
        tabBarInactiveBackgroundColor: '#2345',
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 10,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen name="Main" component={Mainscreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
const IndexComponent = ({navigation}) => {
  return (
    // <IntroScreen/>
    // <LoginScreen/>
    // <DangNhapScreen/>
    // <DangKiScreen/>
    // <AllItemScreen/>
    // <DiscountItem/>
    // <Mainscreen/>
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
          name="Tabs"
          component={MainTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexComponent;
