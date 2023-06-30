/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Screen1 from './Screen1';
const Splash = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.splash} onPress={()=> navigation.navigate('Screen1')}>
      <LottieView source={require('../src/assets/Animation - 1680507935595.json')}
      style={{width:100, alignSelf:'center', marginVertical:170}}
        autoPlay
        loop={false}
        resizeMode="contain"
        autoSize={false}
        speed={0.4}
        onAnimationFinish={() => {
          console.log('animation finished');
          navigation.navigate(Screen1 as never);
        }
      }
       />
      </Pressable>
  );
};
const styles = StyleSheet.create({
  splash: {
    backgroundColor: '#000000',
    flex: 1,
    alighItems: 'center',
    margin: 0,
    color:'#FDFDFF',
  },
  text: {
    alignItems: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
});
export default Splash;
