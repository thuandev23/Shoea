import React from 'react';
import {
  Alert,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './loginscreen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// constants
const slides = [
  {
    key: 'title1',
    text: 'We provide high quality products just for you',
    image: require('../assets/img-logo/intro1_img.jpg'),
    backgroundColor: '#3B3C34',
  },
  {
    key: 'title2',
    text: 'Your satisfaction is our number one priority',
    image: require('../assets/img-logo/intro2_img.jpg'),
    backgroundColor: '#3B3C34',
  },
  {
    key: 'title3',
    text: 'Lets fulfill your fashion needs right now!',
    image: require('../assets/img-logo/intro3_img.jpg'),
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

  _renderSkipButton = () => {
    return (
      <View style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </View>
    );
  };

  onDone = () => {
    this.setState({showRealApp: true}, () => console.log('Start'));
  };
  onSkip = () => {
    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp) {
      return <LoginScreen navigation={this.props.navigation} />;
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
          onSkip={this.onSkip}
          dotStyle={dotStyle}
          renderSkipButton={this._renderSkipButton}
          activeDotStyle={activeDotStyle}
          showSkipButton={true}
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
    height: height * 0.6,
    width: '100%',
    marginBottom: 20,
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
    padding: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  skipButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#3B3C34',
  },
  skipButtonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '400',
  },
});
