import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


export default function Botonmenu(props) {
    const {onPress, texto} = props;
    return(
        <TouchableOpacity style={styles.button}
            onPress={onPress}>
          <Text style={styles.buttonText}>{texto}</Text>
        </TouchableOpacity>
    );
    
}


const styles = StyleSheet.create({
  
    titulo:{
      margin:"3%",
      color: "#fa4211",
      fontSize:20,
      fontWeight:"bold",
    },
  
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: "90%",
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
  
