/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Goal = (props: any) => {
  const [text1, setText1] = useState('');
  // const deleteGoal = () => {
  //   props.onDelete;
  // };
  const onPressHandler = () => {
    if (text1 === '') {
      setText1('✔');
    } else {
      setText1('');
    }
  };
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={onPressHandler}>
          <Text style={{color: '#000000', fontWeight: '700'}}>{text1}</Text>
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.name}</Text>
      </View>
      <TouchableOpacity style={styles.circular} onPress={props.onDelete}>
        <Image
          source={require('../images/trash.png')}
          style={{width: 27, height: 27}}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
    padding: 12,
    backgroundColor: '#C3B1E1',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderColor: '#C3B1E1',
    borderWidth: 1,
    opacity: 0.8,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#AEC6CF',
    opacity: 1,
    borderRadius: 7,
    marginRight: 15,
    paddingLeft: 5,
    paddingTop: 1,
  },
  itemText: {
    maxWidth: '80%',
    color: 'white',
  },
  circular: {
    width: 30,
    height: 30,
    borderRadius: 5,
    opacity: 0.5,
  },
});

export default Goal;
