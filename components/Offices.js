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

import axios from 'axios';
import qs from 'qs';

const Offices = ({navigation}) => {
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
        setoffices(responseData.office_sell);
      } else {
        // Handle other status scenarios if needed
        console.log('record not found.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const services = [
  //   {
  //     id: '0',
  //     image:
  //       'https://bharatpropertys.com/Agent/property_uploads/3c92871586de4111d6e6e7591b0e29a2.frrt.jpg',
  //     name: 'Washing',
  //   },
  //   {
  //     id: '1',
  //     image:
  //       'https://bharatpropertys.com/Agent/project_image/8cfa7ff8439b92d8443b7e654001708e.IMG_1695370663098.jpg',
  //     name: 'Laundry',
  //   },
  //   {
  //     id: '2',
  //     image:
  //       'https://bharatpropertys.com/Agent/project_image/d48517f04f158dab274bf3743caa3725.IMG_1695370663321.jpg',
  //     name: 'Wash & Iron',
  //   },
  //   {
  //     id: '3',
  //     image:
  //       'https://bharatpropertys.com/Agent/property_uploads/01bc651a4f15e0e08932f614edccd5e6.fsdscf.jpg',
  //     name: 'Cleaning',
  //   },
  //   {
  //     id: '4',
  //     image:
  //       'https://bharatpropertys.com/Agent/property_uploads/3c92871586de4111d6e6e7591b0e29a2.frrt.jpg',
  //     name: 'Washing',
  //   },
  //   {
  //     id: '5',
  //     image:
  //       'https://bharatpropertys.com/Agent/project_image/8cfa7ff8439b92d8443b7e654001708e.IMG_1695370663098.jpg',
  //     name: 'Laundry',
  //   },
  //   {
  //     id: '6',
  //     image:
  //       'https://bharatpropertys.com/Agent/project_image/d48517f04f158dab274bf3743caa3725.IMG_1695370663321.jpg',
  //     name: 'Wash & Iron',
  //   },
  //   {
  //     id: '7',
  //     image:
  //       'https://bharatpropertys.com/Agent/property_uploads/01bc651a4f15e0e08932f614edccd5e6.fsdscf.jpg',
  //     name: 'Cleaning',
  //   },
  //   {
  //     id: '8',
  //     image:
  //       'https://bharatpropertys.com/Agent/project_image/d48517f04f158dab274bf3743caa3725.IMG_1695370663321.jpg',
  //     name: 'Wash & Iron',
  //   },
  //   {
  //     id: '9',
  //     image:
  //       'https://bharatpropertys.com/Agent/property_uploads/01bc651a4f15e0e08932f614edccd5e6.fsdscf.jpg',
  //     name: 'Cleaning',
  //   },
  // ];
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
          Popular Office Space Properties
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Properties')}>
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
        {offices.map((office, index) => (
          <Pressable
            style={{
              width: 240,
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

            <View style={styles.relativeContainer}>
              {office.propertyimage.length > 0 &&
              office.propertyimage[0].property_image ? (
                <Image
                  source={{uri: office.propertyimage[0].property_image}}
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

              {/* <Image
                source={{
                  uri: office.propertyimage[0].property_image,

                  // uri: 'https://bharatpropertys.com/Agent/property_uploads/8fc5068ab912300d8ec5eb3fa216b17f.rdf.jpg',
                }}
                style={styles.propertyImage}
                resizeMode="cover"
              /> */}

              <View style={styles.imageCountContainer}>
                <Text style={styles.imageCountText}>
                  {office.propertyimage.length}+
                </Text>
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
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#000000',
                  }}>
                  {office.subcategoryid}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    alignSelf: 'flex-end',
                    color: '#000000',
                  }}>
                  {office.maincategoryid}
                </Text>
              </View>
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
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#000000',
                  }}>
                  {/* ₹ 1.56 Cr */}₹ {office.price}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    alignSelf: 'flex-end',
                    color: '#000000',
                  }}>
                  {/* 8560 sq-ft */}
                  {office.builtuparea + ' ' + office.builtup_unit_type}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#000000',
                  marginVertical: 4,
                  marginHorizontal: 6,
                }}>
                Shekhar Central
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#000000',
                  alignItems: 'flex-start',
                  marginBottom: 4,
                  marginHorizontal: 6,
                }}>
                {office.neighborhood +
                  ', ' +
                  office.country_state_name.replace('mp', 'Madhya Pradesh')}
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
                  {office.facing_type}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    alignSelf: 'flex-end',
                    color: '#000000',
                  }}>
                  {office.possession}
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
                      Read More
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

export default Offices;

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
