import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta16({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Moros y cristianos"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Arroz,
        Frijoles negros{'\n'}
        Cebolla,
        Ajo{'\n'}
        Pimiento verde{'\n'}
        Comino,
        Orégano{'\n'}
        Aceite vegetal
        Sal y pimienta al gusto
        
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Cocina el arroz siguiendo las instrucciones del paquete y déjalo aparte.
        En una olla aparte, cocina los frijoles negros hasta que estén tiernos y suaves.
        En una sartén aparte, calienta el aceite vegetal a fuego medio y añade la cebolla, el ajo y el pimiento verde picados. Cocina hasta que estén tiernos y fragantes.
        Agrega los frijoles cocidos a la sartén con las verduras y mezcla bien.
        Añade comino y orégano al gusto, y sazona con sal y pimienta.
        Agrega el arroz cocido a la mezcla de frijoles y verduras. Mezcla todo junto hasta que esté bien combinado y caliente.
        Sirve el moro y cristianos como plato principal o como acompañamiento.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}