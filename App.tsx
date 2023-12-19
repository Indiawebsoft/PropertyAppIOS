/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

// import Home from './login/Home';
//import HomeScreen from './screens/HomeScreen';
import Splash from './login/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './login/Login';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import HomeScreen from './screens/HomeScreen';
import Properties from './components/Properties';
import ProjectList from './components/ProjectList';
import PropertyDetails from './components/PropertyDetails';
import TopDevelopers from './components/TopDevelopers';
import FirstPostProperty from './components/FirstPostProperty';
import SecondPostProperty from './components/SecondPostProperty';
import ThirdPostProperty from './components/ThirdPostProperty';
import UploadPostProperty from './components/UploadPostProperty';

// import SignIn from './login/SignIn';
// import LoginScreen from './login/Login';

function App(): JSX.Element {
  // const printConsole = () => {
  //   // Your function logic goes here
  //   console.log('Hello from printConsole');
  // };

  useEffect(() => {
    // Change the status bar style when the component mounts
    StatusBar.setBarStyle('light-content'); // Options: 'default', 'light-content', 'dark-content'
    StatusBar.setBackgroundColor('#F33939'); // Set the background color of the status bar
  }, []);

  // return <HomeScreen />;
  // return <SignIn />;
  // return <LoginScreen />;
  //return <Splash />;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
        <Stack.Screen name="Properties" component={Properties} />
        <Stack.Screen name="ProjectList" component={ProjectList} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TopDevelopers" component={TopDevelopers} />
        <Stack.Screen name="FirstPostProperty" component={FirstPostProperty} />
        <Stack.Screen
          name="SecondPostProperty"
          component={SecondPostProperty}
        />
        <Stack.Screen name="ThirdPostProperty" component={ThirdPostProperty} />
        <Stack.Screen
          name="UploadPostProperty"
          component={UploadPostProperty}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
