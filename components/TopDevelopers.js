/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const TouchableComponent = Platform.select({
  android: () => TouchableNativeFeedback,
  default: () => TouchableOpacity,
})();

const TopDevelopers = ({navigation}) => {
  const services = [
    {
      id: '0',
      image:
        'https://bharatpropertys.com/Agent/property_uploads/3c92871586de4111d6e6e7591b0e29a2.frrt.jpg',
      name: 'Washing',
    },
    {
      id: '1',
      image:
        'https://bharatpropertys.com/Agent/project_image/8cfa7ff8439b92d8443b7e654001708e.IMG_1695370663098.jpg',
      name: 'Laundry',
    },
    {
      id: '2',
      image:
        'https://bharatpropertys.com/Agent/project_image/d48517f04f158dab274bf3743caa3725.IMG_1695370663321.jpg',
      name: 'Wash & Iron',
    },
    {
      id: '3',
      image:
        'https://bharatpropertys.com/Agent/property_uploads/01bc651a4f15e0e08932f614edccd5e6.fsdscf.jpg',
      name: 'Cleaning',
    },
    {
      id: '4',
      image:
        'https://bharatpropertys.com/Agent/property_uploads/3c92871586de4111d6e6e7591b0e29a2.frrt.jpg',
      name: 'Washing',
    },
    {
      id: '5',
      image:
        'https://bharatpropertys.com/Agent/project_image/8cfa7ff8439b92d8443b7e654001708e.IMG_1695370663098.jpg',
      name: 'Laundry',
    },
    {
      id: '6',
      image:
        'https://bharatpropertys.com/Agent/project_image/d48517f04f158dab274bf3743caa3725.IMG_1695370663321.jpg',
      name: 'Wash & Iron',
    },
    {
      id: '7',
      image:
        'https://bharatpropertys.com/Agent/property_uploads/01bc651a4f15e0e08932f614edccd5e6.fsdscf.jpg',
      name: 'Cleaning',
    },
    {
      id: '8',
      image:
        'https://bharatpropertys.com/Agent/project_image/d48517f04f158dab274bf3743caa3725.IMG_1695370663321.jpg',
      name: 'Wash & Iron',
    },
    {
      id: '9',
      image:
        'https://bharatpropertys.com/Agent/property_uploads/01bc651a4f15e0e08932f614edccd5e6.fsdscf.jpg',
      name: 'Cleaning',
    },
  ];
  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: '#F0F0F0', flex: 1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            backgroundColor: '#F44336',
          }}
          onPress={() => navigation.goBack()} // Ensure navigation is available in this scope
          activeOpacity={0.8} // Adjust the opacity when pressed
        >
          <Image
            style={{width: 32, height: 26, marginStart: 5}}
            source={require('../images/left_arrow.png')} // Replace with your image
          />
          <View style={{marginStart: 10}}>
            <Text style={{fontSize: 16, fontWeight: '420', color: 'white'}}>
              Top Developers
            </Text>
            <Text style={{fontSize: 13, fontWeight: '320', color: 'white'}}>
              38 Properties
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingStart: 5, marginTop: 5, paddingEnd: 5}}>
          <FlatList
            data={services}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Pressable
                style={{
                  marginHorizontal: 3,
                  backgroundColor: 'white',
                  padding: 0,
                  borderRadius: 8,
                  elevation: 3, // Android elevation for shadow
                  shadowColor: '#000000', // iOS shadow properties
                  shadowOpacity: 0.6,
                  shadowRadius: 6,
                  marginVertical: 4,
                  shadowOffset: {width: 4, height: 8},
                }}
                onPress={() => navigation.navigate('PropertyDetails')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 10,
                    marginBottom: 8,
                  }}>
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      marginStart: 10,
                      borderRadius: 40,
                    }}
                    source={{
                      uri: 'https://bharatpropertys.com/Agent/userimage/30aaa42805c04522a16e12d7e5b874378.jpeg',
                    }}
                  />
                  <View style={{marginLeft: 12}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: '600',
                      }}>
                      Jaswant Singh Lodhi
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontFamily: 'gilroy_medium',
                          color: 'gray',
                          fontSize: 12,
                        }}>
                        Rera Id:-{' '}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'googlesansbold',
                          color: 'black',
                          fontSize: 14,
                          fontWeight: '800',
                        }}>
                        #5KJYGRTYW
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 6,
                  }}>
                  <View
                    style={{
                      color: '#FF0000',
                      flexDirection: 'row',
                      flex: 1,
                      marginHorizontal: 6,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '300',
                        color: '#303030',
                      }}>
                      Operating in : Ab Road, Vijay Nagar Indore
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#000000',
                      marginVertical: 4,
                      marginHorizontal: 6,
                    }}>
                    Properties for
                  </Text>

                  <View
                    style={{
                      color: '#FF0000',
                      flexDirection: 'row',
                      flex: 1,
                      marginBottom: 4,
                      marginHorizontal: 6,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#000000',
                      }}>
                      For sale 63+
                    </Text>

                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        alignSelf: 'flex-end',
                        color: '#000000',
                      }}>
                      ₹ 6.0 Cr - 10.0 Cr
                    </Text>
                  </View>

                  <View
                    style={{
                      color: '#FF0000',
                      flexDirection: 'row',
                      flex: 1,
                      marginBottom: 4,
                      marginHorizontal: 6,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#000000',
                      }}>
                      For Lease 23+
                    </Text>

                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '400',
                        alignSelf: 'flex-end',
                        color: '#000000',
                      }}>
                      ₹ 6.5 Cr - 2.5 Cr
                    </Text>
                  </View>

                  <View
                    style={{
                      color: '#FF0000',
                      flexDirection: 'row',
                      flex: 1,
                      marginTop: 4,
                      marginBottom: 10,
                      marginHorizontal: 6,
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        height: 34, // Adjust the height as needed
                        borderRadius: 5, // Rounded corners
                        overflow: 'hidden', // Clip child components to rounded borders
                        borderColor: '#FF0000', // Red color for the border
                        borderWidth: 1, // Border width
                      }}
                      activeOpacity={0.8} // Adjust the opacity when pressed
                    >
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderColor: '#F44336', // Red background color
                          borderRadius: 5,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'googlesansregular', // Use your desired font family
                            paddingHorizontal: 10,
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '600',
                          }}>
                          Contact Agent
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        flex: 1,
                        height: 34, // Adjust the height as needed
                        borderRadius: 5, // Rounded corners
                        overflow: 'hidden', // Clip child components to rounded borders
                        borderColor: '#FF0000', // Red color for the border
                        borderWidth: 1, // Border width
                        backgroundColor: '#F44336',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginStart: 10,
                      }}
                      activeOpacity={0.8} // Adjust the opacity when pressed
                    >
                      <Text
                        style={{
                          fontFamily: 'googlesansregular', // Use your desired font family
                          paddingHorizontal: 10,
                          color: 'white',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        See Properties
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* <Text style={{textAlign: 'center', marginTop: 10}}>
              {service.name}
            </Text> */}
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default TopDevelopers;

const styles = StyleSheet.create({
  container: {
    // Your main container styles
  },
  relativeContainer: {
    position: 'relative',
    marginStart: 5,
  },
  propertyImage: {
    width: 140,
    height: 140,
    borderRadius: 8,

    // Other styles for your image
  },
  imageCountContainer: {
    position: 'absolute',
    top: 5,
    start: 5,
    backgroundColor: '#303030',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },
  imageCountText: {
    color: 'white',
    fontSize: 11,
  },
  touchableContainer: {},
  rectangle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44336', // Red background color
    borderRadius: 5, // Rounded corners, should match the outer container
  },
  rectangle1: {},
});
