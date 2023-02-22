import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import {ListItem,Avatar,Image} from 'react-native-elements';

export default function Lista1(){

  const juegos = [
  {
    Title: 'JUEGOS MÁS COMPRADOS',
    name: 'The Last of Us',
    consola: 'PlayStation',
    precio: '64.99$',
    image:'https://media.gamestop.com/i/gamestop/10114511/The-Last-of-Us-Remastered---PlayStation-4'
  },
  {
    name: 'Call of Duty: Modern Warfare II',
    consola: 'Xbox',
    precio: '64.99$',
    image:'https://media.gamestop.com/i/gamestop/11206901-11206902?$pdp2x$'
  },
  {
    name: 'Grand Theft Auto V',
    consola: 'PlayStation',
    precio: '18.99$',
    image:'https://media.gamestop.com/i/gamestop/10114511/The-Last-of-Us-Remastered---PlayStation-4'
  },
  {
    name: 'WWE 2K23 Deluxe Edition',
    consola: 'Xbox',
    precio: '99.99$',
    image:'https://media.gamestop.com/i/gamestop/20003155-3b0dde13?$pdp2x$'
  },
  {
    name: 'NBA 2K23',
    consola: 'PlayStation',
    precio: '22.99$',
    image: 'https://media.gamestop.com/i/gamestop/11206859-11206849?$pdp2x$'
  },
];

return(
  juegos.map( (juego,i)=>{
    if(juego.consola=='PlayStation', 'Xbox'){
return(
      
      <ListItem key={i}>
      <Avatar rounded source={{uri:juego.image}}/>
      <ListItem.Content>
      <ListItem.Title> {juego.name} </ListItem.Title>
      <ListItem.Subtitle> {juego.consola} </ListItem.Subtitle>
      <ListItem.Subtitle> {juego.precio} </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>
      )
    }
      
      }
  )
)

}