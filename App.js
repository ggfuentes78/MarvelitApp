import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Modal from './src/components/Modal';
import { StatusBar } from 'expo-status-bar';
import characters from './public/characters';
import { useState } from 'react';

export default function App() {

  const [favoritos, setFavoritos]=useState([]);
  const [characterList, setCharacterList]= useState({characters});
  console.log(characterList)
  
const onHandleFav=(id)=>{
  console.log("entre a fav");
  if (favoritos.includes(id)){
    setFavoritos(prevState=>prevState.filter(element=> element!==id))
    console.log(`Se elimino el item id: ${id} de Favoritos`)
 }else{
    setFavoritos(prevState=> [...prevState, id])
    console.log(`Se agrego el item id: ${id} a Favoritos`)
  }
}

  const renderItem = ({item}) => {
    let favIcon
    if(favoritos.includes(item.id)){
      favIcon=require('./assets/hearts_full.png')
    }else{
      favIcon=require('./assets/hearts_empty.png')
    }
    return(
      <View style={styles.renderItemStyle}> 
        <Image style={styles.itemImageStyle} source={item.image}/>
        <Text style={styles.textItemStyle}>{item.name}</Text>
        <View style={styles.textItemStyle}>
          <TouchableOpacity onPress={()=> onHandleFav(item.id)}>
            <Image style={styles.favStyle} source={favIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    )
    };

    console.log(`Favoritos: ${favoritos}`)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>Character List</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={characterList.characters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#231f20",
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer:{
    marginTop: 70,
    marginBottom: 15,
    fontSize:40,
    fontWeight: 500,
    color: "#f8f3f6"
  },
  listContainer:{
    flex: 3,
    marginHorizontal: 5,
    marginVertical: 20,
  
  },
  renderItemStyle:{
    height: 150,
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: "#4c4f56",
    fontSize:40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center" ,
    shadowColor: "white",
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1},
    shadowRadius: 2,
    elevation: 7,
    position: "relative"
  },
  touchableItem:{
    height: 30,
    resizeMode: "contain"
  },
  itemImageStyle:{
    height: 140,
    resizeMode:"contain",
    right:120,
  },
  textItemStyle:{
    fontSize:30,
    textShadowColor:"black",
    textShadowOffset:{ width: 1, height: 1},
    textShadowRadius:5,
    textDecorationColor:"black",
    color:"#f8f3f6",
    position:"absolute",
  },
  itemStyle:{
    fontSize:30,
    textShadowColor:"black",
    textShadowOffset:{ width: 1, height: 1},
    textShadowRadius:5,
    textDecorationColor:"black",
    color:"#f8f3f6",
    position:"absolute",
  },
  favStyle:{
    height: 30,
    resizeMode:"contain",
    left:150,
    bottom:-50,
  }
});
