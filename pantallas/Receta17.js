import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta17({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Menestra con carne"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Carne (pollo, res, cerdo), cortada en trozos{'\n'}
        Vegetales variados (zanahorias, arvejas, papas, brócoli, etc.){'\n'}
        Cebolla, picada{'\n'}
        Ajo, picado{'\n'}
        Caldo de carne o agua{'\n'}
        Aceite vegetal{'\n'}
        Sal y especias al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una olla grande, calienta el aceite vegetal a fuego medio-alto.
        Agrega la cebolla y el ajo picados y cocínalos hasta que estén dorados y fragantes.
        Añade la carne cortada en trozos a la olla y cocínala hasta que esté dorada por todos los lados.
        Agrega los vegetales variados a la olla y revuélvelos con la carne, la cebolla y el ajo.
        Vierte suficiente caldo de carne o agua para cubrir los ingredientes. Agrega sal y especias al gusto.
        Lleva la mezcla a hervir y luego reduce el fuego a medio-bajo. Cubre la olla y cocina a fuego lento hasta que los vegetales estén tiernos.
        Revuelve ocasionalmente para asegurarte de que todos los ingredientes se cocinen de manera uniforme y no se peguen al fondo de la olla.
        Una vez que los vegetales estén tiernos y la carne esté bien cocida, retira la olla del fuego.
        Sirve la menestra con carne caliente como plato principal.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}