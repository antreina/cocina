import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Comonentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Comonentes/Titulo';

export default function Receta1({navigation}) {
  return (
    <View style={styles.container}>
      <Titulo textTitulo = "Chifles"></Titulo>

      <TituloIng/>
        <Text style={styles.texto} > 
        Dos platanos{'\n'}
        Aceite{'\n'}
        Sal 
        </Text>

        <TituloPre/>
        <Text style={styles.texto} >
          1. Corte los platanos en rodajas muy finas.{'\n'}
          2. Fríalos en abundante aceite muy caliente hasta que estén dorados.{'\n'}
          3. Escúrralos muy bien sobre papel absorbente y espolvoréelos con sal fina.{'\n'}
          4.Sírvalos muy calientes como aperitivo.          
                    
        </Text>

      <BotonInicio
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
    backgroundColor: '#ff22',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginEnd:20,
    fontSize:18,
    textAlign:"justify",
    alignContent:"flex-start"
  }

})