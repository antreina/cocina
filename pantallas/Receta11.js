import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta11({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Bolón de verde"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Plátanos verdes{'\n'}
        Chicharrón (opcional){'\n'}
        Queso rallado (opcional){'\n'}
        Sal al gusto{'\n'}
        Aceite vegetal para freír 

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Hierve los plátanos verdes en agua con sal hasta que estén tiernos.
        Pela los plátanos y colócalos en un tazón.
        Machaca los plátanos hasta obtener una masa consistente.
        Si deseas agregar chicharrón, desmenúzalo y mézclalo con la masa de plátano. También puedes añadir queso rallado en este punto.
        Forma bolones con la masa, dándoles una forma redonda u ovalada.
        En una sartén grande, calienta suficiente aceite vegetal a fuego medio-alto.
        Fríe los bolones en el aceite caliente hasta que estén dorados y crujientes por fuera.
        Retira los bolones del aceite y colócalos sobre papel absorbente para eliminar el exceso de grasa.
        Sirve los bolones calientes como plato principal o acompañamiento.
                
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}