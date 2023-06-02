import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  Modal,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../Cart/cartReducer';
import ViewMoreText from 'react-native-view-more-text';

const productmain = [
  {
    id: '8',
    text: 'Nike ACG Lowcate ',
    star: '4.3',
    money: '425',
    image: 'https://bom.so/97BrcX',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
  },
  {
    id: '9',

    text: 'Nike ACG Moc ',
    star: '4.1',
    money: '300',
    image: 'https://bom.so/KJWlTv',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/t/acg-moc-shoes-kLZZlk/DZ3407-300
  },
  {
    id: '10',

    text: 'Nike Vaporfly 3 ',
    star: '4.3',
    money: '537',
    image: 'https://bom.so/Ik2noZ',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/t/oneonta-next-nature-sandals-KwxRDD/FB1948-200
  },
  {
    id: '11',

    text: 'Nike Oneonta Next Nature',
    star: '4.1',
    money: '350',
    image: 'https://bom.so/j306kA',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
  },
  {
    id: '12',

    text: 'Nike Air Max 90 Futura',
    star: '4.6',
    money: '480',
    image: 'https://bom.so/L4SCDi',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/u/nike-air-max-90-futura-by-you-custom-shoes-10001486/9847345872
  },
  {
    id: '13',

    text: 'Air Jordan 1 Elevate High',
    star: '4.3',
    money: '305',
    image: 'https://bom.so/ubtUSJ',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/t/air-jordan-1-elevate-high-shoes-rKPNHR/DN3253-061
  },
  {
    id: '14',

    text: 'Zoom Freak 4',
    star: '4.3',
    money: '425',
    image: 'https://bom.so/6wQFFs',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    // https://www.nike.com/vn/t/zoom-freak-4-basketball-shoes-jFdxSB/FB9503-200
  },
  {
    id: '15',

    text: 'Nike Air Force 1 Mid',
    star: '4.3',
    money: '425',
    image: 'https://bom.so/sxoS93',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',

    //https://www.nike.com/vn/t/air-force-1-mid-07-shoes-ZzCgrn/DV0806-101
  },
  {
    id: '16',
    text: 'Advantage',
    star: '4.3',
    money: '230',
    image: 'https://bom.so/JRiyWu',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-advantage/GZ5300.html
  },
  {
    id: '17',
    text: 'Ultraboots 4.0 DNA',
    star: '4.5',
    money: '475',
    image: 'https://bom.so/r2H8gM',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-ultraboost-4.0-dna/FY9120.html
  },
  {
    id: '18',
    text: 'Adizero Adios Pro 2.0',
    star: '4.5',
    money: '537',
    image: 'https://bom.so/9QhgQv',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    // https://www.adidas.com.vn/vi/gi%C3%A0y-adizero-adios-pro-2.0/FZ2477.html
  },
  {
    id: '19',
    text: 'Racer TR21',
    star: '4.4',
    money: '550',
    image: 'https://bom.so/NA2cj8',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-racer-tr21/H00654.html
  },
  {
    id: '20',
    text: 'Supernova',
    star: '4.7',
    money: '580',
    image: 'https://bom.so/elx7zh',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-supernova/S42722.html
  },
  {
    id: '21',
    text: 'ZG21 Motion Primegreen BOA',
    star: '4.3',
    money: '440',
    image: 'https://bom.so/OiIxeH',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-golf-c%E1%BB%95-l%E1%BB%ADng-zg21-motion-primegreen-boa/G58741.html
  },
  {
    id: '22',
    text: 'Continental 80',
    star: '4.2',
    money: '460',
    image: 'https://bom.so/bZsihr',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-continental-80/G27706.html
  },
  {
    id: '23',
    text: 'Adifom SLTN',
    star: '4.8',
    money: '605',
    image: 'https://bom.so/cMMxkn',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    type_ID: 'DM8019-201',
    //https://www.adidas.com.vn/vi/gi%C3%A0y-adifom-sltn/HP6481.html
  },
  {
    id: '24',
    text: 'Denim Fashion',
    star: '4.3',
    money: '230',
    image: 'https://bom.so/mm2kzw',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://drake.vn/converse/converse-chuck-taylor-all-star-denim-fashion-a02880c
  },
  {
    id: '25',

    text: 'Lift Denim Fashion',
    star: '4.5',
    money: '475',
    image: 'https://bom.so/qYwcXh',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://drake.vn/converse/converse-chuck-taylor-all-star-lift-denim-fashion-a03821c
  },
  {
    id: '26',

    text: 'Crafted PatchWork',
    star: '4.5',
    money: '537',
    image: 'https://bom.so/1u2IMk',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://drake.vn/converse/converse-chuck-taylor-all-star-crafted-patchwork-a05195c
  },
  {
    id: '27',

    text: 'CX Explore Hi',
    star: '4.4',
    money: '550',
    image: 'https://bom.so/XWZq94',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-hi-a02411c
  },
  {
    id: '28',

    text: 'WorkWear Textile',
    star: '4.7',
    money: '580',
    image: 'https://bom.so/jl5g0O',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://drake.vn/converse/converse-chuck-taylor-all-star-workwear-textile-a02875c
  },
  {
    id: '29',

    text: '1970s Archive Paint',
    star: '4.3',
    money: '440',
    image: 'https://bom.so/rvMMlz',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-archive-paint-splatter-a01170c?sort=p.price&order=DESC
  },
  {
    id: '30',

    text: '1970S Recycled Rpet Canvas',
    star: '4.2',
    money: '460',
    image: 'https://bom.so/A2mDdj',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-recycled-rpet-canvas-172681c
  },
  {
    id: '31',

    text: 'Chuck Taylor Roots',
    star: '4.8',
    money: '605',
    image: 'https://bom.so/L7tXYW',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-roots-170138c?sort=p.price&order=DESC
  },
  {
    id: '32',
    text: 'RS-X Reinvention',
    star: '4.3',
    money: '230',
    image: 'https://bom.so/oQYfwG',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://us.puma.com/us/en/pd/rs-x-reinvention-sneakers/369579?search=true&swatch=14
  },
  {
    id: '33',
    text: 'Cali Womens',
    star: '4.5',
    money: '475',
    image: 'https://bom.so/hW2N44',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://us.puma.com/us/en/pd/cali-womens-sneakers/369155?search=true&swatch=04
  },
  {
    id: '34',
    text: 'GV Speacial',
    star: '4.5',
    money: '537',
    image: 'https://bom.so/6Ue85U',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://us.puma.com/us/en/pd/gv-special%2B-sneakers/366613?search=true&swatch=07
  },
  {
    id: '35',
    text: 'Clyde Core Foil Mens',
    star: '4.4',
    money: '550',
    image: 'https://bom.so/Csy7vV',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://us.puma.com/us/en/pd/clyde-core-foil-mens-sneakers/364669?search=true&swatch=04
  },
  {
    id: '36',
    text: 'Califormia Casual',
    star: '4.7',
    money: '580',
    image: 'https://bom.so/5CkhoR',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://us.puma.com/us/en/pd/california-casual-mens-sneakers/366608?search=true&swatch=05
  },
  {
    id: '37',
    text: 'Super Liga G Retro',
    star: '4.3',
    money: '440',
    image: 'https://bom.so/PDI29B',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://us.puma.com/us/en/pd/super-liga-og-retro-sneakers/356999?search=true&swatch=19
  },
  {
    id: '38',
    text: 'Smash v2',
    star: '4.2',
    money: '460',
    image: 'https://bom.so/a0d5uL',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    //https://us.puma.com/us/en/pd/puma-smash-v2-sneakers/364989?search=true&swatch=15
  },
  {
    id: '39',
    text: 'Reboound LayUp Mid',
    star: '4.8',
    money: '605',
    image: 'https://bom.so/b7QhZu',
    description:
      'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
    ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
    ID: 'DM8019-201',
    // https://us.puma.com/us/en/pd/puma-rebound-layup-mid-sneakers-big-kids/370486?search=true&swatch=02
  },
];

const SearchItem = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = name => {
    setSearchText(name);
    const results = productmain.filter(item =>
      item.text.toLowerCase().includes(name.toLowerCase()),
    );
    setSearchResults(results);
  };
  const cart = useSelector(state => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();
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

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={handleItemClick(item)}>
      <Image
        source={{uri: item.image}}
        style={{
          position: 'relative',
          height: 70,
          width: 70,
          marginTop: 3,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          fontSize: 20,
          color: 'black',
          margin: 18,
          marginLeft: 80,
        }}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* Search */}
      <View style={styles.search}>
        <Image
          style={styles.btnSearch}
          source={require('../assets/img-logo/search_icon.png')}
          resizeMode="cover"
        />
        <TextInput
          style={styles.inputSearch}
          placeholder="Enter a keyworld you want search"
          onChangeText={handleSearch}
          value={searchText}
        />

        {searchText.length > 0 && (
          <View style={styles.search_flastlish}>
            <FlatList
              data={searchResults}
              pagingEnabled={true}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.content}
              renderItem={({item, index}) => (
                <View key={`${item.id}-${index}`}>
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => handleItemClick(item)}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        position: 'relative',
                        height: 70,
                        width: 70,
                        marginTop: 3,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    />
                    <Text
                      style={{
                        position: 'absolute',
                        fontSize: 20,
                        color: 'black',
                        margin: 18,
                        marginLeft: 80,
                      }}>
                      {item.text}
                    </Text>
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
                    source={require('../assets/img-logo/checkerror.png')}
                    style={styles.close}
                  />
                </TouchableOpacity>

                <ScrollView>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      backgroundColor: '#2342',
                    }}>
                    <Image
                      source={{uri: selectedProduct.image}}
                      style={styles.img_main}
                    />
                    <Text style={styles.text_main}>{selectedProduct.text}</Text>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          marginRight: 250,
                          fontSize: 18,
                          color: 'black',
                        }}>
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
                      <Text style={styles.alltext}>
                        Styles: {selectedProduct.type_ID}
                      </Text>
                    </View>

                    <View style={styles.viewBtn}>
                      <Text style={{fontSize: 15, padding: 5}}>
                        Total price: {'\n'}
                        <Text style={{fontSize: 20, color: 'black'}}>
                          $ {selectedProduct.money}
                        </Text>
                      </Text>
                      {cart.some(value => value.id == selectedProduct.id) ? (
                        <TouchableOpacity
                          style={styles.btnAdd}
                          onPress={() =>
                            Alert.alert(
                              // 'Mù hả ? Không thấy chữ đã thêm thành công à, qua giỏ hàng mà xem',
                              'The product has been added to cart',
                            )
                          }>
                          <Text
                            style={{
                              fontSize: 20,
                              textAlign: 'center',
                              color: '#fff',
                            }}>
                            Add your Cart
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.btnAdd}
                          onPress={() => addItemToCart(selectedProduct)}
                          onPressIn={() => Alert.alert('Added product')}>
                          <Text
                            style={{
                              fontSize: 20,
                              textAlign: 'center',
                              color: '#fff',
                            }}>
                            Add your Cart
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </ScrollView>
              </Modal>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 15,
  },
  itemContainer: {
    // paddingVertical: 8,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#2349',
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
  search_flastlish: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    top: 60,
    borderRadius: 10,
  },
  content: {
    flexGrow: 1,
  },
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
