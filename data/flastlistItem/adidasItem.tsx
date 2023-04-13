import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ViewMoreText from 'react-native-view-more-text';
const AdidasItem = () => {
  const productmain = [
    {
      text: 'Advantage',
      star: '4.3',
      money: '230',
      image: 'https://bom.so/JRiyWu',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-advantage/GZ5300.html
    },
    {
      text: 'Ultraboots 4.0 DNA',
      star: '4.5',
      money: '475',
      image: 'https://bom.so/r2H8gM',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-ultraboost-4.0-dna/FY9120.html
    },
    {
      text: 'Adizero Adios Pro 2.0',
      star: '4.5',
      money: '537',
      image: 'https://bom.so/9QhgQv',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      // https://www.adidas.com.vn/vi/gi%C3%A0y-adizero-adios-pro-2.0/FZ2477.html
    },
    {
      text: 'Racer TR21',
      star: '4.4',
      money: '550',
      image: 'https://bom.so/NA2cj8',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-racer-tr21/H00654.html
    },
    {
      text: 'Supernova',
      star: '4.7',
      money: '580',
      image: 'https://bom.so/elx7zh',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-supernova/S42722.html
    },
    {
      text: 'ZG21 Motion Primegreen BOA',
      star: '4.3',
      money: '440',
      image: 'https://bom.so/OiIxeH',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-golf-c%E1%BB%95-l%E1%BB%ADng-zg21-motion-primegreen-boa/G58741.html
    },
    {
      text: 'Continental 80',
      star: '4.2',
      money: '460',
      image: 'https://bom.so/bZsihr',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-continental-80/G27706.html
    },
    {
      text: 'Adifom SLTN',
      star: '4.8',
      money: '605',
      image: 'https://bom.so/cMMxkn',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-adifom-sltn/HP6481.html
    },
  ];
 
  const [selectedProduct, setSelectedProduct] = useState(null); // state để lưu thông tin sản phẩm được click
  const [modalVisible, setModalVisible] = useState(false); // state để điều khiển hiển thị modal

  const handleItemClick = item => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const _renderViewMore = onPress => {
    return (
      <Text onPress={onPress} style={{color: 'black'}}>
        View more
      </Text>
    );
  };

  const _renderViewLess = onPress => {
    return (
      <Text onPress={onPress} style={{color: 'black'}}>
        View less
      </Text>
    );
  };

  return (
    <View >
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          margin: 20,
          backgroundColor: '#2341',
          borderRadius: 20,
        }}>
          Adidas
      </Text>
      <FlatList
        data={productmain}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={styles.view_flatlist}>
            <TouchableOpacity onPress={() => handleItemClick(item)}>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={styles.image}
              />
              <Text style={styles.text}>{item.text}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  marginTop: 185,
                }}>
                <Text style={styles.start}>{item.star}</Text>
                <Text style={styles.money}>${item.money}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Item */}
      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}>
          <TouchableOpacity
            onPress={closeModal}
            style={{paddingTop: 40, backgroundColor: '#2342'}}>
            <Image
              source={require('../database/checkerror.png')}
              style={styles.close}
            />
          </TouchableOpacity>

          <ScrollView>
            <View
              style={{flex: 1, alignItems: 'center', backgroundColor: '#2342'}}>
              <Image
                source={{uri: selectedProduct.image}}
                style={styles.img_main}
              />
              <Text style={styles.text_main}>{selectedProduct.text}</Text>
              <View style={{marginLeft: 20}}>
                <Text style={{marginRight: 250, fontSize: 18, color: 'black'}}>
                  Rate: {selectedProduct.star}
                </Text>

                <View style={{borderWidth: 0.4, width: 400, height: 1}} />

                <ViewMoreText
                  numberOfLines={3}
                  renderViewLess={_renderViewLess}
                  renderViewMore={_renderViewMore}>
                  <Text
                    style={{
                      marginRight: 250,
                      fontSize: 18,
                      marginLeft: 100,
                      color: 'black',
                    }}>
                    Description:{' '}
                  </Text>
                  <Text
                    style={{
                      marginRight: 250,
                      fontSize: 18,
                      marginLeft: 100,
                      color: '#179',
                    }}>
                    {'\n'}
                    {selectedProduct.description}
                  </Text>
                </ViewMoreText>

                <Text style={{fontSize: 18, color: 'black'}}>
                  ColourShown:{' '}
                </Text>
                <Text style={styles.alltext}>
                  {selectedProduct.ColourShown}
                </Text>
                <Text style={styles.alltext}>Styles: {selectedProduct.ID}</Text>
              </View>

              <View style={styles.viewBtn}>
                <Text style={{fontSize: 15, padding: 5}}>
                  Total price: {'\n'}
                  <Text style={{fontSize: 20, color: 'black'}}>
                    $ {selectedProduct.money}
                  </Text>
                </Text>
                <TouchableOpacity style={styles.btnAdd} onPress={()=>Alert.alert('đã add')}>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: '#fff',
                    }}>
                    Add your Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Modal>
      )}
    </View>
  );
};

export default AdidasItem;

const styles = StyleSheet.create({
  view_flatlist: {
    flex: 1,
    height: 220,
    width: 190,
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
    backgroundColor: '#fff',
  },
  image: {
    height: 130,
    width: '100%',
    // borderRadius:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'pink',
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  start: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  money: {
    fontSize: 20,
    color: 'black',
    marginLeft: 50,
    fontWeight: 'bold',
  },
  close: {
    height: 40,
    width: 40,
    position: 'absolute',
    marginLeft: 350,
  },
  alltext: {
    fontSize: 18,
    color: '#179',
  },
  img_main: {
    height: 350,
    width: '90%',
    borderRadius: 10,
    marginTop: 30,
  },
  text_main: {
    fontSize: 35,
    textAlign: 'center',
    margin: 15,
    color: 'black',
  },
  viewBtn: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 15,
    width: '90%',
  },
  btnAdd: {
    backgroundColor: '#2349',
    padding: 15,
    marginLeft: 50,
    borderRadius: 23,
    width: '60%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 9,
  },
});
