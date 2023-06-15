import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { favCharacter, unFavCharacter } from '../../store/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';

import filterOffIcon from '../../../assets/favFilter_empty.png';
import filterOnIcon from '../../../assets/favFilter_full.png';
import { selectedCharacter } from '../../store/actions/character.action';
import styles from './styles';
import { useState } from 'react';

const Characters = ({navigation}) => {

  const favIconOn=require('../../../assets/hearts_full.png');
  const favIconOff=require('../../../assets/hearts_empty.png');

  const dispatch = useDispatch();
  const characterList=useSelector(state=> state.characters.characters);
  const [favStatus, setFavStatus]=useState(false);
  let favoritos = useSelector(state=>state.user.favCharacters);
  const [filterFavs, setFilterFavs] = useState(false)
  const [filterIcon, setFilterIcon] = useState(filterOffIcon)
  console.log(characterList)
  
  
  

  const onHandleFilter=()=>{
    if(!filterFavs){
      setFilterIcon(filterOnIcon)
    }else{
      setFilterIcon(filterOffIcon)
    }
    setFilterFavs(!filterFavs)
  };

  const onHandleFav=(item)=>{
    setFavStatus(!favStatus)
    console.log("entre a fav");
    if (favoritos.includes(item)){
      dispatch(unFavCharacter(item));
      console.log(`Se elimino el item id: ${item.id} de Favoritos`);
  }else{
      dispatch(favCharacter(item));
      console.log(`Se agrego el item id: ${item.id} a Favoritos`);
    };
  };

  const handleSelectedCharacter = (item) => {
    console.log("first", item.id)
    dispatch(selectedCharacter(item.id));
    navigation.navigate("Character Detail")
  }

  const renderItem = ({item}) => {
    let favIcon
    if(favoritos.includes(item)){
      favIcon=favIconOn
    }else{
      favIcon=favIconOff
    }
    return(
      <View>
        <TouchableOpacity style={styles.renderItemStyle} onPress={()=>handleSelectedCharacter(item)} >
          <Image style={styles.itemImageStyle} source={item.image}/>
          <Text style={styles.textItemStyle}>{item.name}</Text>
          <View style={styles.itemStyle}>
            <TouchableOpacity onPress={()=> onHandleFav(item)}>
                <Image style={styles.favStyle} source={favIcon}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
          data={characterList}
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