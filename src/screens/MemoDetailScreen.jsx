import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CircleButton from '../components/CircleButton';
import { shape, string } from 'prop-types';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2022年11月28日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト 書体やレイアウトなどを確認するために使う。
          ほんぶんようなので使い方を間違えると不自然。
        </Text>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => {
          navigation.navigate('MemoEdit');
        }}
      ></CircleButton>
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  memoHeader: {
    backgroundColor: 'blue',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
