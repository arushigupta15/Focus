/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useState} from 'react';
import JournalHome from './JournalHome';

const Status = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState('1');
  const [highlightColor1, setHighlightColor1] = useState('black');
  const [highlightColor2, setHighlightColor2] = useState('black');
  const [highlightColor3, setHighlightColor3] = useState('black');
  return (
    <View
      style={{
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}>
      <Image
        source={require('./images/meditation.png')}
        style={{width: 300, height: 250}}
      />
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          fontWeight: '500',
          marginTop: 20,
        }}>
        Journal
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#C3B1E1',
          fontWeight: '400',
          marginTop: 10,
          marginBottom: 50,
          paddingLeft: 25,
          paddingRight: 25,
          textAlign: 'center',
        }}>
        Regulate your emotions. How are you feeling?
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            setStatus('1');
            setHighlightColor1('white');
            setHighlightColor2('black');
            setHighlightColor3('black');
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              margin: 15,
              borderColor: highlightColor1,
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
            }}
            source={require('./images/happiness.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatus('2');
            setHighlightColor2('white');
            setHighlightColor1('black');
            setHighlightColor3('black');
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              margin: 15,
              borderColor: highlightColor2,
              borderWidth: 2,
              borderRadius: 10,
            }}
            source={require('./images/nervous.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatus('3');
            setHighlightColor3('white');
            setHighlightColor1('black');
            setHighlightColor2('black');
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              margin: 15,
              borderColor: highlightColor3,
              borderWidth: 2,
              borderRadius: 10,
            }}
            source={require('./images/lonely.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableHighlight
        onPress={() => {
          setHighlightColor1('black');
          setHighlightColor2('black');
          setHighlightColor3('black');
          navigation.navigate('JournalHome', {paramKey: status});
        }}>
        <Image
          source={require('./images/right-arrow.png')}
          style={{width: 25, height: 25, margin: 20}}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Status;
