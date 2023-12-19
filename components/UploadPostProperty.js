/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const UploadPostProperty = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            backgroundColor: '#F44336',
          }}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <Image
            style={{width: 32, height: 26, marginStart: 5}}
            source={require('../images/left_arrow.png')}
          />
          <View style={{marginStart: 10}}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
              Upload Property
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            marginStart: 10,
            marginTop: 15,
            fontWeight: '600',
            color: 'black',
          }}>
          Property Media Select Multiple Attachment
        </Text>

        {/* <View
          style={{
            flex: 1,
            marginHorizontal: 5,
            flexDirection: 'row',
            marginBottom: 2,
            marginTop: 8,
            flexWrap: 'wrap',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 10,
            borderRadius: 6,
            elevation: 3,
            shadowColor: '#000000',
            shadowOpacity: 0.6,
            shadowRadius: 6,
            shadowOffset: {width: 4, height: 8},
          }}>
          <View
            style={{
              color: '#FF0000',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40, // Adjust the height as needed
                borderRadius: 5, // Rounded corners
                overflow: 'hidden', // Clip child components to rounded borders
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F44336',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Text
                style={{
                  fontFamily: 'googlesansregular', // Use your desired font family
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                BACK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 40, // Adjust the height as needed
                borderRadius: 5, // Rounded corners
                overflow: 'hidden', // Clip child components to rounded borders
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#103859',
                marginStart: 10,
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontFamily: 'googlesansregular', // Use your desired font family
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                POST PROPERTY
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        <View
          style={{
            flex: 1,
            marginHorizontal: 5,
            flexDirection: 'row',
            marginBottom: 2,
            marginTop: 8,
            flexWrap: 'wrap',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 10,
            borderRadius: 6,
            elevation: 3,
            shadowColor: '#000000',
            shadowOpacity: 0.6,
            shadowRadius: 6,
            shadowOffset: {width: 4, height: 8},
          }}>
          <View
            style={{
              color: '#FF0000',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 40, // Adjust the height as needed
                borderRadius: 5, // Rounded corners
                overflow: 'hidden', // Clip child components to rounded borders
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F44336',
              }}
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Text
                style={{
                  fontFamily: 'googlesansregular', // Use your desired font family
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                BACK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                height: 40, // Adjust the height as needed
                borderRadius: 5, // Rounded corners
                overflow: 'hidden', // Clip child components to rounded borders
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#103859',
                marginStart: 10,
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontFamily: 'googlesansregular', // Use your desired font family
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                POST PROPERTY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default UploadPostProperty;
