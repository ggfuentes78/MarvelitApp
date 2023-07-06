import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { loadComics, loadSingleComic, selectedComic } from '../../store/actions/comic.action';
import { loadSeries, selectedSerie } from '../../store/actions/series.action';
import { useDispatch, useSelector } from 'react-redux';

import CONFIG from '../../constants/config';
import React from 'react';
import getInfo from '../../services/api';
import { loadEvents } from '../../store/actions/event.action';
import styles from './styles';
import { useEffect } from 'react';

const ComicDetail = ({navigation}) => {

  const comicInfo = useSelector(state => state.comics.selectedComic)
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSingleComic(comicInfo.resourceURI));
    dispatch(loadSeries(comicInfo.series.resourceURI));
    // dispatch(loadEvents(characterInfo.events.collectionURI));

  }, []);

  // const seriesList=useSelector(state=> state.series.series);

  const handleSelectedItem = (item, type) => {
    switch (type){
      case 'Comic':
        dispatch(selectedComic(item));
        navigation.navigate("Comic Detail");
        break;
      case 'Event':
        dispatch(selectedEvent(item.id));
        navigation.navigate("Event Detail");
        break;
      case 'Series':
        dispatch(selectedSerie(item.id));
        navigation.navigate("Series Detail");
        break;
    default:
      return
    }
  }
  // const comicList=useSelector(state=> state.comics.comics);
  // const eventList=useSelector(state=> state.events.events);
  const seriesList=useSelector(state=> state.series.series);
  // console.log("COMICS DEL CHARACTER", JSON.stringify(comicList))
  // console.log("COMIC SELECTED: ", comicInfo)
  const str=[comicInfo.thumbnail.path,".",comicInfo.thumbnail.extension]
  imgUrl= String.prototype.concat(...str);
  // console.log("IMAGEN====>>>>", imgUrl)
  // const comics=characterInfo.comics.items
  // const events=characterInfo.events
  // const stories=characterInfo.stories
  // console.log("COMICS", comicList);
  // console.log("EVENTS", eventList)
  // console.log("SERIES", seriesList)
  
  const renderSeriesItem = ({item}) => {
    return(
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.listItemContainer} onPress={()=>handleSelectedItem(item, "Series")} >
          <View style={styles.imgContainer}>
            <Image style={styles.itemImageStyle} source={{uri:`${ item.thumbnail.path}.${ item.thumbnail.extension}`}}/>
          </View>
          <View>
          <Text style={styles.textItemStyle}>{ item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
};
  const renderItem = ({item}) => {
// console.log("SELECTED CHARACTER",item)
      // const response= await getInfo(item.items.resourceURI)
      // console.log("DATA COMIC SELECCIONADO", JSON.stringify(response))
      return(
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItemContainer} onPress={()=>console.log("ACA IRIA EL handleSelectedComic(item)")} >
            <View style={styles.imgContainer}>
              <Image style={styles.itemImageStyle} source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}/>
            </View>
            <View style={styles.textItemContainer}>
            <Text style={styles.textItemStyle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    // }catch(err){
    //   console.log("Ha ocurrido un error al cargar el comic", err)
    // }
  };
  // console.log("EVENTLIST", eventList.length)


  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{comicInfo.title}</Text>
          </View>
          <ScrollView>
          <View style={styles.listContainer}>
              <View style={styles.renderItemStyle}>
                <Image style={styles.itemImageStyle} source={{uri: imgUrl}}/>
              </View>
              <View style={styles.separador}>
                <Text style={styles.subtitle}>Info</Text>
                <Text style={styles.textItemStyle}>Description: {comicInfo.description}</Text>
                <Text style={styles.textItemStyle}>Format: {comicInfo.format}</Text>
                <Text style={styles.textItemStyle}>Pages: {comicInfo.pageCount}</Text>
                {comicInfo.creators.items.length>0 &&<Text style={styles.textItemStyle}>{comicInfo.creators.items[0].role}: {comicInfo.creators.items[0].name}</Text>}
                {comicInfo.creators.items.length>1 && <Text style={styles.textItemStyle}>{comicInfo.creators.items[1].role}: {comicInfo.creators.items[1].name}</Text>}
                {comicInfo.creators.items.length>2 && <Text style={styles.textItemStyle}>{comicInfo.creators.items[2].role}: {comicInfo.creators.items[2].name}</Text>}

              </View>
              <View style={styles.separador}>
                <Text style={styles.subtitle}>Series</Text>
                {seriesList.length>0 ? 
                  <FlatList
                    data={seriesList}
                    renderItem={renderSeriesItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                  />
                : 
                  <Text style={styles.textItemStyle}>No Series Data available</Text>
                }
              </View>
              {/* <View style={styles.separador}>
                <Text style={styles.subtitle}>Comics</Text>
                {comicList.length>0 ? 
                  <FlatList
                    data={comicList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                  />
                : 
                  <Text style={styles.textItemStyle}>No Comics Data available</Text>
                }
              </View> */}
              {/* <View style={styles.separador}>
                <Text style={styles.subtitle}>Series</Text>
                {seriesList.length>0 ? 
                  <FlatList
                    data={seriesList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                  />
                : 
                  <Text style={styles.textItemStyle}>No Series Data available</Text>
                }
              </View> */}
              {/* <View style={styles.separador}>
                <Text style={styles.subtitle}>Events</Text>
                {eventList.length>0 ? 
                <FlatList
                  data={eventList}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              :
              <Text style={styles.textItemStyle}>No Data available</Text>
              }
              </View> */}
          </View>
          </ScrollView>
      </View>
  )
}

export default ComicDetail
