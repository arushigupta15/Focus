/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  UIManager,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import BottomDrawer from 'react-native-bottom-drawer-view';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Entries from './components/Entries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Screen2 from './Screen2';
import Voice from '@react-native-voice/voice';
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const JournalHome = ({route}) => {
  const status = route.params.paramKey;
  const array1 = {
    1: "Glad you're in a good mood!",
    2: 'Would you like to talk about it?',
    3: 'Looks like we could help you with your emotions first.',
  };
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [entries, setEntries] = useState([{date: '', entry: ''}]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = err => setError(err?.error?.message ?? 'error');
  Voice.onSpeechResults = result1 => {
    if (result1.value !== undefined) {
      setResult(result1.value[0]);
    }
  };

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
    } catch (err: any) {
      setError(err);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (error: any) {
      setError(error);
    }
  };
  useEffect(() => {
    _retrieveData();
  }, []);

  const navigation = useNavigation();
  const _storeData = async () => {
    try {
      if (entries[0].date === '' && entries[0].entry === '') {
        setEntries([{date: text, entry: text}]);
      } else if (text !== '') {
        setEntries([...entries, {date: text, entry: text}]);
        setText('');
      }
      console.log('Entries 1: ' + JSON.stringify(entries));
      await AsyncStorage.setItem('key', JSON.stringify(entries));
      console.log('Entries 2: ' + JSON.stringify(entries));
    } catch (error) {
      // Error saving data
    }
  };
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null && value !== '') {
        console.log('Retrieving' + value);
        setEntries(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  return (
    <View style={styles.background}>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
          <Image
            source={require('./images/right-arrow.png')}
            style={{height: 30, width: 30, marginLeft: 320, marginTop: 20}}
          />
        </TouchableOpacity>
        <Image
          source={require('./images/journal-removebg-preview.png')}
          style={{width: 250, alignSelf: 'center', height: 200}}
        />
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            fontWeight: '500',
            marginTop: 20,
          }}>
          Add a Journal Entry
        </Text>
        <Text style={styles.text}>{array1[status]}</Text>
        <TouchableOpacity
          style={{margin: 10}}
          onPress={isRecording ? stopRecording : startRecording}>
          <Image
            source={
              isRecording
                ? require('../src/images/micYES.png')
                : require('../src/images/mic.png')
            }
            style={{height: 30, width: 30, alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <TextInput
          multiline={true}
          placeholder="What are your thoughts?"
          style={{
            textAlign: 'left',
            verticalAlign: 'top',
            backgroundColor: 'rgba(230,190,250,0.5)',
            opacity: 0.5,
            width: '90%',
            alignSelf: 'center',
            height: 250,
            margin: 10,
            borderRadius: 10,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flexShrink: 1,
            color: 'white',
            fontWeight: '500',
            padding: 20,
            lineHeight: 25,
          }}
          clearButtonMode="always"
          value={text || result}
          onChangeText={data => {
            setText(data);
            //Data only gets uploaded to asyncstorage when text is changed.
          }}
        />
        <View>
          <TouchableOpacity
            style={styles.addWrapper}
            onPress={() => {
              _storeData();
              //Call storedata here
            }}>
            <Text style={{fontWeight: '700'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <BottomDrawer
        containerHeight={600}
        downDisplay={550}
        startUp={false}
        roundedEdges={true}
        backgroundColor={'#C3B1E1'}
        shadow={true}
        borderRadius={20}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '500',
            padding: 10,
            textAlign: 'center',
          }}>
          Journal Entries
        </Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={entries}
          renderItem={({item}) => (
            <ScrollView>
              <Entries entry={item.entry} />
            </ScrollView>
          )}
        />
      </BottomDrawer>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
    alighItems: 'center',
    color: '#FDFDFF',
    verticalAlign: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16,
    color: '#C3B1E1',
    fontWeight: '400',
    marginTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: 'center',
  },
  addWrapper: {
    width: 60,
    height: 40,
    backgroundColor: '#C3B1E1',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  addText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default JournalHome;
