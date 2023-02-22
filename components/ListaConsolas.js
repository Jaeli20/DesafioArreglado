import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import {ListItem,Avatar,Image} from 'react-native-elements';

export default function ListaConsolas(){

  const consolas = [
  {
    Title: 'CONSOLAS DISPONIBLES',
    consola: 'PlayStation 5',
    precio: '999$',
    image:'https://siman.vtexassets.com/arquivos/ids/3836572-1600-auto?v=638094974793130000&width=1600&height=auto&aspect=true'
  },
  {
    consola: 'Xbox Series',
    precio: '899$',
    image:'https://siman.vtexassets.com/arquivos/ids/3282999-1600-auto?v=637973931822400000&width=1600&height=auto&aspect=true'
  },
  {
    consola: 'PlayStation 4',
    precio: '449$',
    image:'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$1600px--t$'
  },
  {
    consola: 'Xbox One',
    precio: '399$',
    image:'https://cybergamesemanuel.com/wp-content/uploads/2018/09/360-1.jpg'
  },
  {
    consola: 'Nintendo Switch',
    precio: '529$',
    image: 'https://walmartsv.vtexassets.com/arquivos/ids/264973/Consola-Nintendo-Switch-1-1-2-17415.jpg?v=637981077886200000'
  },
];

return(
  consolas.map( (consola,i)=>{
    if(consola.consola=='PlayStation 5', 'Xbox Series', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'){
return(
      
      <ListItem key={i}>
      <Avatar rounded source={{uri:consola.image}}/>
      <ListItem.Content>
      <ListItem.Title> {consola.consola} </ListItem.Title>
      <ListItem.Subtitle> {consola.precio} </ListItem.Subtitle>
      </ListItem.Content>
      </ListItem>
      )
    }
      
      }
  )
)

}