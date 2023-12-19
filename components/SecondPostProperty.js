/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SecondPostProperty = ({navigation}) => {
  const fireShaftyCheckboxes = [
    {id: 1, label: 'Fire Extinguisher', checked: false},
    {id: 2, label: 'Fire Hose', checked: false},
    {id: 3, label: 'Central Heating', checked: false},
    {id: 4, label: 'Fire Sensors', checked: false},
    {id: 5, label: 'Oxygen Duct', checked: false},
    {id: 6, label: 'Alarm', checked: false},
    {id: 7, label: 'Sprinkiers', checked: false},
    {id: 8, label: 'Window Covering', checked: false},
  ];

  const amenitiesCheckboxes = [
    {id: 1, label: 'Fire Extinguisher', checked: false},
    {id: 2, label: 'Club', checked: false},
    {id: 3, label: 'Closed Campus', checked: false},
    {id: 4, label: 'Garden', checked: false},
    {id: 5, label: 'Power backup', checked: false},
    {id: 6, label: 'Gym', checked: false},
    {id: 7, label: 'Swimming Pool', checked: false},
    {id: 8, label: 'Lift', checked: false},
  ];

  const [fireShaftey, setFireShaftey] = useState(fireShaftyCheckboxes);
  const [amenities, setAmenities] = useState(amenitiesCheckboxes);

  const handleCheckboxToggle = id => {
    const updatedCheckboxes = fireShaftey.map(checkbox =>
      checkbox.id === id ? {...checkbox, checked: !checkbox.checked} : checkbox,
    );
    setFireShaftey(updatedCheckboxes);
  };

  const handleAmenitiesCheckboxToggle = id => {
    const updatedCheckboxes = amenities.map(checkbox =>
      checkbox.id === id ? {...checkbox, checked: !checkbox.checked} : checkbox,
    );
    setAmenities(updatedCheckboxes);
  };

  const renderCheckbox = ({item}) => (
    <View
      style={{
        flex: 1,
        marginVertical: 6,
      }}>
      <BouncyCheckbox
        value={item.checked}
        alignSelf="start"
        onValueChange={() => handleCheckboxToggle(item.id)}
        style={{alignSelf: 'flex-start'}}
        fillColor="#000000"
        unfillColor="#FFFFFF"
        textStyle={{
          fontSize: 14,
          color: 'black',
          textDecorationLine: 'none',
        }}
        text={item.label}
        iconStyle={{
          borderColor: 'red',
          borderWidth: 1, // Add borderWidth to create a square border
          borderRadius: 2, // Adjust the borderRadius to control the border shape
        }}
        innerIconStyle={{borderWidth: 1, borderRadius: 2}}
      />
    </View>
  );

  const renderAmanitiesCheckbox = ({item}) => (
    <View
      style={{
        flex: 1,
        marginVertical: 6,
      }}>
      <BouncyCheckbox
        value={item.checked}
        alignSelf="start"
        onValueChange={() => handleAmenitiesCheckboxToggle(item.id)}
        style={{alignSelf: 'flex-start'}}
        fillColor="#000000"
        unfillColor="#FFFFFF"
        textStyle={{
          fontSize: 14,
          color: 'black',
          textDecorationLine: 'none',
        }}
        text={item.label}
        iconStyle={{
          borderColor: 'red',
          borderWidth: 1, // Add borderWidth to create a square border
          borderRadius: 2, // Adjust the borderRadius to control the border shape
        }}
        innerIconStyle={{borderWidth: 1, borderRadius: 2}}
      />
    </View>
  );

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
              Post Property - 3
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 15,
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 10,
              fontWeight: '600',
              color: 'black',
            }}>
            Fire Shaftey Measure include:-
          </Text>

          <FlatList
            data={fireShaftey}
            renderItem={renderCheckbox}
            keyExtractor={item => item.id.toString()}
            numColumns={2} // Set the number of columns in the grid
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              marginBottom: 10,
              fontWeight: '600',
              color: 'black',
            }}>
            Amenities:-
          </Text>
          <FlatList
            data={amenities}
            renderItem={renderAmanitiesCheckbox}
            keyExtractor={item => item.id.toString()}
            numColumns={2} // Set the number of columns in the grid
          />
        </View>
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
              onPress={() => navigation.navigate('ThirdPostProperty')}>
              <Text
                style={{
                  fontFamily: 'googlesansregular', // Use your desired font family
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SecondPostProperty;
