import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta22({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Arroz con pollo"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Pollo troceado,
        Arroz{'\n'}
        Cebolla picada,
        Ajo picado,{'\n'}
        Pimiento rojo en juliana,
        Zanahoria en rodajas (opcional){'\n'}
        Guisantes (opcional),
        Caldo de pollo{'\n'}
        Aceite vegetal
        Sal, pimienta, comino y azafrán (opcional) al gusto
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una olla grande, calienta un poco de aceite vegetal a fuego medio.
        Calienta aceite en una olla grande. Agrega cebolla y ajo, cocina hasta dorar. 
        Añade pollo y cocina hasta dorar. Agrega arroz y revuelve. Condimenta con sal, pimienta, comino y azafrán. 
        Agrega caldo de pollo. Opcionalmente, añade zanahorias y guisantes. 
        Hierve, reduce el fuego y cocina tapado por 15-20 minutos. Deja reposar antes de servir.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}