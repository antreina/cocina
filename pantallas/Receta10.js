import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta10({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Muchines de yuca"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        2 tazas de yuca rallada{'\n'}
        1 huevo{'\n'}
        1/2 taza de queso rallado (preferiblemente queso fresco){'\n'}
        Sal al gusto{'\n'}
        Aceite vegetal para freír

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En un tazón grande, mezcla la yuca rallada, el huevo, el queso rallado y la sal. Amasa bien hasta obtener una masa homogénea.
        Forma pequeñas porciones de masa y dale forma de cilindro o dedo.
        En una sartén grande, calienta suficiente aceite vegetal a fuego medio-alto.
        Coloca los muchines de yuca en el aceite caliente y fríelos hasta que estén dorados y crujientes por fuera. Asegúrate de voltearlos para que se cocinen de manera uniforme.
        Retira los muchines de yuca del aceite y colócalos sobre papel absorbente para eliminar el exceso de grasa.
        Sirve los muchines de yuca calientes como aperitivo o acompañamiento.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}