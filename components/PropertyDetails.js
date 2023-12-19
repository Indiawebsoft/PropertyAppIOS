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

const PropertyDetails = ({navigation}) => {
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
          <View style={{marginStart: 12}}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
              Office for Sale
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'white'}}>
              ₹ 234.56 Cr | Office 1200 sq-ft
            </Text>
          </View>
          <View style={{marginRight: 10, flex: 1, alignItems: 'flex-end'}}>
            <Image
              style={{width: 32, height: 26, marginStart: 5}}
              source={require('../images/share.png')}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Pressable
            style={{
              width: 'auto',
              backgroundColor: '#F0F0F0',
            }}>
            <View style={{position: 'relative'}}>
              <Image
                source={{
                  uri: 'https://bharatpropertys.com/Agent/project_image/8cfa7ff8439b92d8443b7e654001708e.IMG_1695370663098.jpg',
                }}
                style={{height: 220}}
              />
              <View style={styles.imageCountContainer}>
                <Text style={styles.imageCountText}>4 +</Text>
              </View>
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
                elevation: 3, // Android elevation for shadow
                shadowColor: '#000000', // iOS shadow properties
                shadowOpacity: 0.6,
                shadowRadius: 6,
                shadowOffset: {width: 4, height: 8},
              }}>
              <View
                style={{
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000000',
                  }}>
                  Office for Sale
                </Text>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
                  ₹ 234.56 Cr | Office 1200 sq-ft
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 4,
                  marginTop: 5,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#000000',
                    }}>
                    Abhishek Sharme
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'gilroy_medium',
                      color: '#103859',
                      fontSize: 12,
                      fontWeight: '600',
                    }}>
                    Posted on 14/11/2023
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#000000',
                      marginEnd: 5,
                    }}>
                    +91980987986
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 32, // Adjust the height as needed
                      borderRadius: 5, // Rounded corners
                      borderColor: '#FF0000', // Red color for the border
                      borderWidth: 1,
                      marginTop: 4,
                    }}
                    activeOpacity={0.8} // Adjust the opacity when pressed
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#F44336', // Red background color
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'googlesansregular', // Use your desired font family
                          paddingHorizontal: 28,
                          color: 'white',
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        Get Phone No.
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
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
                elevation: 3, // Android elevation for shadow
                shadowColor: '#000000', // iOS shadow properties
                shadowOpacity: 0.6,
                shadowRadius: 6,
                shadowOffset: {width: 4, height: 8},
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 4,
                  marginTop: 5,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Super build-up Area
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      1200 sq-ft
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Price
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      ₹ 234.56 Cr
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 4,
                  marginTop: 5,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Society/ Projects
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Brilliant Sapphire
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Location
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Vijay Nager, Indore Madhya Pradesh
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 4,
                  marginTop: 5,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Configuration
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      4 Cabin
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Status/Possession
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Under - Construction
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 4,
                  marginTop: 5,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Sale Type
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Resale
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Floor
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      7th Floor ( Out of 7th Floor )
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 4,
                  marginTop: 5,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Super build-up Area
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      1200 sq-ft
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../images/resize.png')} // Replace with your image
                  />
                  <View
                    style={{
                      alignItems: 'flex-start',
                      marginStart: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#666666',
                      }}>
                      Price
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      ₹ 234.56 Cr
                    </Text>
                  </View>
                </View>
              </View>
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
                elevation: 3, // Android elevation for shadow
                shadowColor: '#000000', // iOS shadow properties
                shadowOpacity: 0.6,
                shadowRadius: 6,
                shadowOffset: {width: 4, height: 8},
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 44, // Adjust the height as needed
                  borderRadius: 5, // Rounded corners
                  overflow: 'hidden', // Clip child components to rounded borders
                  borderColor: '#FF0000', // Red color for the border
                  borderWidth: 1, // Border width
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.8}>
                <Text
                  style={{
                    fontFamily: 'googlesansregular',
                    color: '#F44336',
                    fontSize: 18,
                    fontWeight: '800',
                  }}>
                  Enquiry Now
                </Text>
              </TouchableOpacity>
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
                elevation: 3, // Android elevation for shadow
                shadowColor: '#000000', // iOS shadow properties
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
                    flexDirection: 'row',
                    height: 44, // Adjust the height as needed
                    borderRadius: 5, // Rounded corners
                    overflow: 'hidden', // Clip child components to rounded borders
                    borderColor: '#FF0000', // Red color for the border
                    borderWidth: 1, // Border width
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  activeOpacity={0.8}>
                  <Image
                    style={{width: 24, height: 24, marginEnd: 10}}
                    source={require('../images/chat.png')}
                  />
                  <Text
                    style={{
                      fontFamily: 'googlesansregular',
                      color: '#F44336',
                      fontSize: 18,
                      fontWeight: '800',
                    }}>
                    Chat
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 44, // Adjust the height as needed
                    borderRadius: 5, // Rounded corners
                    overflow: 'hidden', // Clip child components to rounded borders
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F44336',
                    marginStart: 10,
                  }}
                  activeOpacity={0.8}>
                  <Text
                    style={{
                      fontFamily: 'googlesansregular', // Use your desired font family
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Contact Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PropertyDetails;

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
    bottom: 10,
    start: 8,
    backgroundColor: '#303030',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },
  imageCountText: {
    color: 'white',
    fontSize: 14,
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
