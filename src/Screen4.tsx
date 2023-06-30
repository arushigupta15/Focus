/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { Image, NativeModules, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useEffect, useState } from 'react';
import Distractions from './Distractions';
import ConfettiCannon from 'react-native-confetti-cannon';

const Screen4 = ({ route }) => {
  let explosion: ConfettiCannon | null;
  const hr = route.params.paramKey;
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState(25 * 60);
  const { OverlayModule } = NativeModules;

  const handleExplosion = () => {
    explosion && explosion.start();
    ToastAndroid.show('Congratulations!', 3);
  };

  let sessions: number = (hr * 60) / 25;
  let sessionsCompleted : number = 0;
  function pause(): void {
    throw new Error('Function not implemented.');
  }
  const children = (remainingTime: number) => {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    let secondsString: string = seconds.toString();
    let minutesString: string = minutes.toString();
    if (seconds < 10) { secondsString = '0' + seconds.toString(); }
    if (minutes < 10) { minutesString = '0' + minutes.toString(); }
    return `${minutesString}:${secondsString}`;
  };
  return (
    <View
      style={{
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}>
      <View style={{ alignContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'black' }}>
        <CountdownCircleTimer
          strokeWidth={3}
          size={300}
          isPlaying={playing}
          duration={duration}
          colors={['#FF91AE', '#FFCBDB', '#CB99C7', '#B78FCB']}
          colorsTime={[20 * 60, 15 * 60, 10 * 60, 5 * 60]}
          isSmoothColorTransition = {true}
          onComplete={() => {
            ToastAndroid.show('Done! Take a 5 minute break before the Timer starts again.', 5);
            sessionsCompleted++;
            if (sessionsCompleted <= sessions)
            {return { shouldRepeat: true, delay: 5 * 60 };}
            else
            {return {shouldRepeat: false};}
          }}
        >
          {({ remainingTime }) => <TouchableOpacity onPress={() => {
            setPlaying(!playing);
            //OverlayModule.createOverlayEvent('OK');
          }}><Text style={{ color: 'white', fontWeight: '500', fontSize: 28 }}>{children(remainingTime)}</Text></TouchableOpacity>}
        </CountdownCircleTimer>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
        handleExplosion();
      }} style={{margin: 20}}>
          <Image source={require('../src/images/checklistDone.png')} style={{height: 55, width: 55, alignSelf:'center'}}/>
          <Text style={{color: '#B78FCB', fontSize: 12, fontWeight: '700'}}>Work Completed!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Distractions as never)} style={{margin: 20}}>
          <Image source={require('../src/images/bunko.png')} style={{height: 50, width: 50, alignSelf:'center'}}/>
          <Text style={{color: '#B78FCB', margin: 5, fontSize: 12, fontWeight: '700'}}>Speak to Irene</Text>
        </TouchableOpacity>
      </View>
      <ConfettiCannon
        count={200}
        origin={{x: -16, y: 0}}
        autoStart={false}
        ref={ref => (explosion = ref)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  label: {
    margin: 8,
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  items: {
    marginTop: 30,
    height: 300,
    marginBottom: 20,
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 280,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0c0c0',
    borderWidth: 1.5,
  },
  addText: {
    //
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#b8e2f2',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 160,
    alignSelf: 'flex-end',
    borderColor: '#77c3ec',
    borderWidth: 1,
  },
  buttonDone: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#89cff0',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 160,
    alignSelf: 'flex-end',
    borderColor: '#77c3ec',
    borderWidth: 1,
  },
});
export default Screen4;
