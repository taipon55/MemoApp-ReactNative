import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

export default function MemoList(props) {
  const { memos } = props;
  const navigatioon = useNavigation();
  return (
    <>
      <View>
        {memos.map((memo) => {
          return (
            <TouchableOpacity
              key={memo.id}
              style={styles.memoListItem}
              onPress={() => {
                navigatioon.navigate('MemoDetail');
              }}
            >
              <View>
                <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
                <Text style={styles.memoListItemDate}>{String(memo.updatedAt)}</Text>
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
          );
        })}
      </View>
    </>
  );
}

MemoList.propTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
    })
  ).isRequired,
};

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
