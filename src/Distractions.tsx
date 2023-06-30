/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Anxiety from './Anxiety';
import RNKommunicateChat from 'react-native-kommunicate-chat';
const Distractions = () => {
  const navigation = useNavigation();
  const [distraction, setDistraction] = useState('');

  // let conversationObject = {
  //   appId: '37a5d140c3cefd033cf31c77011e1fe26',
  // };

  const startConversation = () => {
    let conversationObject = {
      appId: '37a5d140c3cefd033cf31c77011e1fe26',
      isSingleConversation: false,
    };
    RNKommunicateChat.buildConversation(
      conversationObject,
      (response: string, responseMessage: string) => {
        if (response == 'Success') {
          console.log('Conversation successfully with id: ' + responseMessage);
        }
      },
    );
  };
  return (
    <View
      style={{
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
        padding: 30,
      }}>
      <Text
        style={{
          color: '#89CFF0',
          fontSize: 18,
          fontWeight: '700',
          lineHeight: 30,
          textAlign: 'center',
        }}>
        {' '}
        Talk to our Mental Health Bot, Irene to manage your stress or distractions.
      </Text>
      <TouchableOpacity onPress={() => startConversation()}>
        <Image
          source={require('../src/images/communication.png')}
          style={{height: 50, width: 50, margin: 100}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Distractions;
