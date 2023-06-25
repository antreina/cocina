import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta21({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Guatita"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Mondongo de res precocidas y limpias,
        Cebolla picada,
        Ajo picado,
        Comino en polvo,
        Orégano seco,
        Manteca de cerdo o aceite vegetal,
        Maní molido,
        Leche evaporada,
        Mantequilla,
        Papa picada en cubos,
        Zanahoria picada en rodajas,
        Cilantro picado,
        Sal y pimienta al gusto.

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >

        Cocina el mondongo previamente limpio y cocido.
        Sofríe cebolla y ajo en una olla con manteca o aceite.
        Agrega el mondongo cocido y cortado en trozos.
        Condimenta con comino, orégano, sal y pimienta.
        Añade maní molido, leche evaporada y mantequilla.
        Cocina a fuego medio-bajo durante unos 30 minutos, hasta obtener una consistencia espesa y cremosa.
        Agrega papas y zanahorias cortadas en trozos.
        Cocina hasta que las verduras estén tiernas.
        Apaga el fuego y añade cilantro picado.
        Sirve caliente y acompaña con arroz blanco u otros acompañamientos.
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}