import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';
import { BotonInicio } from '../Componentes/Botonmenu';


export default function Receta3({navigation}) {

    return (

        <View style={Styles.container}>
            <Titulo textTitulo ="Locro de papa"></Titulo>
            <TituloIng/>
            <Text style ={Styles.texto} >
            4 papas grandes, peladas y cortadas en cubos{'\n'}
            1 cebolla grande, picada{'\n'}
            2 dientes de ajo, picados{'\n'}
            2 tazas de caldo de verduras{'\n'}
            1 taza de leche{'\n'}
            1 taza de queso fresco, desmenuzado{'\n'}
            1 cucharada de aceite vegetal{'\n'}
            Sal y pimienta al gusto
            </Text>
            <TituloPre/>
            <Text style ={Styles.texto} >
            Sofríe la cebolla y el ajo en aceite vegetal hasta que estén dorados y fragantes.{'\n'}
            Agrega las papas y cocínalas con la cebolla y el ajo durante unos minutos.{'\n'}
            Vierte el caldo de verduras y deja que hierva a fuego lento hasta que las papas estén tiernas.{'\n'}
            Aplasta ligeramente las papas para espesar el caldo.{'\n'}
            Añade la leche y cocina durante 5 minutos más para mezclar los sabores.{'\n'}
            Agrega el queso fresco y revuelve hasta que se derrita.{'\n'}
            Ajusta la sazón con sal y pimienta.{'\n'}
            Sirve caliente y decora con cebolla verde picada si lo deseas.{'\n'}
            </Text>

            <BotonInicio
            texto="Menu"
            onPress= {() => navigation.navigate('Menu')}
            />
            <StatusBar style="auto" />
        </View>

    );

}

