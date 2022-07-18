import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import ActionsButtons from './components/ActionButtons/index';

const {width, height} = Dimensions.get('screen');

const isValid = (input) => {
  if(!input) {
    return false;
  }
  return input.trim() !== '' ? true : false;
}

export default function App() {

  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = () => {
    if(isValid(code) && isValid(phone) && isValid(message)) {
      console.log({
        code,
        phone,
        message
      });
      resetForm();
    }else{
      console.log('Invalid form!');
    }
  };

  const resetForm = () => {
    setCode('');
    setPhone('');
    setMessage('');
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerSVG}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Write your message</Text>
        <Text style={styles.subtitle}>Write the message you will send to the unknown number!</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="Country code"
          value={code}
          onChangeText={setCode}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
        />
        <ActionsButtons 
          action={submitHandler}
          label="Send message"
        />
        <StatusBar style='auto'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSVG: {
    width: width,
    height: 250,
    backgroundColor: '#015958'
  },
  title: {
    position: 'relative',
    top: '-50%',
    left: 20,
    fontSize: 35,
    color: '#008F8C',
    fontWeight: 'bold'
  },
  subtitle: {
    position: 'relative',
    top: '-45%',
    left: 20,
    fontSize: 12,
    color: 'white',
  },
  textInput: {
    position: 'relative',
    top: '-20%',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#fff'
  }
});
