import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MemoList() {
  return (
    <>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name="x" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
