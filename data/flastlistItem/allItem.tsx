import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const AllItemScreen = () => {
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
      text: 'Nike ACG Lowcate ',
      star:'4.5',
      money:'537',
      image:'https://bom.so/Ik2noZ'
      // https://www.nike.com/vn/t/vaporfly-3-road-racing-shoes-wdmHPR/DV4130-600
    },
    {
      text: 'Nike ACG Lowcate ',
      star:'4.3',
      money:'425',
      image:'https://bom.so/97BrcX'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Nike ACG Lowcate ',
      star:'4.3',
      money:'425',
      image:'https://bom.so/97BrcX'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Nike ACG Lowcate ',
      star:'4.3',
      money:'425',
      image:'https://bom.so/97BrcX'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Nike ACG Lowcate ',
      star:'4.3',
      money:'425',
      image:'https://bom.so/97BrcX'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Nike ACG Lowcate ',
      star:'4.3',
      money:'425',
      image:'https://bom.so/97BrcX'
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
  ];
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'center', margin:20,}}>All Product</Text>

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

export default AllItemScreen;

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
