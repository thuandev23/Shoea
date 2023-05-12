import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AllItemScreen,
  NikeItem,
  AdidasItem,
  ConverseItem,
  PumaItem,
} from '../data/flastlistItem/connect';
import Swiper from 'react-native-swiper';
import dataSlide from '../data/flastlistItem/datalist';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const tabs = ['All', 'Nike', 'Adidas', 'Puma', 'Converse'];
const w = Dimensions.get('screen').width;

const Mainscreen = ({navigation}) => {
  const [selected, setSelected] = useState(0);

  const onScroll = ({nativeEvent}) => {
    const index = Math.round(nativeEvent.contentOffset.x / (w - 20));
    setSelected(index);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleSeeClick = () => {
    setIsClicked(true);
  };

  // Get avatar
  // Get name
  const route = useRoute();
  // console.log(route.params?.ten);
  const [ten, setTen] = useState('');
  useEffect(() => {
    getAccounts();
    // getName();
  }, []);

  const getAccounts = async () => {
    try {
      const existingAccounts = await AsyncStorage.getItem('ACCOUNTS');
      if (existingAccounts !== null) {
        const accountList = JSON.parse(existingAccounts);
        const currentUserEmail = await AsyncStorage.getItem('EMAIL');
        const matchingAccount = accountList.find(account => {
          return account.email === currentUserEmail;
        });
        if (matchingAccount) {
          setTen(matchingAccount.name);
        }
      }
    } catch (e) {
      console.log('Error getting accounts:', e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/img-logo/logo.jpg')}
            resizeMode="cover"
            style={styles.avatar}
          />

          <Text style={styles.headerText}>Wellcome Back</Text>
          <Text style={styles.headerName}>{ten || 'Admin'}</Text>
          <View style={styles.headerImage}>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('Lỗi thư viện react-native-cli với firebase')
              }>
              <Image
                style={{height: 35, width: 35, marginLeft: 40}}
                source={require('../assets/img-logo/notice.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search */}
        <View style={styles.search}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={styles.btnSearch}
              source={require('../assets/img-logo/search_icon.png')}
              resizeMode="cover"
            />
            <Text style={{margin: 12, fontSize: 18, marginLeft: 50}}>
              Click here to Search
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerSlider}>
          <Text style={styles.textSlider1}>Special Offers</Text>
          <TouchableOpacity
            onPressIn={handleSeeClick}
            onPress={() => navigation.navigate('Discount of here')}>
            <Text style={[styles.textSlider2, isClicked && {color: '#0B6E27'}]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dataListItem}>
          <Swiper autoplay={true} autoplayTimeout={3} horizontal={true}>
            {dataSlide.map(item => (
              <View key={item.id} style={styles.flastlist}>
                <Image
                  source={{uri: item.image}}
                  style={{height: '100%', width: '100%', borderRadius: 20}}
                />
                <Text style={styles.percent}>{item.percent}%</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.txt}>{item.txt}</Text>
              </View>
            ))}
          </Swiper>
        </View>

        {/* <Text style={{fontSize: 23, margin: 5, color: 'black'}}>
          Types of shoes
        </Text> */}
        <View style={styles.typeShoe}>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('Nike shoe all of here')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/nike.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Nike
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('Puma shoe all of here')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/puma.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Puma
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('Adidas shoe all of here')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/adidas.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Adidas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('More')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/asics.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Asics
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.typeShoe}>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('More')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/reebok.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Reebok
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('More')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/nb.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              New Ba...
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('Converse shoe all of here')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/converse.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              Converse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnTypes}
            onPress={() => navigation.navigate('All')}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/img-type-shoe/more.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize: 15, color: '#000'}}>
              More
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 23, margin: 10, color: 'black'}}>
          Most Popular
        </Text>
        <View style={styles.viewPopular}>
          <View style={styles.popular}>
            {tabs.map((e, i) => (
              <Pressable key={e} onPress={() => setSelected(i)}>
                <Text
                  style={[
                    styles.tabsText,
                    selected == i && {color: 'white', backgroundColor: 'black'},
                  ]}>
                  {e}
                </Text>
                {/* {selected == i && <View style={styles.lines} />} */}
              </Pressable>
            ))}
          </View>
          <FlatList
            horizontal
            pagingEnabled
            snapToAlignment="center"
            decelerationRate={'fast'}
            onScroll={onScroll}
            data={[
              {key: '1', screen: <AllItemScreen />},
              {key: '2', screen: <NikeItem />},
              {key: '3', screen: <AdidasItem />},
              {key: '4', screen: <PumaItem />},
              {key: '5', screen: <ConverseItem />},
            ]}
            keyExtractor={item => item.key}
            renderItem={({item}) => item.screen}
            initialScrollIndex={selected}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F2FCF1',
  },
  header: {
    marginTop: 5,
    width: '100%',
    padding: 10,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  headerText: {
    position: 'absolute',
    fontSize: 17,
    padding: 15,
    marginLeft: 80,
    color: '#2349',
  },
  headerName: {
    position: 'absolute',
    marginLeft: 85,
    color: 'black',
    fontSize: 25,
    marginTop: 50,
    fontWeight: '600',
  },
  headerImage: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: '80%',
    marginTop: 20,
  },
  search: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#E1ECEC',
    marginTop: 10,
    borderRadius: 15,
  },

  btnSearch: {
    // margin:15,
    height: 20,
    width: 20,
    marginTop: 15,
    marginLeft: 17,
    position: 'absolute',
    aspectRatio: 1,
  },

  slider: {
    height: 180,
    width: '93%',
    backgroundColor: '#2341',
    borderRadius: 35,
    justifyContent: 'center',
    marginTop: 10,
  },
  headerSlider: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textSlider1: {
    marginRight: 50,
    fontSize: 19,
    color: 'black',
  },
  textSlider2: {
    marginLeft: 150,
    fontSize: 19,
    color: 'black',
  },
  typeShoe: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  btnTypes: {
    margin: -10,
  },
  imgTypes: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  viewPopular: {
    // backgroundColor: 'gray',
  },
  popular: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  tabsText: {
    fontSize: 22,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    textAlign: 'center',
  },
  lines: {
    // width: 50,
    // height: 2,
    // backgroundColor: 'black',
    // alignSelf: 'center',
  },

  dataListItem: {
    height: 260,
  },
  flastlist: {
    height: 230,
    margin: 10,
  },
  percent: {
    position: 'absolute',
    fontSize: 85,
    color: 'white',
  },
  title: {
    position: 'absolute',
    fontSize: 30,
    marginTop: 100,
    padding: 5,
    color: 'white',
  },
  txt: {
    position: 'absolute',
    fontSize: 17,
    color: 'white',
    padding: 10,
    marginTop: 180,
  },
});

export default Mainscreen;
