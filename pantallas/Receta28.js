import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta28({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Seco de chivo"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Chivo (cabrito) cortado en trozos{'\n'}
        Cebolla,
        Ajo,
        Comino,
        Orégano,{'\n'}
        Ají o chiles picantes (opcional){'\n'}
        Cerveza (opcional){'\n'}
        Caldo de carne,
        Aceite vegetal
        Sal y pimienta al gusto
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una olla grande, calienta un poco de aceite vegetal a fuego medio-alto.
        Agrega la cebolla picada y el ajo picado a la olla y cocina hasta que estén dorados y fragantes.
        Añade los trozos de chivo a la olla y dora por todos los lados.
        Condimenta la carne con comino, orégano, sal y pimienta al gusto.
        Si deseas un toque picante, agrega ají o chiles picantes a la olla.
        Agrega suficiente caldo de carne para cubrir la carne.
        Opcionalmente, puedes agregar cerveza para darle sabor adicional.
        Reduce el fuego a medio-bajo, tapa la olla y cocina a fuego lento durante aproximadamente 1.5 a 2 horas, o hasta que la carne esté tierna y se desprenda fácilmente del hueso.
        Durante la cocción, puedes agregar más caldo si es necesario para mantener la carne húmeda.
        Sirve el seco de chivo caliente, acompañado de arroz blanco, plátanos fritos o yuca.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}