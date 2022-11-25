import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  modal,
  Image,
  TextArea,
} from 'react-native';

class App extends React.Component {
  render() {
    state = {
      show: false,
    };

    return (
      <View style={styles.body}>
        <ImageBackground
          source={require('./assets/images/pinkdrop.jpg')}
          style={styles.imgwall}
          resizeMode="cover">
          <Text
            style={{
              backgroundColor: '#fc8eac',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '4%',
              marginLeft: '19%',
              marginBottom: '3%',
              textAlign: 'center',
              borderWidth: 1,
              borderRadius: 10,
              height: 40,
              justifyContent: 'center',
              paddingTop: '1%',
              width: 200,
              borderColor: '#fe6c9e',
            }}>
            Notifications!
          </Text>

          <Text style={styles.subtask2}>Done</Text>

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
                    source={require('./assets/images/noti.png')}
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
                    source={require('./assets/images/noti.png')}
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
                    source={require('./assets/images/noti.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtask}>Pending </Text>
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
                    source={require('./assets/images/noti.png')}
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
                    source={require('./assets/images/noti.png')}
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
                    source={require('./assets/images/noti.png')}
                    style={styles.img4}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fc8eac',
              height: 50,
              border: 2,
              borderColor: 'red',
              borderRadius: 10,
              marginTop: '25%',
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
                style={{height: 35, marginTop: '6%', marginLeft: '0%'}}
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
  img4: {
    backgroundColor: '#white',
    height: 28,
    width: 25,
    marginTop: '30%',
    marginLeft: '9%',
    paddingLeft: '2%',
  },
  subtask: {
    backgroundColor: '#fc8eac',
    height: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '40%',
    marginLeft: '10%',
    paddingTop: '1%',
    borderRadius: 10,
    fontSize: 15,
    marginTop: '6%',
  },
  subtask2: {
    backgroundColor: '#fc8eac',
    height: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '40%',
    marginLeft: '10%',
    paddingTop: '1%',
    borderRadius: 10,
    marginTop: '5%',
    fontSize: 15,
  },

  imgwall: {
    height: 720,
    width: 380,
  },
  inp: {
    marginLeft: '10%',
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: '75%',
    marginTop: '5%',
  },
  inp2: {
    marginLeft: '10%',
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: '75%',
    marginTop: '6%',
  },

  img3: {
    marginTop: '1%',
    height: 35,
    width: 35,
    backgroundColor: '#fc8eac',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#fc8eac',
    marginBottom: '5%',
  },
  txt: {
    marginLeft: '10%',
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: '75%',
    marginTop: '7%',
    flexDirection: 'row',
  },
  inp1: {
    marginLeft: '1%',
    marginTop: '0%',
  },
  img2: {
    marginLeft: '60%',
    height: 30,
    marginTop: '1%',
    width: 25,
  },
  inp3: {
    marginLeft: '10%',
    borderWidth: 2,
    borderRadius: 10,
    height: 90,
    width: '75%',
    marginTop: '7%',
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
});

export default App;
