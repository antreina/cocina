import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botonmenu , BotonInicio} from '../Comonentes/Botonmenu';
import { Titulo, TituloIng, TituloPre } from '../Comonentes/Titulo';

export default function Receta2({navigation}) {
  return (
    <View style={styles.container}>
      <Titulo textTitulo = "Ensalada de vegetales"></Titulo>

      <TituloIng/>
        <Text style={styles.texto} > 
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
        <Text style={styles.texto} >
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff22',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginEnd:20,
    fontSize:18,
    textAlign:"justify",
    //alignContent:"center"
  }

})