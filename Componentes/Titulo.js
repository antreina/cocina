import * as React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";


export function Titulo(props){
    const {textTitulo}= props;
    return (
        <Text style={styles.titulo}>{textTitulo}</Text>
    )

}

export function TituloIng(props){
    return (
        <Text style={styles.TituloIng}>Ingredientes</Text>
    )
}



export function TituloPre(props){
    return (
        <Text style={styles.TituloPre}>Preparación</Text>
    )

}

const styles = StyleSheet.create({
    titulo:{
        margin:"2%",
        color: "#fa4211",
        fontSize:30,
        fontWeight:"bold",
    
      },

      TituloIng:{
        color: "#060606",
        fontSize:20,
        fontWeight:"bold",
      },

      TituloPre:{
        color: "#203389",
        fontSize:20,
        fontWeight:"bold",
      },
})