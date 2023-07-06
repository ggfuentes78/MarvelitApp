import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { favComic, loadFavComics, unFavComic } from '../../store/actions/user.action';
import { loadComics, searchComics, selectedComic } from '../../store/actions/comic.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import CONFIG from '../../constants/config';
import SearchBar from '../../components/SearchBar';
import { fetchFavCharacters } from '../../db';
import filterOffIcon from '../../../assets/favFilter_empty.png';
import filterOnIcon from '../../../assets/favFilter_full.png';
import styles from './styles';

const Comics = ({navigation}) => {

  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const favoritos = useSelector(state=>state.user.favComics);
  
  const [page, setPage] = useState(0)
  const [startsWith,setStartsWith]=useState("")

  const handleReload = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  useEffect(() => {
    if(startsWith=="") {
      if(page===0)handleReload();
      dispatch(loadComics(page))
    }else{
      if(page===0)handleReload()
      dispatch(searchComics(startsWith , page));
    };;
  }, [page, startsWith]);

  const favIconOn=require('../../../assets/hearts_full.png');
  const favIconOff=require('../../../assets/hearts_empty.png');

  const comicsList=useSelector(state=> state.comics);
  const [favStatus, setFavStatus]=useState(false);
  const [filterFavs, setFilterFavs] = useState(false)
  const [filterIcon, setFilterIcon] = useState(filterOffIcon)
  
  
  const onHandleFilter=()=>{
    if(!filterFavs){
      setFilterIcon(filterOnIcon)
    }else{
      setFilterIcon(filterOffIcon)
    }
    setFilterFavs(!filterFavs)
  };

  const onHandleFav=(item)=>{
    if (favoritos.find(favItem=>favItem.id==item.id)){
      dispatch(unFavComic(item));
  }else{
      dispatch(favComic(item));
    };
    setFavStatus(!favStatus)
  };

  const handleSelectedComic = (item) => {
    dispatch(selectedComic(item.id));
    navigation.navigate("Comic Detail")
  }
  const fetchMoreData = () => {
    if(!comicsList.isListEnd && !comicsList.moreLoading){
      setPage(page+1)
    }
  }
  
  const renderItem = ({item}) => {
    console.log("RENDER", item)
    let favIcon
    const newItem= {
      "id": item.id, 
      "title":  item.title,
      "description": item.description,
      "series":{"resourceURI": item.series.resourceURI},
      "resourceURI": item.resourceURI,
      "thumbnail":{
          "path": item.thumbnail.path,
          "extension": item.thumbnail.extension,
      },
      "format": item.format,
      "pageCount": item.pageCount,
     } 
     console.log("NEW ITEM", newItem)
    if(favoritos.find(item=>item.id == newItem.id)){
      favIcon=favIconOn
    }else{
      favIcon=favIconOff
    }
    return(
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.renderItemStyle} onPress={()=>handleSelectedComic(newItem)} >
          <View style={styles.imgContainer}>
            <Image style={styles.itemImageStyle} source={{uri:`${newItem.thumbnail.path}.${newItem.thumbnail.extension}`}}/>
          </View>
          <View style={styles.textItemContainer}>
          <Text style={styles.textItemStyle}>{newItem.title}</Text>
          </View>
          <View style={styles.itemStyle}>
            <TouchableOpacity onPress={()=> onHandleFav(newItem)}>
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
      setStartsWith(searchText)
      setPage(0)
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Comics</Text>
        <TouchableOpacity onPress={()=> onHandleFilter()}>
            <Image style={styles.filterIcon} source={filterIcon} />
        </TouchableOpacity>
      </View>
      {!filterFavs && <SearchBar onSearch={handleSearch}/>}
      <View style={styles.listContainer}>
          {!filterFavs &&(
          <FlatList
            ref={flatListRef}
            contentContainerStyle={{flexGrow: 1}}
            data={comicsList.comics}
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
      </View>
    </View>
  );
}

export default Comics;