import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TextInput, Dimensions, Linking } from 'react-native';
import { getFilteredCountries } from './helpers/filter-country';
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
      goToWhatsApp();
      resetForm();
    }else{
      console.log('Invalid form!');
    }
  };

  const codeChangeHandler = (input) => {
    const countries = getFilteredCountries(input);
    console.log(countries);
    setCode(input);
  };


  const goToWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${message}&phone=${code + phone}`)
    return null;
  };

  const resetForm = () => {
    setCode('');
    setPhone('');
    setMessage('');
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Write your message</Text>
        <Text style={styles.subtitle}>Write the message you will send to the unknown number!</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="Country code"
          value={code}
          onChangeText={codeChangeHandler}
        />
        <TextInput 
          placeholder={'Phone Number'}
          style={styles.textInput}
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
          maxLength={10}
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
  containerHeader: {
    width: width,
    height: 250,
    backgroundColor: '#015958'
  },
  title: {
    position: 'relative',
    top: '-50%',
    left: 10,
    fontSize: 35,
    color: '#008F8C',
    fontWeight: 'bold'
  },
  subtitle: {
    position: 'relative',
    top: '-45%',
    left: 10,
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
