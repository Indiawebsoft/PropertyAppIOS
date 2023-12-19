/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StatusBar, View, TextInput, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

function Header() {
  useEffect(() => {
    // Change the status bar style when the component mounts
    StatusBar.setBarStyle('light-content'); // Options: 'default', 'light-content', 'dark-content'
    StatusBar.setBackgroundColor('#F33939'); // Set the background color of the status bar
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        backgroundColor: '#F33939',
        alignItems: 'center',
      }}>
      <Text style={{alignSelf: 'flex-start'}}>Buy</Text>
      <TextInput
        style={[styles.textInputStyle, {alignSelf: 'flex-start'}]}
        underlineColorAndroid="transparent"
        placeholder="Search Property Here"
      />
    </View>
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

export default Header;
