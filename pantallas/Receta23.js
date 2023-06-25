import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta23({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Fritada quiteña"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Cerdo (preferiblemente panceta o costillas) cortado en trozos{'\n'}
        Manteca de cerdo o aceite vegetal,
        Cebolla roja en juliana{'\n'}
        Ajo picado,
        Comino en polvo,
        Sal y pimienta al gusto,
        Agua,
        Chicha de jora (opcional){'\n'}
        Choclo (maíz tierno) cocido (opcional){'\n'}
        Plátano verde frito (opcional){'\n'}
        Salsa de ají (opcional)
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una olla grande, calienta la manteca de cerdo o el aceite vegetal a fuego medio-alto.
        Agrega los trozos de cerdo a la olla y cocina hasta que estén dorados por todos lados.
        Añade la cebolla en juliana y el ajo picado a la olla y saltea hasta que estén tiernos y fragantes.
        Condimenta con comino en polvo, sal y pimienta al gusto. Remueve bien para mezclar los sabores.
        Agrega agua suficiente para cubrir la carne y cocina a fuego medio-bajo durante aproximadamente 1.5 a 2 horas, o hasta que la carne esté tierna y se desprenda fácilmente.
        Opcionalmente, puedes añadir chicha de jora (una bebida de maíz fermentado) para agregar sabor y profundidad.
        Si deseas, puedes servir la fritada con choclo cocido y plátano verde frito.
        Acompaña la fritada quiteña con salsa de ají, si lo deseas, para darle un toque picante adicional.
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}