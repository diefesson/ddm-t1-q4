import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState(null);
  return (
    <View style={styles.container}>
      <Text>What is your name?</Text>
      <TextInput
        style={styles.textInput}
        editable
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button title="Say hello" onPress={() => setUsername(inputValue)} />
      {username != null && (
        <Text style={styles.bigText}>
          Hello <Text style={styles.focusText}>{username}</Text>
        </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#4287f5',
  },
  bigText: {
    fontSize: 30,
  },
  focusText: {
    fontWeight: 'bold',
    color: '#4287f5',
  },
});
