import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { loadSeries, loadSingleSerie, selectedSerie } from '../../store/actions/series.action';
import { useDispatch, useSelector } from 'react-redux';

import CONFIG from '../../constants/config';
import React from 'react';
import getInfo from '../../services/api';
import { loadEvents } from '../../store/actions/event.action';
import styles from './styles';
import { useEffect } from 'react';

const SeriesDetail = () => {

  const serieInfo = useSelector(state => state.series.selectedSeries)

  const dispatch = useDispatch();

  useEffect(() => {

  }, []);


 
  const str=[serieInfo.thumbnail.path,".",serieInfo.thumbnail.extension]
  imgUrl= String.prototype.concat(...str);
  const renderItem = ({item}) => {
      return(
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItemContainer} onPress={()=>console.log("ACA IRIA EL handleSelectedSerie(item)")} >
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


  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{serieInfo.title}</Text>
          </View>
          <ScrollView>
          <View style={styles.listContainer}>
              <View style={styles.renderItemStyle}>
                <Image style={styles.itemImageStyle} source={{uri: imgUrl}}/>
              </View>
              <View style={styles.separador}>
                <Text style={styles.subtitle}>Info</Text>
                {serieInfo.description!="" ? <Text style={styles.textItemStyle}>{serieInfo.description}</Text> : <Text style={styles.textItemStyle}>No Data available</Text>}
              </View>
          </View>
          </ScrollView>
      </View>
  )
}

export default SeriesDetail
