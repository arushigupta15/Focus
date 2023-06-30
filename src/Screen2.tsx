/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import 'react-native-gesture-handler';
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import Screen3 from './Screen3';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Goal from './components/Goal';
import { Image } from 'react-native';

const Screen2 = () => {

  const achieveGoal = (index: number) => {

  };

  const navigation = useNavigation();
  const [data, setData] = useState([{ id: 0, name: 'Be Productive' }, { id: 1, name: 'Relax' }]);
  const [name, setName] = useState('');
  const anotherFunc = () => {
    setName('');
  };
  const deleteGoal = (id: number) => {
    console.log("index => " + id);
    let arr = data.filter(function (item) {
      return item.id !== id;
    });
    setData(arr);
  };
  const onPressHandler = () => {
    storeData(data);
    navigation.navigate(Screen3 as never);

  };

  const storeData = async (data: any) => {
    try {
      console.log(data);
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Goals</Text>
        <TouchableHighlight onPress={onPressHandler} style={{marginTop: 5}}>
          <Image source={require('./images/right-arrow.png')} style={{ width: 25, height: 25 }} />
        </TouchableHighlight>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({ item }) =>
          <ScrollView>
            <TouchableOpacity key={item.id} onPress={() => achieveGoal(item.id)}>
              <Goal name={item.name} onAchieve={achieveGoal} onDelete={() => deleteGoal(item.id)} />
            </TouchableOpacity>
          </ScrollView>
        }
      />
      <Image source={require('./images/goals.png')} style = {{width: 300, height: 250, alignSelf: 'center'}}/>
      <View
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add goals'} value={name} onChangeText={(name) => setName(name)} clearButtonMode={'always'} />
        <TouchableOpacity onPress={() => {
          if (name) {
            setData([...data, { id: ++data.length, name: name }]);
            anotherFunc();
          }
          console.log('hi');
        }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

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
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#C3B1E1'
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 280,
    backgroundColor: '#C3B1E1',
    borderRadius: 20,
    borderColor: '#C3B1E1',
    borderWidth: 1,
    margin: 10,
    opacity: 0.8,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#C3B1E1',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C3B1E1',
    borderWidth: 1,
    opacity: 0.8,
  },
  addText: {
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#b8e2f2',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 170,
    alignSelf: 'flex-end',
    borderColor: '#77c3ec',
    borderWidth: 1,
  },
  buttonDone: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#89cff0',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 170,
    alignSelf: 'flex-end',
    borderColor: '#77c3ec',
    borderWidth: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',

  },
  item: {
    margin: 5,
    backgroundColor: '#62929E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fdfdff',
    fontSize: 20,
    fontWeight: '500',
    margin: 6
  },
  listItem: {
    backgroundColor: '#62929E',
    margin: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 10,
    paddingLeft: 30,
    paddingTop: 15,
    padding: 10,
    height: 70,
    fontSize: 18,

  }
});
export default Screen2;
