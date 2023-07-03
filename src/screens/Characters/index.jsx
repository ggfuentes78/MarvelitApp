import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { favCharacter, loadFavCharacters, unFavCharacter } from '../../store/actions/user.action';
import { loadCharacters, searchCharacters, selectedCharacter, unloadCharacters } from '../../store/actions/character.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import CONFIG from '../../constants/config';
import SearchBar from '../../components/SearchBar';
import { fetchFavCharacters } from '../../db';
import filterOffIcon from '../../../assets/favFilter_empty.png';
import filterOnIcon from '../../../assets/favFilter_full.png';
import styles from './styles';

const Characters = ({navigation}) => {

  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  let favoritos = useSelector(state=>state.user.favCharacters);
  
  const [page, setPage] = useState(0)
  const [startsWith,setStartsWith]=useState("")
  const [reload, setReload]=useState(false)

  const handleReload = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  useEffect(() => {
    if(startsWith=="") {
      console.log("USEEFFECT STARTSWITH VACIO!")
      if(page===0)handleReload();
      dispatch(loadCharacters(page))
    }else{
      console.log("page", page)
      if(page===0)handleReload()
      dispatch(searchCharacters(startsWith , page));
    };
    // dispatch(loadFavCharacters());
  }, [page, reload]);

  const favIconOn=require('../../../assets/hearts_full.png');
  const favIconOff=require('../../../assets/hearts_empty.png');

  const characterList=useSelector(state=> state.characters);
  const [favStatus, setFavStatus]=useState(false);
  // let favoritos = useSelector(state=>state.user.favCharacters);
  const [filterFavs, setFilterFavs] = useState(false)
  const [filterIcon, setFilterIcon] = useState(filterOffIcon)
  // console.log("CHARACTER LIST",characterList)
  
  
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
    // console.log("entre a fav general");
    if (favoritos.includes(item)){
      // console.log("entre a unfav");
      dispatch(unFavCharacter(item));
      // console.log(`Se elimino el item id: ${item.id} de Favoritos`);
  }else{
    console.log("entre a fav");
      dispatch(favCharacter(item));
      // console.log(`Se agrego el item id: ${item.id} a Favoritos`);
    };
  };

  const handleSelectedCharacter = (item) => {
    dispatch(selectedCharacter(item.id));
    navigation.navigate("Character Detail")
  }
  const fetchMoreData = () => {
    if(!characterList.isListEnd && !characterList.moreLoading){
      setPage(page+1)
      // console.log("PAGE ", page)
    }
  }
  const renderItem = ({item}) => {
    let favIcon
    if(favoritos.includes(item)){
      favIcon=favIconOn
    }else{
      favIcon=favIconOff
    }
    return(
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.renderItemStyle} onPress={()=>handleSelectedCharacter(item)} >
          <View style={styles.imgContainer}>
            <Image style={styles.itemImageStyle} source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}/>
          </View>
          <View style={styles.textItemContainer}>
          <Text style={styles.textItemStyle}>{item.name}</Text>
          </View>
          <View style={styles.itemStyle}>
            <TouchableOpacity onPress={()=> onHandleFav(item)}>
                <Image style={styles.favStyle} source={favIcon}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
    };

    const renderEmptyComponent = () => {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No items to display</Text>
        </View>
      );
    };

    const handleSearch = (searchText) =>{
      // dispatch(unloadCharacters)
      setStartsWith(searchText)
      setPage(0)
      setReload(!reload)
      // dispatch(searchCharacters(startsWith))
    }

    // console.log(`Favoritos: ${JSON.stringify(favoritos)}`)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Character List</Text>
        <TouchableOpacity onPress={()=> onHandleFilter()}>
            <Image style={styles.filterIcon} source={filterIcon} />
        </TouchableOpacity>
      </View>
      <SearchBar onSearch={handleSearch}/>
      <View style={styles.listContainer}>
        {/* {characterList.loading ? 
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#3498db"/>
          </View>
          :   */}
          {!filterFavs &&(
          <FlatList
            ref={flatListRef}
            contentContainerStyle={{flexGrow: 1}}
            data={characterList.characters}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            ListEmptyComponent={renderEmptyComponent}
          />
          )}
          {filterFavs &&(
          <FlatList
            data={favoritos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={renderEmptyComponent}
          />
          )}
        {/* } */}
      </View>
    </View>
  );
}

export default Characters;