/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../login/images/property_512.png')}
        style={styles.logo}
      /> */}

      {/* <Text style={styles.title}>Login</Text> */}
      <Text style={{fontSize: 24, marginBottom: 10, color: '#000000'}}>
        Bharat Propertys{' '}
      </Text>
      <TextInput style={styles.inputbox} placeholder="Enter name" />
      <View style={styles.mobileContainer}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCode}>+91</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>
      <TextInput style={styles.inputbox} placeholder="Enter city" />
      <TextInput style={styles.inputbox} placeholder="Enter Landmark" />
      <TextInput style={styles.inputbox} placeholder="Enter Password" />
      <TextInput style={styles.inputbox} placeholder="Enter Confirm Password" />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>New User Registration</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text style={styles.ptm}>Already have an account? </Text>
        <Text style={styles.subTitle} onPress={() => navigation.goBack()}>
          Login here.
        </Text>
      </View>

      <View style={styles.bottomRightView}>
        <Text style={styles.bottomRightText}>
          developed by Bharat Propertys
        </Text>
        <Text style={styles.bottomRightText}>v 1.0</Text>
      </View>
    </View>
  );
};

const getCommonStyles = weight => ({
  color: 'black',
  fontWeight: weight,
});

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputbox: {
    borderWidth: 2,
    borderColor: '#F44336',
    borderRadius: 8,
    padding: 10,
    marginTop: 15,
    width: '100%',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    ...getCommonStyles('600'),
  },
  ptm: {
    fontSize: 16,
    ...getCommonStyles('400'),
  },
  subTitle: {
    fontSize: 18,
    ...getCommonStyles('800'),
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
    color: 'black',
  },
  logo: {
    width: 120, // Adjust the width as needed
    height: 120, // Adjust the height as needed
    marginTop: 80,
    marginBottom: 16,
  },
  mobileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#F44336',
    borderRadius: 8,
    marginTop: 15,
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
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start', // Align to the left
    marginBottom: 16,
    marginTop: 12,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#F33939',
    padding: 12,
    marginTop: 40,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
