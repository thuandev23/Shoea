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
import {
  Editprofile,
  NotificationSetting,
  SecuritySetting,
  PrivacyPolicySetting,
  HelpSetting,
} from '../ProfileSetting/inport';
import Fullnamescreen from './fullname';
import CheckOutScreen from '../Cart/checkOut';
import TestAPIScreen from '../data/database/testAPI';
import AddressScreen from '../Wallets/addressscreen';
import LoadingScreen from '../Loading/loadding';
import Loading_headerMain from '../Loading/loadingscreen';
import ShowAleartBeutyfull from '../Loading/showAleart';
import EditAddress from '../Wallets/editaddress';
import {DataProvider} from '../data/database/context';
import Shipping from '../Wallets/shipping';
import OrderDeliver from '../Others/orderDeliver';
import LoadingOrder from '../Others/loadingorder';
import LanguageScreen from '../ProfileSetting/language';
import AuthLoginScreen from '../ProfileSetting/AuthLogin';
import ForgotPasswordScreen from './Forgot&ResetPass/ForgotPassword';
import ResetPasswordScreen from './Forgot&ResetPass/ResetPass';
import OTPScreen from './Forgot&ResetPass/EnterOTP';
import ReviewScreen from '../Others/danhgia';
import EditAddressScreen from '../Wallets/editaddress';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#ADB2C5cf',
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
        name="Setting"
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
    // <LoadingScreen />
    // <Mainscreen/>
    // <Search/>
    // <Fullname />
    // <WalletScreen/>
    // <ForgotPasswordScreen />
    // <OTPScreen />
    // <ResetPasswordScreen />
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

        <Stack.Screen name="Edit Profile" component={Editprofile} />
        <Stack.Screen name="Notification" component={NotificationSetting} />
        <Stack.Screen name="Security" component={SecuritySetting} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicySetting} />
        <Stack.Screen name="Help Center" component={HelpSetting} />
        <Stack.Screen name="Edit Address" component={EditAddress} />
        <Stack.Screen name="Choose Shipping" component={Shipping} />
        <Stack.Screen name="Deliver" component={OrderDeliver} />
        <Stack.Screen
          name="LoadingOrderScreen"
          component={LoadingOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Manager Accout" component={AuthLoginScreen} />
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reset"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Evaluate"
          component={ReviewScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Choose Address"
          component={EditAddressScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexComponent;
