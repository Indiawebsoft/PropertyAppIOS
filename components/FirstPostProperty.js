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

const FirstPostProperty = ({navigation}) => {
  const unitTypeOptions = ['Select Status', 'New', 'Resale'];
  const [selectedValue, setSelectedValue] = useState(unitTypeOptions[0]);

  const electricityOptions = [
    'Select Electricity Status',
    '24 hout available',
    'Morning Power Cut',
    'Evening Power Cut',
  ];
  const [electricityValue, setElectricityValue] = useState(
    electricityOptions[0],
  );

  const waterAvailablityOptions = [
    'Select Water Availablity',
    '24 hours available',
    'Morning available',
    'Evening available',
    'Morning & Evening available',
  ];
  const [waterAvailablityValue, setwaterAvailablityValue] = useState(
    waterAvailablityOptions[0],
  );

  const reraOptions = [
    'Select',
    'Rera Certified',
    'Yes',
    'No',
    'Not Applicable',
  ];
  const [reraValue, setReraValue] = useState(reraOptions[0]);

  const overlookingOptions = [
    'Select Facing',
    'Garden Facing',
    'Tower Facing',
    'Road Facing',
    'Open Area',
  ];
  const [overlookingValue, setOverlookingValue] = useState(
    overlookingOptions[0],
  );

  const totalFloorOptions = [
    'Select Basement',
    'Lower Basement',
    'Upper Basement',
    'ground Floor',
    '1st Floor',
    '2nd Floor',
    '3rd Floor',
  ];
  const [totalFloorValue, setTotalFloorValue] = useState(totalFloorOptions[0]);

  const facingTypOptions = [
    'Select Facing Type',
    'East',
    'North',
    'North - East',
    'North - West',
    'South',
    'South - East',
    'South - West',
    'West',
  ];
  const [facingTypValue, setfacingTypValue] = useState(facingTypOptions[0]);

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
              Post Property - 2
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 15,
            marginHorizontal: 15,
          }}>
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Super Built-up Area *"
          />
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              marginStart: 8,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            placeholder="Unit Type *"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 10,
            marginHorizontal: 15,
          }}>
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Carpet Area *"
          />
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              marginStart: 8,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            placeholder="Unit Type *"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 10,
            marginHorizontal: 15,
          }}>
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Total Amount (₹)*"
          />
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              marginStart: 8,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Booking Amount (₹)*"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            marginTop: 10,
            marginHorizontal: 15,
          }}>
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Brokrage Charge (₹)*"
          />
          <TextInput
            style={{
              borderWidth: 0.6,
              flex: 1,
              marginStart: 8,
              borderColor: '#F44336',
              borderRadius: 6,
              paddingHorizontal: 10,
              paddingVertical: 6,
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Sales Status"
          />
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Select Status
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            {unitTypeOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Status of Electricity
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={electricityValue}
            onValueChange={(itemValue, itemIndex) =>
              setElectricityValue(itemValue)
            }>
            {electricityOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Select Status
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={waterAvailablityValue}
            onValueChange={(itemValue, itemIndex) =>
              setwaterAvailablityValue(itemValue)
            }>
            {waterAvailablityOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Rera Certified
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={reraValue}
            onValueChange={(itemValue, itemIndex) => setReraValue(itemValue)}>
            {reraOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Overlooking
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={overlookingValue}
            onValueChange={(itemValue, itemIndex) =>
              setOverlookingValue(itemValue)
            }>
            {overlookingOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Total Floor
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={totalFloorValue}
            onValueChange={(itemValue, itemIndex) =>
              setTotalFloorValue(itemValue)
            }>
            {totalFloorOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 15,
            borderColor: '#F44336', // Border color for the container
            borderWidth: 0.6, // Border width for the container
            borderRadius: 6,
          }}>
          <View
            style={{
              position: 'absolute',
              start: 15,
              top: -10,
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Facing Type
            </Text>
          </View>
          <Picker
            mode="dropdown"
            selectedValue={facingTypValue}
            onValueChange={(itemValue, itemIndex) =>
              setfacingTypValue(itemValue)
            }>
            {facingTypOptions.map((option, index) => (
              <Picker.Item
                style={{
                  fontSize: 16,
                }}
                key={index}
                label={option}
                value={option}
              />
            ))}
          </Picker>
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
              onPress={() => navigation.navigate('SecondPostProperty')}>
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

export default FirstPostProperty;
