import React, {Component} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Image,
} from 'react-native';

const OTPScreen = ({navigation, route}) => {
  return (
    <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
      <View style={{position: 'relative', bottom: 30}}>
        <View style={styles.loginIcon}>
          <Image
            source={require('./Img-Forgot-ResetPass/forgot-bg.png')}
            style={{width: 420, height: 320, backgroundColor: 'gray'}}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.loginLblCon}>
            <Text style={styles.loginLbl}>Enter OTP?</Text>
          </View>
          <View style={styles.forgotDes}>
            <Text style={styles.forgotDesLbl}>
              An 4 digit code has been sent to
            </Text>
            <Text style={styles.forgotDesLbl}>+91 1234567890</Text>
          </View>
          <View style={styles.formCon}>
            {/* lỗi string truyền */}
            <Pressable onPress={() => Alert.alert('resendOTP')}>
              <Text style={styles.registerLbl}>Resend OTP</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainCon: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loginIcon: {
    alignSelf: 'center',
  },
  formCon: {
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  loginLblCon: {
    position: 'relative',
    bottom: 40,
  },
  loginLbl: {
    color: '#000',
    fontSize: 50,
  },
  forgotDes: {
    position: 'relative',
    bottom: 35,
  },
  forgotDesLbl: {
    color: '#000',
    fontSize: 17,
  },
  registerLbl: {color: '#0057ff', fontSize: 17},
});

export default OTPScreen;
