import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import characters from '../../../public/characters'
import filterOffIcon from '../../../assets/favFilter_empty.png';
import filterOnIcon from '../../../assets/favFilter_full.png';
import styles from './styles';
import { useState } from 'react';

const Characters = () => {

  const characterList={characters};
  const [favoritos, setFavoritos]=useState([]);
  const [filterFavs, setFilterFavs] = useState(false)
  const [filterIcon, setFilterIcon] = useState(filterOffIcon)
  console.log(characterList)
  
  const favIconOn=require('../../../assets/hearts_full.png');
  const favIconOff=require('../../../assets/hearts_empty.png');
  

  const onHandleFilter=()=>{
    if(!filterFavs){
      setFilterIcon(filterOnIcon)
    }else{
      setFilterIcon(filterOffIcon)
    }
    setFilterFavs(!filterFavs)
  };

  const onHandleFav=(item)=>{
    console.log("entre a fav");
    if (favoritos.includes(item)){
      setFavoritos(prevState=>prevState.filter(element=> element!==item))
      console.log(`Se elimino el item id: ${item.id} de Favoritos`)
  }else{
      setFavoritos(prevState=> [...prevState, item])
      console.log(`Se agrego el item id: ${item.id} a Favoritos`)
    }
  };

  const renderItem = ({item}) => {
    let favIcon
    if(favoritos.includes(item)){
      favIcon=favIconOn
    }else{
      favIcon=favIconOff
    }
    return(
      <View style={styles.renderItemStyle}> 
        <Image style={styles.itemImageStyle} source={item.image}/>
        <Text style={styles.textItemStyle}>{item.name}</Text>
        <View style={styles.textItemStyle}>
          <TouchableOpacity onPress={()=> onHandleFav(item)}>
            <Image style={styles.favStyle} source={favIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    )
    };

    console.log(`Favoritos: ${JSON.stringify(favoritos)}`)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Character List</Text>
        <TouchableOpacity onPress={()=> onHandleFilter()}>
            <Image style={styles.filterIcon} source={filterIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {!filterFavs &&(
        <FlatList
          data={characterList.characters}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        )}
        {filterFavs &&(
        <FlatList
          data={favoritos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        )}

      </View>
    </View>
  );
}

export default Characters;