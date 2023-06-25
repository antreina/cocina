import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Comonentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Comonentes/Titulo';
import Styles from './Styles';


export default function Receta1({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Chifles"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Dos platanos{'\n'}
        Aceite{'\n'}
        Sal 
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
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



