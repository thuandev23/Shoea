import React from 'react';
import {
  Alert,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './loginscreen';

// constants
const slides = [
  {
    key: 'title1',
    text: 'We provide high quality products just for you',
    image: require('./assets/intro1_img.jpg'),
    backgroundColor: '#3B3C34',

  },
  {
    key: 'title2',
    text: 'Your satisfaction is our number one priority',
    image: require('./assets/intro2_img.jpg'),
    backgroundColor: '#3B3C34',
  },
  {
    key: 'title3',
    text: 'Lets fulfill your fashion needs with Shoea right now!',
    image: require('./assets/intro3_img.jpg'),
    backgroundColor: '#3B3C34',
  },
];

export default class IntroScreen extends React.Component {
  state = {
    showRealApp: false,
  };

  _renderItem = (item: ListRenderItemInfo<any>) => {
    return (
      <View
        style={[styles.slide, {backgroundColor: item.item.backgroundColor}]}>
        {item.item.image && (
          <Image style={styles.img_intro} source={item.item.image} />
        )}
        {item.item.text && <Text style={styles.text}>{item.item.text}</Text>}
      </View>
    );
  };
  onDone = () => {
    this.setState({showRealApp: true}, () =>
      // Hiện màn hình thông báo truốc khi và đăng nhập
      Alert.alert('Hãy đăng nhập hoặc đăng kí nào bạn của tôi ôi'),
    );
  };
  render() {
    if (this.state.showRealApp) {
      return <LoginScreen navigation={this.props.navigation}/>;
    } else {
      const dotStyle = {
        backgroundColor: 'gray',
        width: 30,
        height: 10,
        borderRadius: 5,
        // marginHorizontal: 8,
      };
      const activeDotStyle = {
        backgroundColor: 'white',
        width: 30,
        height: 10,
        borderRadius: 5,
        // marginHorizontal: 8,
      };
     
      return (
        
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this.onDone}
          dotStyle={dotStyle}
          activeDotStyle={activeDotStyle}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  img_intro: {
    height: 500,
    width: '100%',
    marginBottom:20,
    resizeMode: 'cover',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.41,
  },
 
  text: {
    color: '#ffffff',
    fontSize: 36,
    padding:25,
    textAlign: 'center',
    fontWeight:'bold',
  },
  
});
