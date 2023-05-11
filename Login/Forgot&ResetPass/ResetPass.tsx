import React, {Component} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const ResetPasswordScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="position" style={styles.mainCon}>
      <View style={{position: 'relative', bottom: 30}}>
        <View style={styles.loginIcon}>
          <Image
            source={require('./Img-Forgot-ResetPass/reset.png')}
            style={{width: 420, height: 297}}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.loginLblCon}>
            <Text style={styles.loginLbl}>Reset Password</Text>
          </View>
          <View style={styles.formCon}>
            <View style={[styles.textBoxCon]}>
              <View style={styles.at}>
                <Image
                  source={require('./Img-Forgot-ResetPass/security.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={[styles.passCon]}>
                <View style={styles.textCon}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'New Password'}
                    placeholderTextColor={'#aaa'}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.show}>
                  <Image
                    source={require('./Img-Forgot-ResetPass/showpass.png')}
                    style={{width: 30, height: 30}}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.textBoxCon, {marginTop: 30}]}>
              <View style={styles.at}>
                <Image
                  source={require('./Img-Forgot-ResetPass/security.png')}
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={[styles.passCon]}>
                <View style={styles.textCon}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'#aaa'}
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.show}>
                  <Image
                    source={require('./Img-Forgot-ResetPass/showpass.png')}
                    style={{width: 30, height: 30}}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.loginCon, {marginTop: 30}]}>
            <Pressable
              style={styles.LoginBtn}
              onPress={() => [
                navigation.navigate('SignIn'),
                Alert.alert('Reset password succes !'),
              ]}>
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
  },
  loginLblCon: {
    position: 'relative',
    bottom: 40,
  },
  loginLbl: {
    color: '#000',
    fontSize: 60,
    fontWeight: '500',
  },
  at: {
    alignSelf: 'center',
    width: '10%',
  },
  show: {
    alignSelf: 'center',
    width: '10%',
    position: 'relative',
    right: 20,
    zIndex: 10,
  },
  textBoxCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCon: {
    width: '90%',
  },
  passCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  forgotAction: {
    paddingVertical: 20,
  },
  registerCon: {flexDirection: 'row', justifyContent: 'center', paddingTop: 10},
  registerLbl: {color: '#0057ff'},
  registerNew: {
    color: '#aaa',
  },
  forgotLbl: {
    color: '#0057ff',
    textAlign: 'right',
  },
  LoginBtn: {
    backgroundColor: '#0057ff',
    borderRadius: 20,
  },
  loginBtnLbl: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    paddingVertical: 10,
  },
  devider: {
    borderBottomColor: '#aaa',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
  },
  or: {
    color: '#aaa',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 60,
    alignSelf: 'center',

    position: 'relative',
    bottom: 13,
  },
  deviderCon: {
    paddingVertical: 10,
  },
  googleIconCon: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  googleLbl: {
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
export default ResetPasswordScreen;
