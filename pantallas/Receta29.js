import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta29({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Carne molida al horno"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Carne molida
        Cebolla,
        Ajo{'\n'}
        Pan rallado o migas de pan{'\n'}
        Huevo
        Salsa de tomate{'\n'}
        Sal y especias al gusto
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Precalienta el horno a una temperatura de 180°C (350°F).
        En un tazón grande, mezcla la carne molida con la cebolla y el ajo picados finamente.
        Agrega el pan rallado o las migas de pan, el huevo batido y la salsa de tomate a la mezcla de carne. Mezcla todo hasta que esté bien combinado.
        Condimenta la mezcla con sal y especias al gusto, como pimienta, orégano o comino.
        Coloca la mezcla de carne en un molde para horno previamente engrasado.
        Extiende la mezcla de manera uniforme para que tenga un grosor aproximado de 2-3 cm.
        Hornea la carne molida en el horno precalentado durante unos 25-30 minutos, o hasta que esté bien cocida y dorada en la parte superior.
        Retira del horno y deja reposar unos minutos antes de cortar y servir.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}