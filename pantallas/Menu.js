import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {Botonmenu,botonInicio} from "../Componentes/Botonmenu";
import { Titulo } from "../Componentes/Titulo";
import { Imagenes } from "../Componentes/Imagenes";


export default function Menu ({navigation}) {
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.vista2}>
        <Titulo  textTitulo = "Cocina Ecuatoriana"/>
      <Text style={styles.titulo3}>GUARNICIONES, ENSALADAS Y SOPAS</Text>
      </View>

      <View style={styles.vista2}>  

        <Botonmenu
            texto = "Chifles"
            onPress ={() => navigation.navigate('Receta1')} 
            textoI = {require ("../src/imagenes/Chifles.png")}
        />

        <Botonmenu
            texto="Ensalada de vegetales"
            onPress={() => navigation.navigate('Receta2')} 
            textoI = {require ("../src/imagenes/Ensaladadevegetales.png")}
        />

        <Botonmenu
        texto ="Locro de papa"
        onPress={() => navigation.navigate('Receta3')} 
        textoI = {require ("../src/imagenes/Locrodepapa.png")}
        />

        <Botonmenu
        texto = "Ensalada de frijoles blancos"
        onPress={() => navigation.navigate('Receta4')}  
        textoI = {require ("../src/imagenes/EnsaladaFrijolesBlancos.png")} 
        />

        <Botonmenu
        texto = "Patacones"
        onPress={() => navigation.navigate('Receta5')}   
        textoI = {require ("../src/imagenes/Patacones.png")}
        />

        <Botonmenu
        texto = "Ensalada de beterava y zanahoria"
        onPress={() => navigation.navigate('Receta6')}   
        textoI = {require ("../src/imagenes/Ensaladabeteava.png")}
        />

        <Botonmenu
        texto = "Sopa de bolas de verde"
        onPress={() => navigation.navigate('Receta7')} 
        textoI = {require ("../src/imagenes/Sopabolasverde.png")}  
        />

        <Botonmenu
        texto = "Mote pillo"
        onPress={() => navigation.navigate('Receta8')}   
        textoI = {require ("../src/imagenes/Motepillo.png")}
        />

        <Botonmenu
        texto = "Pan de yuca"
        onPress={() => navigation.navigate('Receta9')}  
        textoI = {require ("../src/imagenes/Pandeyuca.png")} 
        />

        <Botonmenu
        texto = "Muchines de yuca"
        onPress={() => navigation.navigate('Receta10')}
        textoI = {require ("../src/imagenes/Muchinesdeyuca.png")}
        />

        <Text style={styles.titulo3}>VERDURAS, LEGUMBRES Y CERELES</Text>

        <Botonmenu
          texto = "Bolón de verdes"
          onPress ={() => navigation.navigate('Receta11')} 
          textoI = {require ("../src/imagenes/Bolondeverde.png")}
        />

        <Botonmenu
          texto="Picante de yuca con pollo"
          onPress={() => navigation.navigate('Receta12')} 
          textoI = {require ("../src/imagenes/Picantedeyuca.png")}
        />

        <Botonmenu
          texto ="Llapingachos"
          onPress={() => navigation.navigate('Receta13')} 
          textoI = {require ("../src/imagenes/Llapingachos.png")}
        />

        <Botonmenu
          texto = "Niños envueltos"
          onPress={() => navigation.navigate('Receta14')}   
          textoI = {require ("../src/imagenes/Ninosenvueltos.png")}
        />

        <Botonmenu
          texto = "Col morada hervida"
          onPress={() => navigation.navigate('Receta15')} 
          textoI = {require ("../src/imagenes/Colmoradahervida.png")}  
       />

        <Botonmenu
          texto = "Moros y cristianos"
          onPress={() => navigation.navigate('Receta16')} 
          textoI = {require ("../src/imagenes/Morosycristianos.png")}  
        />

        <Botonmenu
          texto = "Menestra con carne"
          onPress={() => navigation.navigate('Receta17')}   
          textoI = {require ("../src/imagenes/Menestraconcarne.png")}
        />
        <Botonmenu
          texto = "Aguacate a la serrana"
          onPress={() => navigation.navigate('Receta18')}   
          textoI = {require ("../src/imagenes/Aguacatealaserrana.png")}
        />

        <Botonmenu
          texto = "Torta de choclo"
          onPress={() => navigation.navigate('Receta19')} 
          textoI = {require ("../src/imagenes/Tortadechoclo.png")}  
        />

        <Text style={styles.titulo3}>CARNES</Text>

        <Botonmenu
          texto = "Empanada de verde con carne"
          onPress={() => navigation.navigate('Receta20')}   
          textoI = {require ("../src/imagenes/Empanadadeverde.png")}
        />

        <Botonmenu
            texto = "Guatita"
            onPress ={() => navigation.navigate('Receta21')} 
            textoI = {require ("../src/imagenes/Guatita.png")}
        />

        <Botonmenu
            texto="Arroz con pollo"
            onPress={() => navigation.navigate('Receta22')} 
            textoI = {require ("../src/imagenes/Arrozconpollo.png")}
        />

        <Botonmenu
        texto ="Fritada quiteña"
        onPress={() => navigation.navigate('Receta23')} 
        textoI = {require ("../src/imagenes/Fritadaquitena.png")}
        />

        <Botonmenu
        texto = "Lomito saltado"
        onPress={() => navigation.navigate('Receta24')}   
        textoI = {require ("../src/imagenes/Lomitosaltado.png")}
        />

        <Botonmenu
        texto = "Carne en palito"
        onPress={() => navigation.navigate('Receta25')}   
        textoI = {require ("../src/imagenes/Carneenpalito.png")}
        />

        <Botonmenu
        texto = "Seco de gallina"
        onPress={() => navigation.navigate('Receta26')} 
        textoI = {require ("../src/imagenes/Secodegallina.png")}  
        />

        <Botonmenu
        texto = "Ají de gallina"
        onPress={() => navigation.navigate('Receta27')}
        textoI = {require ("../src/imagenes/Ajidegallina.png")}   
        />
        <Botonmenu
        texto = "Seco de chivo"
        onPress={() => navigation.navigate('Receta28')}   
        textoI = {require ("../src/imagenes/Secodechivo.png")}
        />

        <Botonmenu
        texto = "Carne molida al horno"
        onPress={() => navigation.navigate('Receta29')}   
        textoI = {require ("../src/imagenes/Carnemolida.png")}
        />

        <Text style={styles.titulo3}>PESCADOS Y MARISCOS</Text>

        <Botonmenu
        texto = "Sango de verde con camarones"
        onPress={() => navigation.navigate('Receta30')}   
        textoI = {require ("../src/imagenes/Sangodeverde.png")}
        />
                <Botonmenu
            texto = "Corvina frita con patacones"
            onPress ={() => navigation.navigate('Receta31')} 
            textoI = {require ("../src/imagenes/Corvinafrita.png")}
        />

        <Botonmenu
            texto="Encebollado de pescado"
            onPress={() => navigation.navigate('Receta32')} 
            textoI = {require ("../src/imagenes/Ensebolladodepescado.png")}
        />

        <Botonmenu
        texto ="Enrrollado de atun"
        onPress={() => navigation.navigate('Receta33')} 
        textoI = {require ("../src/imagenes/Enrolladodeatun.png")}
        />

        <Botonmenu
        texto = "Cebiche de camarones"
        onPress={() => navigation.navigate('Receta34')}
        textoI = {require ("../src/imagenes/Cevichedecamaron.png")}
        />

        <Botonmenu
        texto = "Chupe de atún"
        onPress={() => navigation.navigate('Receta35')}
        textoI = {require ("../src/imagenes/Chupedeatun.png")}   
        />

        <Botonmenu
        texto = "Sancocho de pescado"
        onPress={() => navigation.navigate('Receta36')}   
        />

        <Botonmenu
        texto = "Sudado de pescado"
        onPress={() => navigation.navigate('Receta37')}   
        />
        <Botonmenu
        texto = "Encocado de camarones"
        onPress={() => navigation.navigate('Receta38')}   
        />

        <Botonmenu
        texto = "cebiche de pescado"
        onPress={() => navigation.navigate('Receta39')}   
        />

        <Text style={styles.titulo3}>POSTRES</Text>

        <Botonmenu
        texto = "Cocadas"
        onPress={() => navigation.navigate('Receta40')}   
        />

        <Botonmenu
        texto = "Torta de maduro"
        onPress={() => navigation.navigate('Receta41')}   
        />

        <Botonmenu
        texto = "Colada morada"
        onPress={() => navigation.navigate('Receta42')}   
        />

        <Botonmenu
        texto = "Torta de zapallo"
        onPress={() => navigation.navigate('Receta43')}   
        />

        <Botonmenu
        texto = "Panqueques de guineo"
        onPress={() => navigation.navigate('Receta44')}   
        />

        <Botonmenu
        texto = "Morocho"
        onPress={() => navigation.navigate('Receta45')}   
        />
      </View>


      <StatusBar style="auto" />

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginTop:40,
    marginBottom:30,
    marginLeft:10,
    marginEnd:20,
    alignContent:"center"
  },
  titulo:{
    margin:"3%",
    color: "#fa4211",
    fontSize:20,
    fontWeight:"bold",
  },
  
  vista2:{
    flex:1,
    backgroundColor:"#BEEEE7",
    alignItems:"center",

  },

  titulo3:{
    margin:"2%",
    color: "#97AC94",
    fontSize:20,
    fontWeight:"bold",
  },
  


});
