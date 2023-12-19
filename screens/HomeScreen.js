import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Location from 'expo-location';
import {Feather} from '@expo/vector-icons';
import Offices from '../components/Offices';
import Developers from '../components/Developers';
import Agents from '../components/Agents';
import Projects from '../components/Projects';

function HomeScreen({navigation}) {
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    'Scheme No.154 Near Arvindo Hospital',
  );
  const [loginName, setloginName] = useState('Bharat Property');

  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  useEffect(() => {
    // Change the status bar style when the component mounts
    StatusBar.setBarStyle('light-content'); // Options: 'default', 'light-content', 'dark-content'
    StatusBar.setBackgroundColor('#F33939'); // Set the background color of the status bar
    checkifCurrentLocationEnabled();
    getCurrentLocation();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const loginStatus = await AsyncStorage.getItem('is_login');
      if (loginStatus === 'true') {
        console.log('User is logged in');
        retrieveUserData();
      } else {
        console.log('User is not logged in');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };
  const retrieveUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const parsedUserData = JSON.parse(userData);
        setloginName('' + parsedUserData.full_name);
        console.log('Retrieved user data:', parsedUserData.full_name);
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const checkifCurrentLocationEnabled = async () => {
    let {enabled} = await Location.requestForegroundPermissionsAsync();
    if (!enabled) {
      Alert.alert(
        'Location service not enabled',
        'Please enable the Location Service',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'allow the app to use the location services',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }

    const {coords} = await Location.getCurrentPositionAsync();
    console.log(coords);
    if (coords) {
      const {latitude, longitude} = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log(response)

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: '#F0F0F0', flex: 1}}>
        {/* user's location and profile */}
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <Image
            style={{width: 26, height: 26}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
            }}
          />
          <View style={{marginStart: 5}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '420',
                color: '#000000',
              }}>
              {loginName}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '420', color: '#000000'}}>
              Vijay Nagar Square
            </Text>
            <Text style={{fontSize: 13, fontWeight: '320', color: '#000000'}}>
              {displayCurrentAddress}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              end: 10,
            }}
            onPress={() => navigation.navigate('FirstPostProperty')}>
            <View>
              <View
                style={{
                  backgroundColor: '#F44336',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 10,
                  marginTop: 16,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: '#FFFFFF',
                  }}>
                  Post Property
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  backgroundColor: '#fdd835',
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: 'black',
                  }}>
                  Free
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <View style={{marginLeft: 'auto', marginRight: 10}}>
            <Pressable>
              <Image
                style={{width: 50, height: 50, borderRadius: 30}}
                // source={{
                //   uri: 'https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg',
                // }}

                source={require('../images/b_logo.png')} // Replace with your image
              ></Image>
            </Pressable>
          </View> */}
        </View>

        {/* Search Bar */}
        <View
          style={{
            paddingStart: 5,
            marginStart: 10,
            marginEnd: 10,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1.0,
            borderColor: '#707070',
            borderRadius: 7,
          }}>
          <TextInput placeholder="Search Property..." style={{fontSize: 16}} />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Image Sliders */}
        {/* <Carousel /> */}

        {/*  Top Office Properties*/}
        <Offices navigation={navigation} />

        {/*  Top Developers */}
        <Developers navigation={navigation} />

        {/*  Top Agents */}
        <Agents navigation={navigation} />

        {/*  Office */}
        <Projects navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    margin: 5,
    fontSize: 16,
    borderRadius: 10,
    borderColor: '#F33939',
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
