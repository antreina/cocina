import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta19({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Torta de choclo"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        4 tazas de granos de choclo fresco (o choclo congelado descongelado){'\n'}
        1 taza de leche
        2 huevos{'\n'}
        4 cucharadas de mantequilla derretida{'\n'}
        1/2 taza de azúcar{'\n'}
        1 cucharadita de polvo de hornear{'\n'}
        Queso rallado (opcional){'\n'}
        Sal al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Precalienta el horno a 180°C (350°F).
        Licúa los granos de choclo, la leche, los huevos, la mantequilla derretida, el azúcar y la sal hasta obtener una mezcla suave.
        Agrega el polvo de hornear y mezcla nuevamente.
        Vierte la mezcla en un molde engrasado.
        Opcionalmente, espolvorea queso rallado sobre la mezcla.
        Hornea a 180°C (350°F) durante 45-50 minutos, hasta que esté dorada y firme al tacto.
        Deja enfriar antes de desmoldar.
        Sirve la torta de choclo caliente o a temperatura ambiente.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}