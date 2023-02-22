import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
// You can import from local files
import AssetExample from './components/AssetExample';
import ListaVideojuegos from './components/ListaVideojuegos';
import ListaConsolas from './components/ListaConsolas';
import Slider from './components/Slider';
import { useFonts } from 'expo-font';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SERPENTINE': require('./assets/fonts/SerpentineBoldItalic.ttf'),
   });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        TIENDA DE VIDEOJUEGOS
      </Text>
      <ScrollView style={styles.scrollstyle}>
      <SafeAreaView>
      <Slider><Text style={styles.text}>PROMOCIONES</Text></Slider>
      <SafeAreaView><Text style={styles.text}>JUEGOS MAS COMPRADOS</Text></SafeAreaView>
      <ListaVideojuegos><Text style={styles.text}>JUEGOS MAS COMPRADOS</Text></ListaVideojuegos>
      <SafeAreaView><Text style={styles.text}>CONSOLAS DISPONIBLES</Text></SafeAreaView>
      <ListaConsolas><Text style={styles.text}>CONSOLAS DISPONIBLES</Text></ListaConsolas>
      </SafeAreaView>
     </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64B5F6',
  },
  text:{
    color: 'yellow',
    fontSize:40,
    fontWeight:'bold',
    fontFamily:'SERPENTINE',
    textAlign:'center',
    backgroundColor:'red',
  },
  scrollstyle:{
    backgroundColor: '#64B5F6',
  }
});
