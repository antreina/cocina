import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta26({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Seco de gallina"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} >
        Gallina troceada {'\n'}
        Cebolla,
        Ajo,
        Comino,
        Ají amarillo (opcional) {'\n'}
        Cerveza (opcional)
        Caldo de pollo
        Aceite vegetal
        Sal y pimienta al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una olla grande, calienta un poco de aceite vegetal a fuego medio-alto.
        Agrega la cebolla picada y el ajo picado a la olla y cocina hasta que estén dorados y fragantes.
        Añade los trozos de gallina a la olla y dora por todos los lados.
        Condimenta la carne con comino, sal y pimienta al gusto.
        Si deseas un toque picante, agrega ají amarillo picado o en pasta a la olla.
        Agrega suficiente caldo de pollo para cubrir la gallina.
        Opcionalmente, puedes agregar cerveza para darle sabor adicional.
        Reduce el fuego a medio-bajo, tapa la olla y cocina a fuego lento durante aproximadamente 1.5 a 2 horas, o hasta que la gallina esté tierna y se desprenda fácilmente del hueso.
        Durante la cocción, puedes agregar más caldo si es necesario para mantener la carne húmeda.
        Sirve el seco de gallina caliente, acompañado de arroz blanco, yucas o plátanos maduros fritos.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}