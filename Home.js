import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require('./assets/images/pinkdrop.jpg')}
          style={styles.imgwall}
          resizeMode="cover">
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.catg}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingBottom: 8,
                }}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catg}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingBottom: 8,
                }}>
                Work
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catg}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingBottom: 8,
                }}>
                Personal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.catg}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingBottom: 8,
                }}>
                Birthday
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: '#fc8eac',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '4%',
              marginLeft: '3%',
              marginBottom: '3%',
              textAlign: 'center',
            }}>
            Your Tasks!{' '}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row', width: '98%'}}>
              <Text
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  marginTop: '3%',
                  marginLeft: '10%',
                  width: 29,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <Image
                  source={require('./assets/images/icons8-paper-clip-64 (1).png')}
                  style={styles.img2}
                />
              </Text>

              <TouchableOpacity style={styles.tasks}>
                <Text
                  style={{
                    justifyContent: 'space-around',
                    paddingTop: 3,
                    color: 'black',
                    fontSize: 17,
                  }}>
                  Mad Quiz1
                </Text>

                <Text style={{fontSize: 10, color: 'black'}}>
                  Created on: 02/11/2022{' '}
                </Text>
              </TouchableOpacity>

              <View style={styles.cont2}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/images/icons8-trash-30.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row', width: '98%'}}>
              <Text
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  marginTop: '3%',
                  marginLeft: '10%',
                  width: 29,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <Image
                  source={require('./assets/images/icons8-paper-clip-64 (1).png')}
                  style={styles.img2}
                />
              </Text>

              <TouchableOpacity style={styles.tasks}>
                <Text
                  style={{
                    justifyContent: 'space-around',
                    paddingTop: 3,
                    fontSize: 17,
                    color: 'black',
                  }}>
                  React Native
                </Text>

                <Text style={{fontSize: 10, color: 'black'}}>
                  Created on: 02/11/2022{' '}
                </Text>
              </TouchableOpacity>

              <View style={styles.cont2}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/images/icons8-trash-30.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row', width: '98%'}}>
              <Text
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  marginTop: '3%',
                  marginLeft: '10%',
                  width: 29,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <Image
                  source={require('./assets/images/icons8-paper-clip-64 (1).png')}
                  style={styles.img2}
                />
              </Text>

              <TouchableOpacity style={styles.tasks}>
                <Text
                  style={{
                    justifyContent: 'space-around',
                    paddingTop: 3,
                    fontSize: 17,
                    color: 'black',
                  }}>
                  Semester Project
                </Text>

                <Text style={{fontSize: 10, color: 'black'}}>
                  Created on: 02/11/2022{' '}
                </Text>
              </TouchableOpacity>

              <View style={styles.cont2}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/images/icons8-trash-30.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row', width: '98%'}}>
              <Text
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  marginTop: '3%',
                  marginLeft: '10%',
                  width: 29,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <Image
                  source={require('./assets/images/icons8-paper-clip-64 (1).png')}
                  style={styles.img2}
                />
              </Text>

              <TouchableOpacity style={styles.tasks}>
                <Text
                  style={{
                    justifyContent: 'space-around',
                    paddingTop: 3,
                    fontSize: 17,
                    color: 'black',
                  }}>
                  FYP
                </Text>

                <Text style={{fontSize: 10, color: 'black'}}>
                  Created on: 02/11/2022{' '}
                </Text>
              </TouchableOpacity>

              <View style={styles.cont2}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/images/icons8-trash-30.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row', width: '98%'}}>
              <Text
                style={{
                  height: 50,
                  backgroundColor: 'white',
                  marginTop: '3%',
                  marginLeft: '10%',
                  width: 29,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <Image
                  source={require('./assets/images/icons8-paper-clip-64 (1).png')}
                  style={styles.img2}
                />
              </Text>

              <TouchableOpacity style={styles.tasks}>
                <Text
                  style={{
                    justifyContent: 'space-around',
                    paddingTop: 3,
                    fontSize: 17,
                    color: 'black',
                  }}>
                  ST Quiz
                </Text>

                <Text style={{fontSize: 10, color: 'black'}}>
                  Created on: 02/11/2022{' '}
                </Text>
              </TouchableOpacity>

              <View style={styles.cont2}>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/images/icons8-trash-30.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              source={require('./assets/images/icons8-plus-50.png')}
              style={styles.img5}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fc8eac',
              height: 50,
              border: 2,
              borderColor: 'red',
              borderRadius: 10,
              marginBottom: '5%',
              width: '85%',
              marginLeft: '5%',
            }}>
            <TouchableOpacity style={{marginLeft: '20%'}}>
              <Image
                source={require('./assets/images/icons8-tasklist-50.png')}
                style={{
                  height: 40,
                  width: 25,
                  marginTop: '5%',
                  marginLeft: '28%',
                  marginBottom: '3%',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: '20%'}}>
              <Image
                source={require('./assets/images/noti.png')}
                style={{height: 35, marginTop: '6%', marginLeft: '30%'}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    border: 0,
    marginTop: '9%',
  },
  img7: {
    height: 30,
    width: 30,
    marginLeft: '75%',
    marginTop: '2%',
  },

  img2: {
    backgroundColor: '#white',
    border: 0,
    height: 20,
    width: 19,
    marginLeft: '35%',
    marginTop: '9%',
  },
  catg: {
    backgroundColor: '#fc8eac',
    border: 0,
    borderRadius: 10,
    color: 'white',
    marginLeft: '4%',
    textAlign: 'center',
    height: 30,
    width: 69,
    justifyContent: 'space-around',
    fontSize: 15,
    paddingTop: 4,
    marginTop: '3%',
  },
  tasks: {
    backgroundColor: 'white',
    height: 50,
    fontSize: 16,
    marginTop: '3%',
    width: '60%',
    paddingLeft: '3%',
    paddingTop: '1%',
  },
  imgwall: {
    height: 720,
    width: 380,
  },
  img4: {
    backgroundColor: '#white',
    height: 28,
    width: 25,
    marginTop: '30%',
    marginLeft: '9%',
    paddingLeft: '2%',
  },
  mod1: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '4%',
    width: '75%',
    marginLeft: '10%',
    height: 40,
  },
  cont2: {
    backgroundColor: 'white',
    border: 0,
    height: 50,
    width: 35,
    marginTop: '3%',
    flexDirection: 'row',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  img5: {
    marginLeft: '75%',
    height: 50,
    marginTop: '50%',
  },
  img: {
    backgroundColor: '#white',
    height: 20,
    width: 20,
    marginTop: '55%',
    marginLeft: '12%',
    paddingLeft: '2%',
  },
  imgwall2: {
    height: 170,
    width: 200,
    borderWidth: 2,
  },
});

export default App;
