import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta6({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Ensalada de baterava y zanahoria"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        2 remolachas grandes, peladas {'\n'}
        2 zanahorias grandes, peladas {'\n'}
        Jugo de 1 limón{'\n'}
        2 cucharadas de aceite de oliva{'\n'}
        Sal y pimienta al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Pelar y rallar las remolachas y las zanahorias.{'\n'}
        Mezclar las remolachas y zanahorias ralladas en un tazón.{'\n'}
        Agregar jugo de limón y aceite de oliva a la mezcla.{'\n'}
        Mezclar bien para asegurarse de que las verduras estén cubiertas con el aderezo.{'\n'}
        Sazonar con sal y pimienta al gusto.{'\n'}
        Dejar reposar en el refrigerador durante al menos 30 minutos para que los sabores se mezclen.{'\n'}
        Servir y disfrutar de la ensalada de remolacha y zanahoria fría como guarnición o como plato principal.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}