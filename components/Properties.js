import {useState, useEffect} from 'react';
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
import axios from 'axios';
import qs from 'qs';

const TouchableComponent = Platform.select({
  android: () => TouchableNativeFeedback,
  default: () => TouchableOpacity,
})();

const Properties = ({navigation}) => {
  const [offices, setoffices] = useState([]);
  useEffect(() => {
    getOfficeCall();
  }, []);
  const getOfficeCall = async () => {
    try {
      const data = qs.stringify({
        module_action: 'property_get_sell',
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
        console.log('response...' + JSON.stringify(responseData));
        setoffices(responseData.office_sell);
      } else {
        // Handle other status scenarios if needed
        console.log('record not found.');
      }
    } catch (error) {
      console.error(error);
    }
  };
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
              Filter Property
            </Text>
            <Text style={{fontSize: 13, fontWeight: '320', color: 'white'}}>
              38 Properties
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingStart: 5, paddingEnd: 5}}>
          <FlatList
            data={offices}
            keyExtractor={(office, index) => index.toString()}
            renderItem={({item}) => (
              <Pressable
                style={{
                  width: 'auto',
                  marginVertical: 2,
                  padding: 0,
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}
                onPress={() => navigation.navigate('PropertyDetails')}>
                <View>
                  <View
                    style={{
                      margin: 5,
                      paddingHorizontal: 9,
                      paddingVertical: 4,
                      borderRadius: 5,
                      alignSelf: 'flex-start', // Align to the left
                      // backgroundColor: '#CBFDE0D1', // Background color
                      backgroundColor: 'rgba(253, 224, 209, 0.6)', // Background color using RGB values with opacity
                    }}>
                    <Text
                      style={{
                        fontFamily: 'gilroy_bold',
                        textAlign: 'center', // Text alignment
                        textTransform: 'uppercase', // Transform text to uppercase
                        color: '#103859',
                        fontSize: 12,
                        fontWeight: '800',
                      }}>
                      Only On Bharat Projects
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 8,
                        marginStart: 2,
                        justifyContent: 'space-beween',
                      }}>
                      <View style={styles.relativeContainer}>
                        {item.propertyimage.length > 0 &&
                        item.propertyimage[0].property_image ? (
                          <Image
                            source={{
                              uri: item.propertyimage[0].property_image,
                            }}
                            style={styles.propertyImage}
                            resizeMode="cover"
                          />
                        ) : (
                          <Image
                            source={require('../images/no_image.jpeg')} // Provide your local asset path
                            style={styles.propertyImage}
                            resizeMode="cover"
                          />
                        )}

                        <View style={styles.imageCountContainer}>
                          <Text style={styles.imageCountText}>
                            {item.propertyimage.length} +
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: 2,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            color: '#FF0000',
                            marginVertical: 4,
                            marginHorizontal: 6,
                            justifyContent: 'space-beween',
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '600',
                              color: '#000000',
                            }}>
                            ₹ {item.price}
                          </Text>

                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '400',
                              flex: 1,
                              textAlign: 'right',
                              color: '#000000',
                            }}>
                            {item.builtuparea + ' ' + item.builtup_unit_type}
                          </Text>
                        </View>

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#707070',
                            alignItems: 'flex-start',
                            marginVertical: 4,
                            marginHorizontal: 6,
                          }}>
                          {item.neighborhood +
                            ', ' +
                            item.country_state_name.replace(
                              'mp',
                              'Madhya Pradesh',
                            )}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginHorizontal: 4,
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{width: 18, height: 18}}
                            source={{
                              uri: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '500',
                              color: '#000000',
                              marginStart: 6,
                            }}>
                            Brillient Square
                          </Text>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginHorizontal: 4,
                            marginVertical: 4,
                            alignItems: 'center',
                          }}>
                          <View>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '300',
                                color: '#000000',
                              }}>
                              built up-Area
                            </Text>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: '#000000',
                              }}>
                              8560 sq-ft
                            </Text>
                          </View>

                          <View
                            style={{
                              flex: 1,
                              position: 'absolute',
                              end: 0,
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '300',
                                color: '#000000',
                              }}>
                              status
                            </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#000000',
                              }}>
                              {item.possession}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        marginTop: 6,
                        marginBottom: 5,
                      }}>
                      <Image
                        style={{
                          width: 60,
                          height: 60,
                          marginStart: 12,
                          borderRadius: 30,
                        }}
                        source={{
                          uri: 'https://bharatpropertys.com/Agent/userimage/a5fdfa672284da6bf4f4326e2b3698bdIMG_1698222154900.jpg',
                        }}
                        // source={require('../images/ic_profile.png')} // Replace with your image
                      />
                      <View style={{marginLeft: 12}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            fontWeight: '800',
                          }}>
                          Adarsh Kumar Shukla
                        </Text>

                        <TouchableOpacity
                          style={{
                            marginTop: 4,
                            marginBottom: 2,
                            paddingHorizontal: 16,
                            paddingVertical: 5,
                            backgroundColor: '#FF6C3E', // Adjust to match your background color
                            borderRadius: 6, // Adjust to match your corner radius
                          }}
                          onPress={() => {
                            // Handle click action here
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 13,
                              fontWeight: '600',
                            }}>
                            FEATURED DEALER
                          </Text>
                        </TouchableOpacity>
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
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={{
                            width: 60,
                            height: 60,
                            marginStart: 8,
                            borderRadius: 30,
                          }}
                          source={require('../images/certificate_icon.png')}
                          // source={{
                          //   uri: 'https://bharatpropertys.com/Agent/userimage/a5fdfa672284da6bf4f4326e2b3698bdIMG_1698222154900.jpg',
                          // }}
                          // source={require('../images/certificate_icon.png')} // Replace with your image
                        />
                      </View>
                    </View>

                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#707070',
                        alignItems: 'flex-start',
                        marginBottom: 8,
                        marginHorizontal: 8,
                      }}>
                      11405 sq-ft comercial for sell at vijay nagar.
                    </Text>

                    <View
                      style={{
                        color: '#FF0000',
                        flexDirection: 'row',
                        flex: 1,
                        marginBottom: 10,
                        marginHorizontal: 6,
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 36, // Adjust the height as needed
                          borderRadius: 5, // Rounded corners
                          overflow: 'hidden', // Clip child components to rounded borders
                          borderColor: '#FF0000', // Red color for the border
                          borderWidth: 1,
                          flex: 1,
                        }}
                        activeOpacity={0.8}>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: '#F44336', // Red background color
                            borderRadius: 8,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'googlesansregular',
                              paddingHorizontal: 10,
                              color: 'black',
                              fontSize: 16,
                              fontWeight: '600',
                            }}>
                            Send Enquiry
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          height: 36, // Adjust the height as needed
                          borderRadius: 5, // Rounded corners
                          marginStart: 10,
                          overflow: 'hidden', // Clip child components to rounded borders
                          borderColor: '#FF0000', // Red color for the border
                          borderWidth: 1,
                          flex: 1,
                        }}
                        activeOpacity={0.8} // Adjust the opacity when pressed
                      >
                        <View style={styles.rectangle}>
                          <Text
                            style={{
                              fontFamily: 'googlesansregular', // Use your desired font family
                              paddingHorizontal: 10,
                              color: 'white',
                              fontSize: 16,
                              fontWeight: '600',
                            }}>
                            Posted By Agent
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Properties;

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
