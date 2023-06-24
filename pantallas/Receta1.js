import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botonmenu from '../Comonentes/Botonmenu';

export default function Receta1({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Receta de Chifles</Text>

      <Botonmenu
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
//export default Receta1;



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