import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta8({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Mote pillo"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        2 tazas de mote cocido,
        4 huevos,
        1 cebolla mediana picada,
        2 dientes de ajo picados,
        1 pimiento verde picado,
        2 cucharadas de aceite vegetal,
        Sal y pimienta al gusto {'\n'}
        Opcional: cilantro picado para decorar
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una sartén grande, calienta el aceite vegetal a fuego medio.
        Agrega la cebolla, el ajo y el pimiento verde a la sartén y cocínalos hasta que estén dorados y fragantes.
        Añade el mote cocido a la sartén y mezcla bien con los vegetales.
        En un tazón aparte, bate los huevos y agrégalos a la sartén. Revuelve rápidamente para que los huevos se mezclen con el mote y los vegetales.
        Cocina la mezcla a fuego medio-bajo, revolviendo ocasionalmente, hasta que los huevos estén cocidos y el mote pillo esté bien caliente.
        Sazona con sal y pimienta al gusto, y continúa cocinando por unos minutos más para que los sabores se mezclen.
        Retira del fuego y sirve el mote pillo caliente. Opcionalmente, puedes espolvorear con cilantro picado como adorno.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}