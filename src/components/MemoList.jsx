import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  const navigatioon = useNavigation();
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigatioon.navigate('MemoDetail');
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => {
              Alert.alert('Are you sure?');
            }}
          >
            <Feather name="x" size={16} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigatioon.navigate('MemoDetail');
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => {
              Alert.alert('Are you sure?');
            }}
          >
            <Feather name="x" size={16} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigatioon.navigate('MemoDetail');
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年11月28日 10:00</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => {
              Alert.alert('Are you sure?');
            }}
          >
            <Feather name="x" size={16} />
          </TouchableOpacity>
        </TouchableOpacity>
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
  memoDelete: {
    padding: 8,
  },
});
