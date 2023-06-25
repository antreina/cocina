import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta9({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Pan de yuca"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 

        2 tazas de almidón de yuca{'\n'}
        1 taza de queso rallado (queso fresco o queso mozzarella funcionan bien){'\n'}
        1 huevo{'\n'}
        1/4 de taza de leche{'\n'}
        2 cucharadas de mantequilla derretida{'\n'}
        Sal al gusto
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Precalienta el horno a 180°C (350°F).
        En un tazón grande, mezcla el almidón de yuca y el queso rallado.
        Agrega el huevo, la leche y la mantequilla derretida a la mezcla. Mezcla bien hasta obtener una masa uniforme.
        Amasa la masa con las manos hasta que esté suave y manejable. Si es necesario, agrega más almidón de yuca para ajustar la consistencia.
        Divide la masa en pequeñas porciones y forma bolitas del tamaño de una pelota de golf.
        Coloca las bolitas en una bandeja para hornear previamente engrasada o forrada con papel de hornear.
        Hornea durante aproximadamente 20-25 minutos, o hasta que los panes de yuca estén dorados y firmes al tacto.
        Retira del horno y deja que se enfríen ligeramente antes de servir.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}