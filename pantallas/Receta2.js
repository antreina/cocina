import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Componentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Componentes/Titulo';
import Styles from './Styles';

export default function Receta2({navigation}) {
  return (
    <View style={Styles.container}>
      <Titulo textTitulo = "Ensalada de vegetales"></Titulo>

      <TituloIng/>
        <Text style={Styles.texto} > 
        2 zanahorias{'\n'}
        1/4 kg (1/2 lb) de guisantes {'\n'}
        1/2 kg (1 lb) de judías verdes {'\n'}
        1 kg (2 lb) de patatas {'\n'}
        2 tomates {'\n'}
        Aceite, 
        Sal, pimienta{'\n'}
        1 maduro (plátano verde maduro) para adornar
        </Text>

        <TituloPre/>
        <Text style={Styles.texto} >
          1. Cueza las zanahorias, las judias y las patatas en abundante agua hirviendo.{'\n'}
          2. Cuando esté todo tierno, escurra las verduras y déjelas enfriar.{'\n'}
          3. Corte las patatas y las zanahorias en dados, los tomates en rodajas y las judias verdes en trozos pequeños.{'\n'}
          4. Mezcle todas las verduras y alíñelas con aceite. Salpimente al gusto.{'\n'}
          5. Decore la ensalada con maduros.      
                    
        </Text>

      <BotonInicio
       texto= "Menu"
       onPress= {() => navigation.navigate('Menu')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
//export default Receta1;

