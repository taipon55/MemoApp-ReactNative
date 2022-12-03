import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
