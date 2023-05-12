import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

const menuItems = [
  {
    title: 'Edit Profile',
    screen: 'Edit Profile',
    image: require('../assets/img-logo/right-arrow.png'),
  },
  {
    title: 'Notification',
    screen: 'Notification',
    image: require('../assets/img-logo/right-arrow.png'),
  },
  {
    title: 'Security',
    screen: 'Security',
    image: require('../assets/img-logo/right-arrow.png'),
  },
  {
    title: 'Privacy Policy',
    screen: 'Privacy Policy',
    image: require('../assets/img-logo/right-arrow.png'),
  },
  {
    title: 'Help Center',
    screen: 'Help Center',
    image: require('../assets/img-logo/right-arrow.png'),
  },
  {
    title: 'Language',
    screen: 'Language',
    image: require('../assets/img-logo/right-arrow.png'),
  },
];

const MenuItem = ({title, image, onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
    <Image source={image} style={styles.imagenext} />
  </TouchableOpacity>
);

const ProfileScreen = ({navigation}) => {
  const [profileImage, setProfileImage] = useState(null);
  const renderMenuItem = ({item}) => (
    <MenuItem
      title={item.title}
      onPress={() => {
        if (item.screen === 'Edit Profile') {
          setNewName(ten);
        }
        navigation.navigate(item.screen);
      }}
      image={item.image}
    />
  );

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,

      cropping: true,
    }).then(image => {
      // console.log(image);
      setProfileImage(image.path);
    });
  };
  const route = useRoute();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [ten, setTen] = useState('');
  const [newName, setNewName] = useState('');
  const [admin, setAdmin] = useState('');
  useEffect(() => {
    getAccountInfo();
    // getName();
  }, []);
  const getAccountInfo = async () => {
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
          setAdmin(matchingAccount.name);
        }
      }
    } catch (e) {
      console.log('Error getting accounts:', e);
    }
  };

  const saveProfile = async () => {
    try {
      await AsyncStorage.setItem('NAME', newName);
      setTen(newName); // Cập nhật lại giá trị của biến "ten" với giá trị mới vừa được lưu
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeaderCart}>
        <Image
          source={require('../assets/img-logo/logo.jpg')}
          style={styles.imagelogo}
        />
        <Text style={styles.title}>Setting</Text>

        {ten === admin ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Manager Accout')}>
            <Image
              source={require('../assets/img-logo/project-management.png')}
              style={styles.imgManage}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              Alert.alert("You aren't Admin, so you Manager Account !")
            }>
            <Image
              source={require('../assets/img-logo/project-management.png')}
              style={styles.imgManage}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* Lỗi khi resart thì ảnh sẽ mất quay về ảnh mặt định -> chưa fix */}
      <View style={styles.avatarChange}>
        <Image
          style={styles.avatar}
          source={
            profileImage
              ? {uri: profileImage}
              : require('../assets/img-logo/meme1.jpg')
          }
        />
        <TouchableOpacity onPress={imagePick}>
          <Image
            style={styles.changeavatar}
            source={require('../assets/img-logo/pencil-image.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textavatar}>{ten || 'Admin'}</Text>
      </View>

      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={item => item.title}
        style={{width: '100%'}}
      />
      <View style={styles.btnlogout}>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modal}>
            <Image
              style={styles.image}
              source={require('../assets/img-logo/logout.png')}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.buttonlogout}
                onPress={() => {
                  toggleModal();
                  navigation.navigate('Login');
                }}>
                <Text style={styles.buttonText}>Log out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonlogout}
                onPress={() => {
                  toggleModal();
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2FCF1',
  },
  viewHeaderCart: {
    padding: 10,
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  imagelogo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  imgManage: {
    height: 40,
    width: 40,
    marginLeft: '60%',
    marginTop: 5,
  },
  title: {
    fontSize: 30,
    color: 'black',
    marginLeft: 15,
    padding: 5,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    marginLeft: 40,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 50,
    fontSize: 17,
    color: 'black',
  },
  avatarChange: {
    alignItems: 'center',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  changeavatar: {
    position: 'absolute',
    height: 35,
    width: 35,
    resizeMode: 'cover',
    marginLeft: 35,
    marginTop: -35,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  textavatar: {
    fontSize: 25,
    fontWeight: '500',
    padding: 20,
  },
  imagenext: {
    position: 'absolute',
    height: 30,
    width: 30,
    marginLeft: 270,
  },
  btnlogout: {
    width: '100%',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonlogout: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
