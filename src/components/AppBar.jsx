import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    color: 'gray',
    position: 'absolute',
    right: 19,
    bottom: 16,
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});
