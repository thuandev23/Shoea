import React, {Component} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
      {/* <View style={{padding: 20}}>
        <Pressable onPress={() => navigation.goBack()}></Pressable>
      </View> */}
      <View style={{position: 'relative', bottom: 30}}>
        <View style={styles.loginIcon}>
          <Image
            source={require('./Img-Forgot-ResetPass/forgot-bg.png')}
            style={{width: 420, height: 320, backgroundColor: 'gray'}}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.loginLblCon}>
            <Text style={styles.loginLbl}>Forgot Password?</Text>
          </View>
          <View style={styles.forgotDes}>
            <Text style={styles.forgotDesLbl}>
              Don't worry! It happens, please enter the address associated with
              your account
            </Text>
          </View>
          <View style={styles.formCon}>
            <View style={styles.textBoxCon}>
              <View style={styles.at}>
                <Image
                  source={require('./Img-Forgot-ResetPass/arroba.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
              <View style={styles.textCon}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Email ID'}
                  placeholderTextColor={'#aaa'}
                />
              </View>
            </View>
          </View>

          <View style={[styles.loginCon, {marginTop: 40}]}>
            <Pressable
              style={styles.LoginBtn}
              onPress={() => navigation.navigate('Reset')}
              // onPress={() => Alert.alert('OTP')}
            >
              <Text style={styles.loginBtnLbl}>Submit</Text>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  loginLblCon: {
    position: 'relative',
    bottom: 40,
  },
  loginLbl: {
    color: '#000',
    fontSize: 50,
    fontWeight: '500',
  },
  at: {
    alignSelf: 'center',
    width: '10%',
  },

  textBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCon: {
    width: '90%',
  },

  textInput: {
    borderBottomColor: '#aaa',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: '#000',
    fontSize: 20,
    height: 50,
  },

  LoginBtn: {
    backgroundColor: '#0057ff',
    borderRadius: 20,
  },
  loginBtnLbl: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
  },

  forgotDes: {
    position: 'relative',
    bottom: 35,
  },
  forgotDesLbl: {
    color: '#000',
    fontSize: 17,
  },
});
export default ForgotPasswordScreen;
