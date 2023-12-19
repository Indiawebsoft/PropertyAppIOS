import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';
import qs from 'qs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Function to check login status
  const checkLoginStatus = async () => {
    try {
      const loginStatus = await AsyncStorage.getItem('is_login');
      if (loginStatus === 'true') {
        console.log('User is logged in');
        // Navigate to the authenticated part of the app
        // For example, navigate to the home screen
        setIsLoggedIn(true);
        retrieveUserData();
      } else {
        console.log('User is not logged in');
        // Show login screen or handle accordingly
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  // Assuming userData is fetched from an API
  const storeUserData = async userData => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      console.log('User data stored successfully');
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  };

  const retrieveUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const parsedUserData = JSON.parse(userData);
        console.log('Retrieved user data:', parsedUserData.full_name);
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  const loginApiCall = async () => {
    try {
      setLoading(true);
      const data = qs.stringify({
        mobile: mobileNumber,
        password: '123456',
        device_type: '0',
        device_token: '123456',
        module_action: 'team_login',
      });

      const config = {
        method: 'post',
        url: 'https://bharatpropertys.com/json/bharatpropertys_business.php',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
      };
      const response = await axios(config);
      const responseData = response.data;
      if (responseData.status === '1') {
        const userData = responseData.result;
        console.log('login successfully.');
        // Access user data
        console.log('Full Name:', userData.full_name);
        await AsyncStorage.setItem('is_login', 'true');
        storeUserData(userData);
        setIsLoggedIn(true);
        showToast('Login Successfully.');
        navigation.navigate('HomeScreen');
      } else {
        showToast('invalid credentials. please try again');
        // Handle other status scenarios if needed
        console.log('invalid credentials. please try again');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const showToast = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(message);
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          style={{marginTop: 20}}
          size="large"
          color="#0000ff"
        />
      )}
      <Image
        source={require('../login/images/property_512.png')}
        style={styles.logo}
      />

      {/* <Text style={styles.title}>Login</Text> */}

      <View style={styles.mobileContainer}>
        <View style={styles.countryCodeContainer}>
          <Text style={styles.countryCode}>+91</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="numeric"
          maxLength={10}
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          size={25}
          fillColor="#F33939"
          unfillColor="#FFFFFF"
          text="Remember Me"
          iconStyle={{
            borderColor: 'red',
            borderWidth: 2, // Add borderWidth to create a square border
            borderRadius: 5, // Adjust the borderRadius to control the border shape
          }}
          innerIconStyle={{borderWidth: 2, borderRadius: 5}}
          onPress={isChecked => {
            // setRememberMe(isChecked);
          }}
          // onPress={isChecked => {
          //   setRememberMe(isChecked);
          // }}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          if (mobileNumber.length === 0) {
            showToast('Enter Mobile number.');
            return;
          } else if (mobileNumber.length < 10) {
            showToast('Enter Valid mobile number.');
          } else {
            loginApiCall(); // Call your login API function
          }
        }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text style={styles.ptm}>Not a User yet? </Text>
        <Text
          style={styles.subTitle}
          onPress={() => navigation.navigate('SignUp')}>
          Register here
        </Text>
      </View>

      <View style={styles.bottomRightView}>
        <Text style={styles.bottomRightText}>Bharat Propertys</Text>
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
    marginTop: 20,
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
