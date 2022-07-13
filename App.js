import React, { useRef } from 'react';
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
  const countryCodeRef = useRef();
  const phoneNumberRef = useRef();
  const messageRef = useRef();

  const submitHandler = () => {

    if(isValid(countryCodeRef.current.value) && isValid(phoneNumberRef.current.value) && isValid(messageRef.current.value)) {
      const form = {
        countryCode: countryCodeRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        message: messageRef.current.value
      };
      // do request
      console.log(form);
      resetForm();
    }else{
      // invalid form
      console.log('Invalid form');
    }
  };

  const resetForm = () => {
    countryCodeRef.current.value= '';
    phoneNumberRef.current.value= '';
    messageRef.current.value= '';  
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
          ref={countryCodeRef}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Phone Number"
          ref={phoneNumberRef}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Message"
          ref={messageRef}
        />
        <ActionsButtons 
          action={submitHandler}
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
    fontSize: 40,
    color: '#008F8C',
    fontWeight: 'bold'
  },
  subtitle: {
    position: 'relative',
    top: '-45%',
    left: 20,
    fontSize: 10,
    fontSize: 15,
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
