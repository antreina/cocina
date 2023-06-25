import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta27({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Ají de gallina"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Pechuga de pollo cocida y desmenuzada{'\n'}
        Ají amarillo (o pasta de ají amarillo){'\n'}
        Cebolla,
        Ajo
        Pan remojado en leche{'\n'}
        Queso fresco
        Leche evaporada
        Nueces o pecanas
        Aceitunas negras{'\n'}
        Aceite vegetal
        Sal y pimienta al gusto
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una sartén, calienta un poco de aceite vegetal a fuego medio-alto.
        Agrega la cebolla picada y el ajo picado a la sartén y cocina hasta que estén dorados y fragantes.
        Agrega el ají amarillo (o pasta de ají amarillo) a la sartén y cocina por unos minutos.
        En un tazón aparte, mezcla el pan remojado en leche y el queso fresco desmenuzado hasta obtener una pasta suave.
        Añade la pasta de pan y queso a la sartén y mezcla bien con el sofrito de ají amarillo.
        Agrega la pechuga de pollo desmenuzada a la sartén y mezcla hasta que esté bien incorporada.
        Vierte la leche evaporada en la sartén y mezcla nuevamente.
        Agrega las nueces o pecanas picadas y las aceitunas negras a la sartén.
        Cocina a fuego medio-bajo durante unos minutos, hasta que todos los sabores se mezclen y la salsa espese ligeramente.
        Prueba y ajusta la sazón con sal y pimienta al gusto.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}