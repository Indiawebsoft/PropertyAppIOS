/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Button} from 'react-native-elements';

function SignIn() {
  // const printConsole = () => {
  //   // Your function logic goes here
  //   console.log('Hello from printConsole');
  // };

  useEffect(() => {
    // Change the status bar style when the component mounts
    StatusBar.setBarStyle('light-content'); // Options: 'default', 'light-content', 'dark-content'
    StatusBar.setBackgroundColor('#F33939'); // Set the background color of the status bar
  }, []);

  // const [rememberMe, setRememberMe] = useState(false);
  // const toggleRememberMe = () => {
  //   setRememberMe(!rememberMe);
  // };

  const [rememberMe, setRememberMe] = useState(false);
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mobileContainer}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCode}>+91</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.checkBox}>
        <BouncyCheckbox
          size={25}
          fillColor="#F33939"
          unfillColor="#FFFFFF"
          text="Remember Me"
          textStyle={{
            fontSize: 14,
            color: 'black',
            textDecorationLine: 'none',
          }}
          iconStyle={{
            borderColor: 'red',
            borderWidth: 2, // Add borderWidth to create a square border
            borderRadius: 5, // Adjust the borderRadius to control the border shape
          }}
          innerIconStyle={{borderWidth: 2, borderRadius: 5}}
          onPress={isChecked => {
            setRememberMe(isChecked);
          }}
          // onPress={isChecked => {
          //   setRememberMe(isChecked);
          // }}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Ram</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F33939',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
  },
  mobileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F44336',
    borderRadius: 8,
    paddingStart: 10,
  },
  countryCodeContainer: {
    marginRight: 8,
  },
  countryCode: {
    fontSize: 20,
    color: '#F44336',
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  checkBox: {
    marginTop: 20,
  },
  label: {
    color: 'black',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default SignIn;
