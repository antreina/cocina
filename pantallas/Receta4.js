import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Receta4() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Ensalada de frijoles blancos </Text>
      
    </View>
  );
}
//export default Receta4;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    margin:"3%",
    color: "#fa4211",
    fontSize:20,
    fontWeight:"bold",

  },

  
});