import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  NikeItem,
  AllItemScreen,
  AdidasItem,
  ConverseItem,
  DiscountItem,
  PumaItem,
  MoreItem,
} from '../data/products/index';
import {
  AddressScreen,
  CartScreen,
  CheckItemScreen,
  DeliverScreen,
  EditAddressScreen,
  Mainscreen,
  PushNotifyScreen,
  OrderedScreen,
  ReviewScreen,
  SearchItem,
  Shipping,
  WalletScreen,
} from '../screen/main/index';

import {
  PrivacyPolicySetting,
  Editprofile,
  HelpSetting,
  LanguageScreen,
  NotificationSettings,
  SecuritySettings,
  ProfileScreen,
} from '../screen/settting/indext';

import {
  IntroScreen,
  LoadingOrder,
  LoadingScreen,
  SplashScreen,
} from '../screen/loadding_splash/index';
import {
  LoginScreen,
  DangKiScreen,
  DangNhapScreen,
  ForgotPasswordScreen,
} from '../screen/login/index';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}) => {
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
        name="Home"
        component={Mainscreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../screen/assets/icon-button-tab/home-icon-buttom-tab.png')}
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
              source={require('../screen/assets/icon-button-tab/cart-icon-buttom-tab.png')}
              style={{width: 35, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrderedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../screen/assets/icon-button-tab/order-icon-buttom-tab.png')}
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
              source={require('../screen/assets/icon-button-tab/wallet-icon-buttom-tab.png')}
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
              source={require('../screen/assets/icon-button-tab/profile-icon-buttom-tab.png')}
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
    <SafeAreaProvider>
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
            component={DangNhapScreen}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="SignUp"
            component={DangKiScreen}
            options={{headerTitle: ''}}
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
          <Stack.Screen name="Check out" component={CheckItemScreen} />
          <Stack.Screen name="Address" component={AddressScreen} />
          <Stack.Screen name="Edit Profile" component={Editprofile} />
          <Stack.Screen name="Notification" component={NotificationSettings} />
          <Stack.Screen name="Security" component={SecuritySettings} />
          <Stack.Screen
            name="Privacy Policy"
            component={PrivacyPolicySetting}
          />
          <Stack.Screen name="Help Center" component={HelpSetting} />
          <Stack.Screen name="Edit Address" component={EditAddressScreen} />
          <Stack.Screen name="Choose Shipping" component={Shipping} />
          <Stack.Screen name="Deliver" component={DeliverScreen} />
          <Stack.Screen
            name="LoadingOrderScreen"
            component={LoadingOrder}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Language" component={LanguageScreen} />
          <Stack.Screen
            name="Forgot"
            component={ForgotPasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Evaluate" component={ReviewScreen} />
          <Stack.Screen
            name="Choose Address"
            component={EditAddressScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Search" component={SearchItem} />
          <Stack.Screen
            name="PushNotify"
            component={PushNotifyScreen}
            options={{headerTitle: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default IndexComponent;
