import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta25({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Carne en palito"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > {'\n'}
        Carne (puede ser de res, cerdo, pollo, etc.){'\n'}
        Sal y especias al gusto{'\n'}
        Palitos de brocheta

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Corta la carne en trozos pequeños y uniformes.
        Espolvorea sal y especias al gusto sobre la carne para sazonarla.
        Ensarta los trozos de carne en los palitos de brocheta, asegurándote de dejar suficiente espacio en el extremo para sostenerlos.
        Opcionalmente, puedes alternar la carne con vegetales como pimientos, cebolla o champiñones para agregar variedad y sabor.
        Prepara una parrilla o sartén caliente.
        Coloca los palitos de carne en la parrilla o sartén y cocina durante unos minutos por cada lado, volteándolos para asegurarte de que se cocinen de manera uniforme.
        La carne estará lista cuando esté dorada por fuera y cocida por dentro, según tu preferencia de cocción.
        Retira los palitos de carne de la parrilla o sartén y déjalos reposar unos minutos antes de servir.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}