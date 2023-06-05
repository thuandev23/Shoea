import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const EditAddressScreen = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handlePlaceSelected = place => {
    setSelectedLocation(place.geometry.location);
  };

  const handleSaveAddress = () => {
    // Xử lý logic lưu địa chỉ vào cơ sở dữ liệu hoặc state của ứng dụng
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.860026796409187,
          longitude: 106.64336627466741,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details) => handlePlaceSelected(details)}
        query={{
          key: 'YOUR_GOOGLE_MAPS_API_KEY',
          language: 'en',
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveAddress}>
        <Text style={styles.buttonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditAddressScreen;
