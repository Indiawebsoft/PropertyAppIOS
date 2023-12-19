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

const Projects = ({navigation}) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getOfficeCall();
  }, []);
  const getOfficeCall = async () => {
    try {
      const data = qs.stringify({
        module_action: 'project_home_page',
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
        setProjects(responseData.top_project);
        console.log('response...' + projects);
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
        'https://bharatpropertys.com//Agent//project_image//952ed324da28901e28405f33d149a3c9.IMG_1695372090908.jpg',
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
          Ready To Move Projects
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('ProjectList')}>
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
        {projects.map((project, index) => (
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
              {project.projectimage.length > 0 &&
              project.projectimage[0].project_image ? (
                <Image
                  source={{uri: project.projectimage[0].project_image}}
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

              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  start: 0,
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
                    fontSize: 11,
                    fontWeight: '300',
                  }}>
                  Only On Bharat Projects
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                  backgroundColor: '#303030',
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontSize: 11}}>
                  {project.projectimage.length}+
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  bottom: 5,
                  left: 5,
                  // backgroundColor: '#303030',
                  backgroundColor: 'rgba(48, 48, 48, 0.8)', // 60% opacity black color
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white', fontSize: 11}}>
                  Posted: {project.post_date}
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
                  {project.projectname}
                </Text>

                {/* <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    alignSelf: 'flex-end',
                    color: '#000000',
                  }}>
                  Commercial
                </Text> */}
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
                  {project.totalsprice}
                </Text>

                {/* <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    alignSelf: 'flex-end',
                    color: '#000000',
                  }}>
                  8560 sq-ft
                </Text> */}
              </View>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: '#000000',
                  marginVertical: 4,
                  marginHorizontal: 6,
                }}>
                {project.property_types}
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
                {project.neighborhoods}
              </Text>

              <TouchableOpacity
                style={{
                  height: 40,
                  marginHorizontal: 3,
                  backgroundColor: '#FFFFFF',
                  paddingVertical: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
                // onPress={handlePress}
                activeOpacity={0.8} // Adjust the opacity when pressed
              >
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',

                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../images/phone_call.png')} // Replace with your image
                    style={{
                      width: 20,
                      height: 20,
                      padding: 3,
                      tintColor: '#FF0000',
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      marginLeft: 6,
                      fontFamily: 'googlesansextrabold',
                      color: '#FF0000',
                      fontSize: 16,
                      fontWeight: '400',
                    }}>
                    Contact Owner
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* <Text style={{textAlign: 'center', marginTop: 10}}>
              {service.name}
            </Text> */}
          </Pressable>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          backgroundColor: 'white',
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 2,
            visibility: 'visible',
          }}>
          <Text
            style={{
              color: '#303030',
              fontSize: 12,
              fontWeight: '600',
            }}>
            developed by
          </Text>
          <Text
            style={{
              fontFamily: 'gilroy_semi',
              color: 'black',
              fontSize: 14,
              fontWeight: '800',
              marginLeft: 5,
            }}>
            Bharat Propertys
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'googlesansbold',
            color: 'black',
            fontSize: 12,
            marginRight: 5,
            marginBottom: 5,
            fontWeight: '600',
          }}>
          v.1.0
        </Text>
      </View>
    </View>
  );
};

export default Projects;

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
