import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta11({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Picante de yuca con pollo"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        1 lb de yuca {'\n'}
        1 pechuga de pollo{'\n'}
        1 cebolla encurtida en limón{'\n'}
        Aceite ,oregano sal y pimineta.
        
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Pele la yuca y cuézala en agua salada.{'\n'}
        Una vez cocida, píquela en dados o tiras.{'\n'}
        En un plato, extienda una capa gruesa de yuca y desmenuce la pechuga{'\n'}
        Sirva el picante de yuca con la cebolla encurtida, oregano, sal, pimienta y aceite.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}