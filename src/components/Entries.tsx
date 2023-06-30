import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Entries = (props: any) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.entry}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    opacity: 0.8,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    color: 'grey',
  },
  circular: {
    width: 30,
    height: 30,
    borderRadius: 5,
    opacity: 0.5,
  },
});

export default Entries;
