import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import qs from 'qs';

const Developers = ({navigation}) => {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    getOfficeCall();
  }, []);
  const getOfficeCall = async () => {
    try {
      const data = qs.stringify({
        module_action: 'user_list_developer',
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
        setDevelopers(responseData.developer);
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
    <View style={{paddingStart: 5, paddingEnd: 5}}>
      <View
        style={{
          paddingTop: 10,
          color: '#FF0000',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          marginBottom: 12,
          marginHorizontal: 8,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#000000',
          }}>
          Top Developer in Indore
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('TopDevelopers')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              alignSelf: 'flex-end',
              color: '#FF0000',
              textDecorationLine: 'underline',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {developers.map((developer, index) => (
          <Pressable
            style={{
              width: 250,
              marginHorizontal: 5,
              backgroundColor: 'white',
              padding: 0,
              borderRadius: 8,
            }}
            key={index}
            onPress={() => navigation.navigate('PropertyDetails')}>
            {/* <Image
              source={{uri: service.image}}
              style={{width: 70, height: 70}}
            /> */}

            {/* <View style={styles.relativeContainer}>
              <Image
                source={{uri: service.image}}
                style={styles.propertyImage}
                resizeMode="cover"
              />

              <View style={styles.imageCountContainer}>
                <Text style={styles.imageCountText}>1 +</Text>
              </View>
            </View> */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginVertical: 10,
              }}>
              {/* <Avatar
                rounded
                size={40}
                source={require('./path/to/your/image.png')}
                // You can replace the 'source' above with the appropriate image path
                containerStyle={styles.profileImage}
              /> */}
              {/* Or use Image component if you don't have the CircleImageView equivalent */}
              <Image
                style={{
                  width: 60,
                  height: 60,
                  marginStart: 20,
                  borderRadius: 30,
                }}
                source={{
                  uri: developer.userimage,
                  // uri: 'https://bharatpropertys.com/Agent/userimage/30aaa42805c04522a16e12d7e5b874378.jpeg',
                }}
              />
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontWeight: '800',
                  }}>
                  {developer.full_name}
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
                      fontSize: 12,
                      fontWeight: '600',
                    }}>
                    {developer.reraid_number}
                  </Text>
                  {/* Replace 'Your Rera Id' with the actual Rera Id */}
                </View>
              </View>
            </View>

            <View
              style={{
                marginHorizontal: 2,
              }}>
              <View
                style={{
                  color: '#FF0000',
                  flexDirection: 'row',
                  flex: 1,
                  marginVertical: 4,
                  marginHorizontal: 6,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '300',
                    color: '#303030',
                  }}>
                  Operating in : Ab Road, Vijay Nagar Indore
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
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
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                  }}>
                  For sale {developer.sell}+
                </Text>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    alignSelf: 'flex-end',
                    color: '#000000',
                  }}>
                  ₹ {developer.minimum_price} - {developer.maximum_price}
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
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#000000',
                  }}>
                  For Lease {developer.rent}+
                </Text>

                <Text
                  style={{
                    fontSize: 14,
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
                  style={styles.touchableContainer}
                  activeOpacity={0.8} // Adjust the opacity when pressed
                >
                  <View style={styles.rectangle1}>
                    <Text
                      style={{
                        fontFamily: 'googlesansregular', // Use your desired font family
                        paddingHorizontal: 10,
                        color: 'black',
                        fontSize: 14,
                        fontWeight: '400',
                      }}>
                      Contact Agent
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.touchableContainer}
                  activeOpacity={0.8} // Adjust the opacity when pressed
                >
                  <View style={styles.rectangle}>
                    <Text
                      style={{
                        fontFamily: 'googlesansregular', // Use your desired font family
                        paddingHorizontal: 10,
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '400',
                      }}>
                      See Properties
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* <Text style={{textAlign: 'center', marginTop: 10}}>
              {service.name}
            </Text> */}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Developers;

const styles = StyleSheet.create({
  container: {
    // Your main container styles
  },
  relativeContainer: {
    position: 'relative',
  },
  propertyImage: {
    width: 240,
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // Other styles for your image
  },
  imageCountContainer: {
    position: 'absolute',
    top: 8,
    start: 8,
    backgroundColor: '#303030',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },
  imageCountText: {
    color: 'white',
    fontSize: 11,
  },
  touchableContainer: {
    height: 26, // Adjust the height as needed
    borderRadius: 5, // Rounded corners
    overflow: 'hidden', // Clip child components to rounded borders
    borderColor: '#FF0000', // Red color for the border
    borderWidth: 1, // Border width
  },
  rectangle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44336', // Red background color
    borderRadius: 5, // Rounded corners, should match the outer container
  },
  rectangle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F44336', // Red background color
    borderRadius: 5, // Rounded corners, should match the outer container
  },
});
