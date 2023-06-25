import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta5({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Patacones"></Titulo>
      <TituloIng/>
      <Text style={Styles.texto} > 
        2 plátanos verdes{'\n'}
        Aceite
      </Text>
        <TituloPre/>
        <Text style={Styles.texto} > 
        Pelar y cortar los plátanos verdes en rodajas gruesas.{'\n'}
        Freír las rodajas de plátano hasta que estén doradas.{'\n'}
        Retirar del aceite y escurrir el exceso de grasa.{'\n'}
        Aplastar las rodajas fritas.{'\n'}
        Freír nuevamente hasta que estén crujientes y dorados.{'\n'}
        Escurrir y espolvorear con sal al gusto.{'\n'}
        Servir y disfrutar caliente.
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}