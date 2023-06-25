import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta7({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Sopa de bolas de verde"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        3 plátanos verdes,
        1 cebolla pequeña picada,
        2 dientes de ajo picados,
        1 zanahoria rallada,
        1 tomate picado,
        4 tazas de caldo de pollo o vegetales,
        1 cucharada de cilantro fresco picado,
        Sal y pimienta al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una olla grande, lleva a hervir agua con sal. Agrega los plátanos verdes y cocínalos hasta que estén tiernos, aproximadamente durante 15-20 minutos.
        Retira los plátanos del agua caliente y déjalos enfriar lo suficiente para poder pelarlos. Luego, tritúralos o rállelos finamente.
        En una olla aparte, calienta un poco de aceite o mantequilla a fuego medio. Agrega la cebolla y el ajo, y cocina hasta que estén dorados y fragantes.
        Agrega la zanahoria rallada y el tomate picado a la olla, y saltea durante unos minutos hasta que estén suaves.
        Añade el caldo de pollo o vegetales a la olla y lleva la mezcla a hervir.
        Reduce el fuego a medio-bajo y agrega las bolas de verde (plátano rallado) a la sopa. Cocina a fuego lento durante unos 10-15 minutos, hasta que las bolas de verde estén cocidas.
        Añade el cilantro picado y sazona con sal y pimienta al gusto. Remueve bien la sopa para mezclar los sabores.
        Sirve la sopa caliente y disfrútala como plato principal o acompañamiento.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}