import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const calculateResult = () => {
    const ageNum = parseInt(age);

    const result = laskesyke(ageNum);
    setResult(result);
  };

  const laskesyke = age => {
    return `${(220 - age) * 0.65}-${(220 - age) * 0.85}`;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter age"
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
      />
      <Button title="Calculate" onPress={calculateResult} />
      <Text style={styles.result}>Result: {result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});
