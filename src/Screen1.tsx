/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// In App.js in a new project
//import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import Status from './Status';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Distractions from './Distractions';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{
      alignContent: 'center',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#000000',
    }}>
      <Image
        style={{
          height: 200,
          width: 350,
          marginTop: 100,
        }}
        source={require('./images/psychology.png')}
      />
      <Text
        style={{ fontSize: 22, color: 'white', fontWeight: '500', marginTop: 50 }}
      >Welcome to Focus</Text>
      <Text
        style={{ fontSize: 16, color: '#C3B1E1', fontWeight: '400', marginTop: 10, marginBottom: 50, paddingLeft: 25, paddingRight: 25, textAlign: 'center' }}
      >Get productive without compromising mental health</Text>
      <TouchableHighlight onPress={() => navigation.navigate(Status as never)} >
        <Image source={require('./images/right-arrow.png')}
          style={{ width: 25, height: 25, margin: 50 }}
        />
      </TouchableHighlight>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate(Status as never)} style={{ flexDirection: 'column', margin: 10 }}>
          <Image source={require('../src/images/journal.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Screen2 as never)} style={{ flexDirection: 'column', margin: 10  }}>
          <Image source={require('../src/images/checklist.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Checklist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Screen3 as never)} style={{ flexDirection: 'column', margin: 10  }}>
          <Image source={require('../src/images/stopwatch.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Distractions as never)} style={{ flexDirection: 'column', margin: 10  }}>
          <Image source={require('../src/images/bunko.png')} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Irene</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#C3B1E1',
    fontSize: 11,
    fontWeight: '500',
    margin: 10,
  },
  buttonImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },

});


export default Screen1;
