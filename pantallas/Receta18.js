import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta18({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Aguacate a la serrana"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Aguacates maduros{'\n'}
        Jamón serrano{'\n'}
        Tomate{'\n'}
        Cebolla{'\n'}
        Limón{'\n'}
        Sal y pimienta al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Corta los aguacates por la mitad y retira el hueso.
        Rellena el aguacate con trozos de jamón serrano.
        Corta el tomate y la cebolla en rodajas finas.
        Coloca las rodajas de tomate y cebolla sobre el aguacate relleno.
        Exprime el jugo de limón sobre el aguacate.
        Espolvorea sal y pimienta al gusto.
        Sirve el aguacate a la serrana como aperitivo o acompañamiento.

                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}