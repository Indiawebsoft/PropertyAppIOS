/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {StatusBar, StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash({navigation}) {
  // const printConsole = () => {
  //   // Your function logic goes here
  //   console.log('Hello from printConsole');
  // };

  useEffect(() => {
    // Change the status bar style when the component mounts
    StatusBar.setBarStyle('light-content'); // Options: 'default', 'light-content', 'dark-content'
    StatusBar.setBackgroundColor('#F33939'); // Set the background color of the status bar
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const loginStatus = await AsyncStorage.getItem('is_login');
      if (loginStatus === 'true') {
        setTimeout(() => {
          navigation.navigate('HomeScreen');
        }, 1000); // 4000 milliseconds = 4 seconds
      } else {
        setTimeout(() => {
          navigation.navigate('LoginScreen');
        }, 4000); // 4000 milliseconds = 4 seconds
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  return (
    <View
      style={styles.container}
      onPress={() => navigation.navigate('LoginScreen')}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.title}>Bharat Propertys</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>India's No. 1</Text>
          <Text style={styles.ptm}>Property App</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomRightView}>
        <Text style={styles.bottomRightText}>Bharat Propertys</Text>
        <Text style={styles.bottomRightText}>v 1.0</Text>
      </View>
    </View>
  );
}

const getCommonStyles = weight => ({
  color: '#FFFFFF',
  fontWeight: weight,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    ...getCommonStyles('600'),
  },
  subTitle: {
    fontSize: 20,
    ...getCommonStyles('400'),
  },
  ptm: {
    fontSize: 16,
    ...getCommonStyles('400'),
    marginStart: 4,
  },
  bottomRightView: {
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 0,
    right: 0,
    paddingBottom: 10,
    paddingEnd: 10,
    borderRadius: 8,
  },
  bottomRightText: {
    color: 'white',
  },
});

export default Splash;
