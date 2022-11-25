import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  modal,
  Image,
  TextArea,
  Modal,
} from 'react-native';

//import DatePicker from the package we installed

class App extends React.Component {
  state = {
    show: false,
  };

  render() {
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
            MY Tasks!
          </Text>
          <View style={{flexDirection: 'row', marginTop: '8%'}}>
            <Text style={styles.subtask2}>MAD QUIZ</Text>

            <View style={{flexDirection: 'row', height: 30}}>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: '48%',
                  backgroundColor: '#fc8eac',
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: '#fc8eac',
                }}
                onPress={() => {
                  this.setState({show: true});
                }}>
                <Image
                  source={require('./assets/images/icons8-edit-26.png')}
                  style={styles.img4}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.inp}>Title:</Text>
              <Text style={styles.inp2}>MAD Quiz 1</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.inp}>Created On:</Text>
              <Text style={styles.inp2}>11/11/2011</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.inp}>Description:</Text>
              <Text style={styles.inp2}>
                Prepare the javascript part. Prepare React Native. 1
                Understanding question. 1 from React Native
              </Text>
            </View>
          </View>

          <Text style={styles.subtask}>My Subtasks </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.inp}>Subtask 1:</Text>
            <Text style={styles.inp2}>Javascript Concepts</Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                marginLeft: '3%',
                backgroundColor: '#fc8eac',
                borderWidth: 2,
                borderRadius: 50,
                marginTop: '4%',
                borderColor: '#fc8eac',
              }}>
              <Image
                source={require('./assets/images/icons8-trash-26.png')}
                style={styles.img3}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.inp}>Subtask 2:</Text>
            <Text style={styles.inp2}>React Native Concepts</Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                marginLeft: '3%',
                backgroundColor: '#fc8eac',
                borderWidth: 2,
                borderRadius: 50,
                marginTop: '4%',
                borderColor: '#fc8eac',
              }}>
              <Image
                source={require('./assets/images/icons8-trash-26.png')}
                style={styles.img3}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.inp}>Subtask 3:</Text>
            <Text style={styles.inp2}>Crud Operations</Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                marginLeft: '3%',
                backgroundColor: '#fc8eac',
                borderWidth: 2,
                borderRadius: 50,
                marginTop: '4%',
                borderColor: '#fc8eac',
              }}>
              <Image
                source={require('./assets/images/icons8-trash-26.png')}
                style={styles.img3}
              />
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
              marginBottom: '15%',
              width: '80%',
              marginLeft: '8%',
              marginTop: '35%',
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

            <TouchableOpacity style={{marginLeft: '10%'}}>
              <Image
                source={require('./assets/images/noti.png')}
                style={{height: 35, marginTop: '6%', marginLeft: '0%'}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Modal visible={this.state.show} transparent={true}>
          <View style={{flex: 1}}>
            <View
              style={{
                margin: 30,
                backgroundColor: '#ffd1dc',
                flex: 0,
                borderRadius: 8,
                borderWidth: 2,
                marginLeft: '10%',
                marginTop: '20%',
              }}>
              <ImageBackground
                source={require('./assets/images/Pretty-Cherry-Blossom-iPhone-Wallpaper.jpg')}
                style={styles.imgwall2}
                resizeMode="cover">
                <Text
                  style={{
                    backgroundColor: '#fc8eac',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 17,
                    marginTop: '4%',
                    marginLeft: '10%',
                    marginBottom: '3%',
                    textAlign: 'center',
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 30,
                    justifyContent: 'center',
                    paddingTop: '1%',
                    width: 200,
                    borderColor: '#fe6c9e',
                  }}>
                  Edit Your Task!
                </Text>
                <TextInput
                  style={styles.mod1}
                  placeholder="  MAD Quiz 1"></TextInput>
                <TextInput
                  style={styles.mod1}
                  placeholder="  Date: 11/11/2022"></TextInput>
                <TextInput
                  multiline={5}
                  style={styles.mod2}
                  placeholder="  Prepare JS part. React Native, 1 Understanding question. 1 from React Native"></TextInput>
                <Text style={styles.subtask}>My Subtasks </Text>
                <TextInput
                  style={styles.mod1}
                  placeholder="  Javascript Concepts"></TextInput>
                <TextInput
                  style={styles.mod1}
                  placeholder="  React Components"></TextInput>
                <TextInput
                  style={styles.mod1}
                  placeholder="  Crud Operations"></TextInput>

                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                    marginLeft: '2%',
                    borderRadius: 50,
                  }}
                  onPress={() => {
                    this.setState({show: false});
                  }}>
                  <Image
                    source={require('./assets/images/icons8-sync-48.png')}
                    style={styles.img5}
                  />
                </TouchableOpacity>
              </ImageBackground>{' '}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    border: 0,
    marginTop: '9%',
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
    fontSize: 15,
  },

  imgwall: {
    height: 720,
    width: 380,
  },
  imgwall2: {
    height: 435,
    width: 250,
  },
  inp: {
    marginLeft: '8%',
    fontSize: 18,
    marginTop: '4%',
    fontWeight: 'bold',
    width: '29%',
  },
  inp2: {
    fontSize: 18,
    marginTop: '4%',
    marginLeft: '3%',
    width: '55%',
    justifyContent: 'space-around',
  },
  img3: {
    height: 20,
    width: 20,
    marginLeft: '15%',
  },
  img4: {
    height: 20,
    width: 20,
    marginLeft: '15%',
    marginTop: '2%',
  },
  mod1: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '4%',
    width: '75%',
    marginLeft: '10%',
    height: 30,
  },
  mod2: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '4%',
    width: '75%',
    marginLeft: '10%',
    height: 60,
  },
  img5: {
    height: 30,
    width: 30,
    marginLeft: '75%',
    marginTop: '2%',
  },
});
export default App;
