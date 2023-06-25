import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta30({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Sango de verde con camarones"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > {'\n'}

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >

                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}