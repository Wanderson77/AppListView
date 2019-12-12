import React from 'react';
import { View, ListView, StyleSheet } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    color: 'orange'
  }
});

export default function components() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native!</Text>
    </View>    
  );
}
