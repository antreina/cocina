import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Receta3() {

    return (

        <View style={styles.container}>
            <Text style ={styles.titulo} >
            Locro de papa
            </Text>

            <StatusBar style="auto" />
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

    titulo:{
        margin:"3%",
        color: "#fa4211",
        fontSize:20,
        fontWeight:"bold",
    
      },
    
  });