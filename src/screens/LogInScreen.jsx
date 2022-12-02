import { View, Text, TextInput, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';

export default function LogInScreen() {
  return (
    <View style={StyleSheet.container}>
      <AppBar />
      <View>
        <Text>Log In</Text>
        <TextInput value="Email Address" />
        <TextInput value="Password" />
        <View>
          <Text>Submit</Text>
        </View>
        <View>
          <Text>Not resistered?</Text>
          <Text>Sign up here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
