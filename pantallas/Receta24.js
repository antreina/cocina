import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';


export default function Receta24({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Lomito saltado"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        Lomo de res cortado en tiras{'\n'}
        Cebolla roja en juliana{'\n'}
        Tomate en juliana{'\n'}
        Ají amarillo o ají verde en juliana (opcional){'\n'}
        Ajo picado{'\n'}
        Salsa de soja,
        Vinagre,
        Aceite vegetal{'\n'}
        Sal y pimienta al gusto,
        Papas fritas (opcional),
        Arroz cocido (opcional)

        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
        En una sartén grande o wok, calienta un poco de aceite vegetal a fuego alto.
        Agrega el ajo picado y saltea hasta que esté fragante.
        Añade las tiras de lomo de res y cocina hasta que estén doradas por todos lados.
        Agrega la cebolla, el tomate y el ají (si lo deseas) a la sartén y saltea todo junto durante unos minutos, hasta que las verduras estén tiernas pero aún crujientes.
        Condimenta con salsa de soja, vinagre, sal y pimienta al gusto. Remueve bien para mezclar todos los sabores.
        Opcionalmente, puedes agregar papas fritas a la sartén y mezclarlas con la carne y las verduras.
        Sirve el lomito saltado caliente, acompañado de arroz cocido.
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}