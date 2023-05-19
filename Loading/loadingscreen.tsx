import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Loading_headerMain = () => {
  return (
    <View>
      <ImageBackground
        style={styles.imgbackground}
        source={require('../assets/img-logo/intro_6.jpg')}
        resizeMode="cover">
        <LinearGradient
          colors={['#fff00000', '#234140cf']}
          style={{height: '100%', width: '100%'}}
          start={{x: 0.5, y: 0}}
          end={{x: 1, y: 1}}>
          <View style={styles.text}>
            <Text style={{fontSize: 45, color: 'white'}}>Wellcome to </Text>
            <Image
              source={require('../assets/img-logo/wave-hand.png')}
              style={styles.icon}
            />
            <Text style={{fontSize: 80, color: 'white'}}>Shoea</Text>
            <Text style={{fontSize: 20, color: 'white', marginTop: 20}}>
              The best sneakers & shoes e-commerce app of the century for your
              fashion needs{' '}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imgbackground: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  text: {
    marginTop: height * 0.5,
    marginLeft: 30,
  },
  icon: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 50,
    width: 50,
    marginLeft: 250,
    margin: 5,
  },
});

export default Loading_headerMain;
