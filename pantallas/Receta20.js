import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta20({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Empanada de verde con carne"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > {'\n'}
        2 plátanos verdes,
        Carne ,
        1 cebolla picada,
        2 dientes de ajo picados,
        1 pimiento rojo picado,
        1 tomate picado,
        2 cucharadas de aceite vegetal,
        Sal y pimienta al gusto,
        Aceite para freír,

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Cocina la carne de tu elección y desmenúzala.
        Pela los plátanos verdes y córtalos en rodajas gruesas.
        Cocina las rodajas de plátano en agua con sal hasta que estén tiernas.
        Machaca las rodajas de plátano cocido hasta obtener una masa suave.
        En una sartén, sofríe cebolla, ajo y pimiento.
        Agrega la carne desmenuzada a la sartén y mezcla bien.
        Condimenta la mezcla de carne con sal, pimienta y tus especias favoritas.
        Toma porciones de masa de plátano y forma discos planos.
        Coloca una porción de la mezcla de carne en el centro de cada disco de masa.
        Dobla los discos de masa por la mitad y sella los bordes presionando con un tenedor.
        Fríe las empanadas en aceite caliente hasta que estén doradas y crujientes.
        Escurre las empanadas en papel absorbente para eliminar el exceso de grasa.
        Sirve las empanadas de verde con carne calientes y disfruta de su delicioso sabor.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}