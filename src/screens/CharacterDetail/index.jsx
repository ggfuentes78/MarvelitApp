import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { loadCharComics, loadSingleComic, selectedComic } from '../../store/actions/comic.action';
import { loadCharSeries, loadSeries, selectedSerie } from '../../store/actions/series.action';
import { loadEvents, selectedEvent } from '../../store/actions/event.action';
import { useDispatch, useSelector } from 'react-redux';

import CONFIG from '../../constants/config';
import React from 'react';
import getInfo from '../../services/api';
import styles from './styles';
import { useEffect } from 'react';

const CharacterDetail = ({navigation}) => {

  const characterInfo = useSelector(state => state.characters.selectedCharacter)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCharComics(characterInfo.comics.collectionURI));
    dispatch(loadCharSeries(characterInfo.series.collectionURI));
    dispatch(loadEvents(characterInfo.events.collectionURI));

  }, []);


  const comicList= useSelector(state=> state.comics.comics);
  const eventList=useSelector(state=> state.events.events);
  const seriesList=useSelector(state=> state.series.series);
  const str=[characterInfo.thumbnail.path,".",characterInfo.thumbnail.extension]
  imgUrl= String.prototype.concat(...str);

  const handleSelectedItem = (item, type) => {
    switch (type){
      case 'Comic':
        dispatch(selectedComic(item.id));
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
  
  const renderComicItem = ({item}) => {
      return(
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItemContainer} onPress={()=>handleSelectedItem(item, "Comic")} >
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

  const renderEventItem = ({item}) => {
      return(
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItemContainer} onPress={()=>handleSelectedItem(item, "Event")} >
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
  
  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{characterInfo.name}</Text>
          </View>
          <ScrollView>
          <View style={styles.listContainer}>
              <View style={styles.renderItemStyle}>
                <Image style={styles.itemImageStyle} source={{uri: imgUrl}}/>
              </View>
              <View style={styles.separador}>
                <Text style={styles.subtitle}>Info</Text>
                {characterInfo.description!="" ? <Text style={styles.textItemStyle}>{characterInfo.description}</Text> : <Text style={styles.textItemStyle}>No Data available</Text>}
              </View>
              <View style={styles.separador}>
                <Text style={styles.subtitle}>Comics</Text>
                {comicList.length>0 ? 
                  <FlatList
                    data={comicList}
                    renderItem={renderComicItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                  />
                : 
                  <Text style={styles.textItemStyle}>No Comics Data available</Text>
                }
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
              <View style={styles.separador}>
                <Text style={styles.subtitle}>Events</Text>
                {eventList.length>0 ? 
                <FlatList
                  data={eventList}
                  renderItem={renderEventItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              :
              <Text style={styles.textItemStyle}>No Data available</Text>
              }
              </View>
          </View>
          </ScrollView>
      </View>
  )
}

export default CharacterDetail
