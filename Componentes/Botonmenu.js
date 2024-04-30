import * as React from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity, Text,Image } from "react-native";


export function Botonmenu(props) {
    const {onPress, texto,textoI} = props;
    return(

      <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image style={styles.estiloimag} source={textoI}/>
          <Text style={styles.texto}>{texto}</Text>        
        </TouchableOpacity>

      </View>

    );
    
}

export function BotonInicio(props) {
  const {onPress, texto} = props;
  return(
      <TouchableOpacity style={styles.buttonI}
          onPress={onPress}>
        <Text style={styles.buttonText}>{texto}</Text>
      </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
  

  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

    button:{
      
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: "90%",
      borderRadius: 10,
      marginTop: 10,
      borderWidth:1,
      borderColor:"#ffff",
    },

    texto: {
      //flex: 1,
      //marginLeft: 10,
      color: '#0f2e79',
      fontSize: 20,
      fontWeight: 'bold',
    },

    buttonI:{
      alignItems: 'center',
      backgroundColor: '#366FF3',
      padding: 10,
      width: "30%",
      borderRadius: 10,
      marginTop: 10,
      borderWidth:1,
      borderColor:"#ffff",
    },

    buttonText: {
      color: '#0f2e79',
      fontSize: 20,
      fontWeight: 'bold',
    },

     estiloimag:{
        width:"100%",
        height:100,
        borderRadius:10,
      },

  
  });
  
