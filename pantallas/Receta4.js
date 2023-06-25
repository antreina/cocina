import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta4({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Ensalada de frijoles blancos"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        2 latas (400 g cada una) de frijoles blancos, enjuagados y escurridos{'\n'}
        1 pimiento rojo, cortado en cubitos{'\n'}
        1 pimiento verde, cortado en cubitos{'\n'}
        1 cebolla roja pequeña, picada{'\n'}
        1/4 de taza de cilantro fresco, picado{'\n'}
        2 cucharadas de aceite de oliva{'\n'}
        El jugo de 1 limón{'\n'}
        Sal y pimienta al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >    
        En un tazón grande, combina los frijoles blancos, los pimientos, la cebolla y el cilantro.{'\n'}
        En otro recipiente más pequeño, mezcla el aceite de oliva, el jugo de limón, la sal y la pimienta para hacer el aderezo.{'\n'}
        Vierte el aderezo sobre la mezcla de frijoles y verduras y revuélvelo suavemente para asegurarte de que todo esté bien cubierto.{'\n'}
        Deja reposar la ensalada en el refrigerador durante al menos 30 minutos para que los sabores se mezclen.{'\n'}
        Sirve la ensalada de frijoles blancos fría como guarnición o como plato principal acompañada de pan o tortillas. {'\n'}
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}