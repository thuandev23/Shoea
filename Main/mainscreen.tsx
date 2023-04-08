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
import React, {useRef, useState} from 'react';
import DiscountItem from '../data/flastlistItem/discountItem';
import {
  AllItemScreen,
  NikeItem,
  AdidasItem,
  ConverseItem,
  PumaItem,
} from '../data/flastlistItem/connect';
import Swiper from 'react-native-swiper';
import dataSlide from '../data/flastlistItem/datalist';
const tabs = ['All', 'Nike', 'Adidas', 'Puma', 'Converse'];
const w = Dimensions.get('screen').width;

const Mainscreen = () => {
  const [selected, setSelected] = useState(0);
  const onScroll = ({nativeEvent}) => {
    const index = Math.round(nativeEvent.contentOffset.x / (w - 20));
    setSelected(index);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleSeeClick = () => {
    setIsClicked(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/logo.jpg')}
            resizeMode="cover"
            style={styles.avatar}
          />
          <Text style={styles.headerText}>Wellcome Back</Text>
          <Text style={styles.headerName}>thuandevnguyen</Text>
          <View style={styles.headerImage}>
            <TouchableOpacity>
              <Image
                style={{height: 35, width: 35, marginLeft: 10}}
                source={require('../assets/notice.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{height: 35, width: 35, marginLeft: 10}}
                source={require('../assets/heart.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
          <Image
            style={styles.btnSearch}
            source={require('../assets/search_icon.png')}
            resizeMode="cover"
          />
          <TextInput
            style={styles.inputSearch}
            placeholder="Enter a keyworld u want search"
          />
        </View>
        <View style={styles.headerSlider}>
          <Text style={styles.textSlider1}>Special Offers</Text>
          <TouchableOpacity onPressIn={handleSeeClick} onPress={() => Alert.alert('sê all')}>
            <Text style={[styles.textSlider2, isClicked && {color: '#0B6E27'}]}>See All</Text>
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
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/nike.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>Nike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/puma.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>Puma</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/adidas.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>Adidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/asics.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>Asics</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.typeShoe}>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/reebok.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>Reebok</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/nb.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>New Ba...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/converse.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>Converse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTypes}>
            <Image
              style={styles.imgTypes}
              source={require('../assets/more.png')}
              resizeMode="cover"
            />
            <Text style={{textAlign: 'center', fontSize:15,color:'#0B6E27'}}>More</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 23, margin: 10, color: 'black'}}>
          Most Popular
        </Text>
        <View style={styles.viewPopular}>
          <View style={styles.popular}>
            {tabs.map((e, i) => (
              <Pressable onPress={() => setSelected(i)}>
                <Text
                  style={[styles.tabsText, selected == i && {color: 'white', backgroundColor:'black'}]}>
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
    backgroundColor:'#F2FCF1'
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
    fontWeight: 'bold',
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
  inputSearch: {
    marginLeft: 40,
    fontSize: 18,
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
  },
  btnTypes: {
    margin: -10,
  },
  imgTypes: {
    height: 60,
    width: 60,
    borderRadius: 30,
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
    borderColor:'black',
    borderWidth:1,
    borderRadius:20,
    padding:5,
    textAlign:'center',
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
