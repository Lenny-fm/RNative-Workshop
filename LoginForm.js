import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { Button, View } from 'react-native-web';

function LoginForm() {
  const [text, onChangeText] = useState("John Doe");

  return (
    <View>
        <Text>What is your name ?</Text>
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
        <Button onPress={() => alert(text)} title="Say Hello"/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default LoginForm