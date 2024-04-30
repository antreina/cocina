import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import { Imagenes } from '../Componentes/Imagenes';
import Styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Receta1({navigation}) {
  return (
    <ScrollView  >
    <View style={Styles.container}>

      <Titulo textTitulo = "Chifles"></Titulo>

      <Imagenes
      
      texto = {require ("../src/imagenes/Chifles.png")}
  
    />

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
    </ScrollView>
  );
}

