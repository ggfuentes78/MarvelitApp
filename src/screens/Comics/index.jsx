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

  const comicsList=useSelector(state=> state.comics);
  const [filterFavs, setFilterFavs] = useState(false)


  const handleSelectedComic = (itemId) => {
    dispatch(selectedComic(itemId));
    navigation.navigate("Comic Detail")
  }
  const fetchMoreData = () => {
    if(!comicsList.isListEnd && !comicsList.moreLoading){
      setPage(page+1)
    }
  }
  
  const renderItem = ({item}) => {
    console.log("RENDER", item)
 
    return(
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.renderItemStyle} onPress={()=>handleSelectedComic(item.id)} >
          <View style={styles.imgContainer}>
            <Image style={styles.itemImageStyle} source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}/>
          </View>
          <View style={styles.textItemContainer}>
          <Text style={styles.textItemStyle}>{item.title}</Text>
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
        {/* <TouchableOpacity onPress={()=> onHandleFilter()}>
            <Image style={styles.filterIcon} source={filterIcon} />
        </TouchableOpacity> */}
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