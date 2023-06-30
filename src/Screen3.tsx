/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// In App.js in a new project
//import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableHighlight, Image} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Screen4 from './Screen4';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const Screen3 = () => {
    const navigation = useNavigation();
    const [hours, setHours] = useState('');
  return(
        <View style={{alignContent: 'center',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor: 'black'}}>
          <Image source = {require('./images/time.png')} style={{width: 300, height: 250}}/>
          <Text
              style={{fontSize: 22, color:'white',fontWeight:'500', marginTop:20}}
            >Set a Time</Text>
            <Text
              style={{fontSize: 16, color:'#C3B1E1',fontWeight:'400', marginTop:10, marginBottom:50, paddingLeft:25, paddingRight:25, textAlign: 'center'}}
            >How long would you like to Focus for today?</Text>
            <TextInput
              style={{marginTop:15, marginBottom:15, marginLeft:40, marginRight:40, fontWeight:'500', fontSize:16, padding: 10, color:'#FFFFFF', borderBottomWidth: 1, borderColor: '#FFFFFF', textAlign: 'center', alignContent: 'center', alignItems: 'center', }}
              onChangeText={(hours) => setHours(hours)}
              placeholder={'Enter Hours ...'}
              placeholderTextColor={'#C3B1E1'}
              value={hours}
            />
            <TouchableHighlight onPress = {() => navigation.navigate('Screen4', {paramKey: hours})} style={{borderColor:'#C3B1E1', backgroundColor: '#C3B1E1',borderWidth:1, borderRadius:5, shadowColor:'#393D3F', margin: 20}}>
              <Text style={{marginTop:10, marginBottom:10, marginLeft:15, marginRight:15, fontWeight:'500', fontSize:16, color:'#393D3F'}}>Start Working!</Text>
            </TouchableHighlight>
        </View>
  );
};

export default Screen3;
