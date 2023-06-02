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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const tabs = ['All', 'Nike', 'Adidas', 'Puma', 'Converse'];
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
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

  const [userName, setUserName] = useState('');
  // Lấy tên người dùng từ Firestore
  const getUserNameFromFirestore = async () => {
    try {
      const currentUser = auth().currentUser;
      const userRef = firestore().collection('users').doc(currentUser.uid);
      const snapshot = await userRef.get();

      if (snapshot.exists) {
        const userData = snapshot.data();
        const uName = userData.name; // Thay 'name' bằng trường tên người dùng trong Firestore của bạn
        return uName;
      } else {
        return null; // Người dùng không tồn tại trong Firestore
      }
    } catch (error) {
      console.log('Lỗi khi lấy tên người dùng từ Firestore:', error);
      return null;
    }
  };

  // Sử dụng hàm để lấy tên người dùng
  const fetchUserName = async () => {
    const MName = await getUserNameFromFirestore();
    if (MName) {
      // console.log('Tên người dùng:', MName);
      // Thực hiện các xử lý khác với tên người dùng
      setUserName(MName);
    } else {
      console.log('Người dùng không tồn tại trong Firestore');
    }
  };
  const [unreadCount, setUnreadCount] = useState<number>(0);
  useEffect(() => {
    fetchUserName();
    const unsubscribe = firestore()
      .collection('notifications')
      .where('read', '==', false)
      .onSnapshot(querySnapshot => {
        setUnreadCount(querySnapshot.size);
      });
    return unsubscribe;
  });

  // Avatar
  const [profileImage, setProfileImage] = useState(null);
  const getAvatarFromFirestore = async () => {
    try {
      const currentUser = auth().currentUser;
      const userRef = firestore().collection('users').doc(currentUser.uid);
      const snapshot = await userRef.get();

      if (snapshot.exists) {
        const userData = snapshot.data();
        const avatarUrl = userData.avatar; // Thay 'avatar' bằng trường chứa URL ảnh avatar trong Firestore của bạn
        return avatarUrl;
      } else {
        return null; // Người dùng không tồn tại trong Firestore
      }
    } catch (error) {
      console.log('Lỗi khi lấy avatar từ Firestore:', error);
      return null;
    }
  };
  const fetchAvatarUrl = async () => {
    const avatarUrl = await getAvatarFromFirestore();
    if (avatarUrl) {
      setProfileImage(avatarUrl);
    }
  };

  useEffect(() => {
    fetchAvatarUrl();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={
              profileImage
                ? {uri: profileImage}
                : require('../assets/img-logo/meme1.jpg')
            }
            resizeMode="cover"
            style={styles.avatar}
          />

          <Text style={styles.headerText}>Wellcome Back</Text>
          <Text style={styles.headerName}>{userName}</Text>

          {/* Thông báo  */}
          <View style={styles.headerImage}>
            <TouchableOpacity onPress={() => navigation.navigate('PushNotify')}>
              <Image
                style={{height: 35, width: 35, marginLeft: 40}}
                source={require('../assets/img-logo/notice.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Text style={styles.notifi}>{unreadCount}</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff',
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
    fontSize: 18,
    padding: 15,
    marginLeft: 80,
    color: '#2349',
  },
  notifi: {
    position: 'absolute',
    fontSize: 20,
    color: 'red',
    width: 26,
    height: 26,
    fontWeight: 'bold',
    borderRadius: 13,
    backgroundColor: 'white',
    marginTop: -(h * 0.02),
    marginLeft: w * 0.15,
  },
  headerName: {
    position: 'absolute',
    marginLeft: 85,
    color: 'black',
    fontSize: 22,
    marginTop: h * 0.05,
    fontWeight: '500',
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
    // backgroundColor: 'red',
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
