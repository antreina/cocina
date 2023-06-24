import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity, ScrollView} from 'react-native';


export default function App({navigation}) {
  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.vista2}>
      <Text style={styles.titulo}>Cocina Ecuatoriana</Text>
      </View>
      <View style={styles.vista2}>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('Receta1')} >
        <Text style={styles.buttonText}>Chifles</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Ensalada de vegetales</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Locro de papa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Ensalada de frijoles blancos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Patacones</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Ensalada de beterava y zanahoria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sopa de bolas de verde</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Mote pillo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Pan de yuca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Muchines de yuca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Bolón de verdes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Picante de yuca con pollo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Llapingachos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Niños envueltos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Col morada hervida</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Coliflor manabita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Moros y cristianos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Menestra con carne</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Aguacate a la serrana</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Torta de choclo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Empanada de verde con carne</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Guatita</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Arroz con pollo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Fritada quiteña</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Lomito Saltado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Carne en palito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Seco de gallina</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Aji de gallina</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Seco de chivo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Carne molida al horno</Text>
      </TouchableOpacity>
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

  vista2:{
    flex:1,
    backgroundColor:"#65e6cc",
    alignItems:"center",

  },

  titulo:{
    margin:"3%",
    color: "#fa4211",
    fontSize:20,
    fontWeight:"bold",

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: "90%",
    borderRadius: 10,
    marginTop: 10,
    borderWidth:1,
    borderColor:"#ffff",
  },
  buttonText: {
    color: '#0f2e79',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
