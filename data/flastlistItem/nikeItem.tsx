import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const NikeItem = () => {
  const productmain = [
    {
      text: 'Nike ACG Lowcate ',
      star:'4.3',
      money:'425',
      image:'https://bom.so/97BrcX'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Nike ACG Moc ',
      star:'4.1',
      money:'300',
      image:'https://bom.so/KJWlTv'
      // https://www.nike.com/vn/t/acg-moc-shoes-kLZZlk/DZ3407-300
    },
    {
      text: 'Nike Vaporfly 3 ',
      star:'4.3',
      money:'537',
      image:'https://bom.so/Ik2noZ'
      // https://www.nike.com/vn/t/oneonta-next-nature-sandals-KwxRDD/FB1948-200
    },
    {
      text: 'Nike Oneonta Next Nature',
      star:'4.1',
      money:'350',
      image:'https://bom.so/j306kA'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Nike Air Max 90 Futura',
      star:'4.6',
      money:'480',
      image:'https://bom.so/L4SCDi'
      // https://www.nike.com/vn/u/nike-air-max-90-futura-by-you-custom-shoes-10001486/9847345872
    },
    {
      text: 'Air Jordan 1 Elevate High',
      star:'4.3',
      money:'305',
      image:'https://bom.so/ubtUSJ'
      // https://www.nike.com/vn/t/air-jordan-1-elevate-high-shoes-rKPNHR/DN3253-061
    },
    {
      text: 'Zoom Freak 4',
      star:'4.3',
      money:'425',
      image:'https://bom.so/6wQFFs'
      // https://www.nike.com/vn/t/zoom-freak-4-basketball-shoes-jFdxSB/FB9503-200
    },
    {
      text: 'Nike Air Force 1 Mid',
      star:'4.3',
      money:'425',
      image:'https://bom.so/sxoS93'
      //https://www.nike.com/vn/t/air-force-1-mid-07-shoes-ZzCgrn/DV0806-101
    },
  ];
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center', margin:20,backgroundColor:'#2341', borderRadius:20}}>Nike</Text>

      <FlatList
        data={productmain}
        numColumns={2}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              height: 220,
              width:190,
              marginLeft: 10,
              marginTop: 5,
              marginRight: 10,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 5,
              backgroundColor:'#fff'
            }}>
            <TouchableOpacity>
              <Image source={{uri:item.image}} resizeMode='cover' style={styles.image}/>
              <Text style={styles.text}>{item.text}</Text>
              <View style={{flexDirection:'row', position:'absolute', marginTop:185}}>
                
              <Text style={styles.start}>{item.star}
              <Image source={require('../database/hide.png')} resizeMode='cover' style={{height:20,width:20,}}/>
              </Text>
              <Text style={styles.money}>${item.money}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        />
    </View>
  );
};

export default NikeItem;

const styles = StyleSheet.create({
  image:{
    height:130,
    width:'100%',
    // borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'pink',
    marginBottom:10,
  },
  
  text:{
    fontSize:20,
    color:'black',
    marginLeft:10,
    marginBottom:15,
    fontWeight:'bold'
  },
  start:{
    fontSize:20,
    color:'black',
    marginLeft:10,
    fontWeight:'bold'
  },
  money:{
    fontSize:20,
    color:'black',
    marginLeft:50,
    fontWeight:'bold'
  },
});
