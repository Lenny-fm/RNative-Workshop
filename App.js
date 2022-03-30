import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Alert, Button, TouchableOpacity } from 'react-native-web';
import LoginForm from './LoginForm';

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.container, {flexDirection: "row"}]}>
      <Text style={styles.square}>Hello World</Text>
      <StatusBar style="auto" />
      <Button title="Button 1" onPress={() => alert('Hello')}/>
      <CustomButton onPress={() => setCount(count + 1)} title="Press Me"/>
      <Text>You've pressed the button {count} times</Text>
      <View style={[styles.column, { flex: 1, backgroundColor: "red", }]} />
      <View style={[styles.column, { flex: 2, backgroundColor: "darkorange" }]} />
      <View style={[styles.column, { flex: 3, backgroundColor: "green" }]} />
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  column: {
    width: 100,
    height: 100,
  }
});
