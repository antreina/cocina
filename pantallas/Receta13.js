import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta13({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Llapingachos"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Papas
        Queso fresco{'\n'}
        Cebolla{'\n'}
        Achiote (opcional){'\n'}
        Harina de maíz{'\n'}
        Aceite vegetal{'\n'}
        Sal al gusto

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        Cocina las papas en agua hirviendo con sal hasta que estén suaves. Luego, pélalas y aplástalas con un tenedor o un pasapurés en un tazón grande.
        Agrega queso fresco rallado a las papas y mezcla bien hasta que esté incorporado.
        En una sartén, calienta un poco de aceite vegetal y saltea la cebolla picada hasta que esté dorada y tierna. Si lo deseas, puedes agregar achiote para darle color.
        Agrega la cebolla a la mezcla de papas y queso. Mezcla nuevamente hasta obtener una masa homogénea.
        Toma porciones de la masa y forma pequeñas tortitas o bolas.
        En otra sartén con aceite caliente, fríe las tortitas de llapingacho hasta que estén doradas y crujientes por fuera.
        Retira las tortitas del aceite y colócalas sobre papel absorbente para eliminar el exceso de grasa.
        Sirve los llapingachos calientes acompañados de salsa de maní, hogao u otras salsas tradicionales.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}