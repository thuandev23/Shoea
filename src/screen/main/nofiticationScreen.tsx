import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {ScreenStackHeaderBackButtonImage} from 'react-native-screens';
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const PushNotifyScreen = ({navigation}) => {
  const [token, setToken] = useState<string | undefined>('');
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const tks = await messaging().getToken();
      if (tks != null) {
        setToken(tks);
      }
    }
  }

  useEffect(() => {
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const {notification} = remoteMessage;
      const imageUrl = remoteMessage.notification?.android?.imageUrl;

      const notificationId = firestore().collection('notifications').doc().id;

      // Lưu thông báo vào Firestore
      await firestore()
        .collection('notifications')
        .doc(notificationId)
        .set({
          title: notification.title,
          body: notification.body,
          read: false,
          timestamp: firestore.FieldValue.serverTimestamp(),
          image: imageUrl || '', // Lưu URL của ảnh trong Firestore
        });

      setNotifications(prevNotifications => [
        ...prevNotifications,
        {id: notificationId, ...notification, read: false, image: imageUrl},
      ]);

      setUnreadCount(prevCount => prevCount + 1);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('notifications')
      .orderBy('timestamp', 'desc')
      .onSnapshot(querySnapshot => {
        const newNotifications: any[] = [];
        let newUnreadCount = 0;

        querySnapshot.forEach(doc => {
          const {title, body, read, image} = doc.data();
          newNotifications.push({id: doc.id, title, body, read, image});

          if (!read) {
            newUnreadCount++;
          }
        });

        setNotifications(newNotifications);
        setUnreadCount(newUnreadCount);
      });

    return unsubscribe;
  }, [unreadCount]);

  const markNotificationAsRead = async (notification: any) => {
    if (!notification.read) {
      await firestore()
        .collection('notifications')
        .doc(notification.id)
        .update({read: true});
    }

    const updatedNotifications = notifications.map(item =>
      item.id === notification.id ? {...item, read: true} : item,
    );

    setNotifications(updatedNotifications);

    const unreadCount = updatedNotifications.reduce(
      (count, item) => (item.read ? count : count + 1),
      0,
    );

    setUnreadCount(unreadCount);
  };

  return (
    <View>
      <Text style={styles.textnoti}>Unread Notifications: {unreadCount}</Text>
      <ScrollView style={styles.container}>
        {notifications.map((notification, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.notificationContainer,
              {
                backgroundColor: notification.read ? '#F5F5F5' : '#FFFFFF',
              },
            ]}
            onPress={() => markNotificationAsRead(notification)}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationbody}>{notification.body}</Text>
            {notification.image && (
              <Image
                source={{uri: notification.image}}
                style={styles.notificationImage}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PushNotifyScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: h * 0.05,
  },
  textnoti: {
    position: 'absolute',
    fontSize: 20,
    padding: 10,
    color: '#000',
    fontWeight: '500',
  },
  notify: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
  notificationContainer: {
    borderRadius: 10,
    padding: 10,
    marginTop: h * 0.02,
    marginLeft: w * 0.08,
    width: '80%',
  },
  notificationTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20,
  },
  notificationbody: {
    marginBottom: 5,
    fontSize: 18,
  },
  notificationImage: {
    backgroundColor: 'red',
    width: '100%',
    height: h * 0.2,
    resizeMode: 'cover',
    marginTop: 10,
  },
});
