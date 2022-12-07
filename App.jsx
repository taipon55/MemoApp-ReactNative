import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyAa6TLPrxGGXYYpxKTNL-ZPNP7fHmfZKLw',
  authDomain: 'memoapp-7fdc0.firebaseapp.com',
  projectId: 'memoapp-7fdc0',
  storageBucket: 'memoapp-7fdc0.appspot.com',
  messagingSenderId: '771401049016',
  appId: '1:771401049016:web:a3e240ac8ada62319f654d',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: 'blue' },
          headerTitleStyle: { color: 'white' },
          headerTitle: 'Memo App',
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
