import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


export function Botonmenu(props) {
    const {onPress, texto} = props;
    return(
        <TouchableOpacity style={styles.button}
            onPress={onPress}>
          <Text style={styles.buttonText}>{texto}</Text>
        </TouchableOpacity>
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
  
  });
  
