/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from './src/Screen2';
import Screen1 from './src/Screen1';
import Status from './src/Status';
import Splash from './src/Splash';
import Screen3 from './src/Screen3';
import Screen4 from './src/Screen4';
import Distractions from './src/Distractions';
import { StatusBar } from 'react-native';
import { slideOverFromRightPreset, slideOverFromLeftPreset } from 'react-navigation-transition-slide-over';
import JournalHome from './src/JournalHome';

const App = () => {
  const MainStack = createStackNavigator();
  return(
      <NavigationContainer>
        <StatusBar
        animated={true}
        backgroundColor="#000000"
        hidden={true}
      />
      <MainStack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: true,
        ...slideOverFromRightPreset,
        ...slideOverFromLeftPreset,
        }}>
        <MainStack.Screen name="Splash" component={Splash}/>
        <MainStack.Screen name="Screen1" component={Screen1}/>
        <MainStack.Screen name="Status" component={Status}/>
        <MainStack.Screen name="JournalHome" component={JournalHome}/>
        <MainStack.Screen name="Screen2" component={Screen2}/>
        <MainStack.Screen name="Screen3" component={Screen3}/>
        <MainStack.Screen name="Screen4" component={Screen4}/>
        <MainStack.Screen name="Distractions" component={Distractions}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default App;