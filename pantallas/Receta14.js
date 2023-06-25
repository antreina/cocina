import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta14({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Niños envueltos"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 

        Carne molida,
        Arroz cocido{'\n'}
        Hojas de repollo o acelga{'\n'}
        Cebolla,
        Ajo{'\n'}
        Salsa de tomate{'\n'}
        Caldo de carne,
        Aceite vegetal{'\n'}
        Sal y pimienta al gusto
        

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una sartén, calienta un poco de aceite vegetal a fuego medio y añade la cebolla y el ajo picados. Cocina hasta que estén tiernos y fragantes.
        Agrega la carne molida a la sartén y cocínala hasta que esté dorada y cocida por completo. Condimenta con sal y pimienta al gusto.
        Agrega el arroz cocido a la sartén y mezcla bien con la carne.
        Prepara las hojas de repollo o acelga, removiendo el tallo grueso y escaldándolas en agua caliente para ablandarlas.
        Coloca una porción de la mezcla de carne y arroz en el centro de cada hoja y envuélvela cuidadosamente.
        En una olla grande, vierte la salsa de tomate y el caldo de carne suficiente para cubrir los niños envueltos.
        Coloca los niños envueltos en la olla con la salsa y el caldo.
        Cocina a fuego medio durante unos 30-40 minutos, o hasta que estén bien cocidos y tiernos.
        Sirve los niños envueltos calientes, acompañados de la salsa de tomate.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}