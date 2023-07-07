import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { loadSeries, searchSeries, selectedSerie } from '../../store/actions/series.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import CONFIG from '../../constants/config';
import SearchBar from '../../components/SearchBar';
import styles from './styles';

const Series = ({navigation}) => {

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
      dispatch(loadSeries(page))
    }else{
      if(page===0)handleReload()
      dispatch(searchSeries(startsWith , page));
    };;
  }, [page, startsWith]);

  const seriesList=useSelector(state=> state.series);
  const [filterFavs, setFilterFavs] = useState(false)
  
  const handleSelectedSeries = (itemId) => {
    dispatch(selectedSerie(itemId));
    navigation.navigate("Series Detail")
  }
  const fetchMoreData = () => {
    if(!seriesList.isListEnd && !seriesList.moreLoading){
      setPage(page+1)
    }
  }
  
  const renderItem = ({item}) => {

    return(
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.renderItemStyle} onPress={()=>handleSelectedSeries(item.id)} >
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
        <Text style={styles.titleText}>Series List</Text>
        {/* <TouchableOpacity onPress={()=> onHandleFilter()}>
            <Image style={styles.filterIcon} source={filterIcon} />
        </TouchableOpacity> */}
      </View>
      <SearchBar onSearch={handleSearch}/>
      <View style={styles.listContainer}>
          {!filterFavs &&(
          <FlatList
            ref={flatListRef}
            contentContainerStyle={{flexGrow: 1}}
            data={seriesList.series}
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

export default Series;