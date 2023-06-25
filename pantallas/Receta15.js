import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta15({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Col morada hervida"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Col morada{'\n'}
        Agua{'\n'}
        Sal al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Lava y corta la col morada en trozos pequeños.
        En una olla grande, agrega suficiente agua para cubrir la col morada.
        Lleva el agua a hervir a fuego medio-alto.
        Agrega la col morada a la olla con agua hirviendo.
        Añade sal al gusto.
        Cocina la col morada durante unos 10-15 minutos, o hasta que esté tierna pero aún crujiente.
        Retira la olla del fuego y escurre el exceso de agua.
        Sirve la col morada hervida como guarnición o como parte de una ensalada.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}