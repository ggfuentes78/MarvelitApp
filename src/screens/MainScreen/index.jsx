import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { connect, useDispatch, useSelector } from "react-redux";
import { loadFavorites, loadUser, setImg } from "../../store/actions/user.action";
import { loadNewComics, loadNextComics, selectedNewComic, selectedNextComic } from "../../store/actions/comic.action";
import { useEffect, useState, } from "react";

import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import charactersImg from '../../../assets/characters1.png';
import comicsImg from '../../../assets/comics.jpg';
import {db}from '../../db';
import styles from "./styles";
import teamsImg from '../../../assets/characters.png';

const MainScreen = ({navigation, favCharacters, loadFavorites}) => {
    
    const dispatch=useDispatch();
    const user= useSelector(state=> state.user)
    console.log("USER", user.userName, user.userImg)
    
    
    useEffect(() => {
        loadItemsFromDB()
        dispatch(loadNewComics())
        dispatch(loadNextComics())
    }, [])

    const newComicsList= useSelector(state=> state.comics.newComics)
    const nextComicsList= useSelector(state=> state.comics.nextComics)
    
    const loadItemsFromDB = () => {
        console.log("LOAD DB")
        let userImg;
        db.transaction((tx)=>{
            console.log("CARGANDO USUARIO")
            tx.executeSql('SELECT * FROM userInfo', [], (_, { rows }) =>{
                console.log("first USER", rows._array[0])
                userImg=(rows.item(0).userImg)
                console.log("second USER", userImg)
                dispatch(loadUser(userImg));
            });
        });
        const itemsArray = [];
        console.log("....CaRGANDO FAVORITOS...")
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM favCharacters', [], (_, { rows }) => {
            for (let i = 0; i < rows.length; i++) {
                let newItem = {
                    "id": parseInt(rows.item(i).id), 
                    "name": rows.item(i).name,
                    "description": rows.item(i).description,
                    "comics":{"collectionUri": rows.item(i).comicsCollectionURI},
                    "resourceURI": rows.item(i).resourceURI,
                    "thumbnail":{
                        "path":rows.item(i).thumbnailPath,
                        "extension":rows.item(i).thumbnailExtension},
                };
              itemsArray.push(newItem);
            }
            loadFavorites(itemsArray);
          });
        });
        
      };

    const renderEmptyComponent = () => {
        return (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No items to display</Text>
          </View>
        );
    };
    
    const renderNewComicItem = ({item}) => {
        return(
            <View style={styles.renderListContainer}>
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>handleSelectedItem(item, 'New')} >
                <View style={styles.imgContainer}>
                <Image style={styles.itemImageStyle} source={{uri:`${ item.thumbnail.path}.${ item.thumbnail.extension}`}}/>
                </View>
                <View>
                <Text style={styles.textItemStyle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    };
    const renderNextComicItem = ({item}) => {
        return(
            <View style={styles.renderListContainer}>
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>handleSelectedItem(item, 'Next')} >
                <View style={styles.imgContainer}>
                <Image style={styles.itemImageStyle} source={{uri:`${ item.thumbnail.path}.${ item.thumbnail.extension}`}}/>
                </View>
                <View>
                <Text style={styles.textItemStyle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    };
    
    const handleSelectedItem = (item, type) => {
        switch (type){
          case 'New':
            dispatch(selectedNewComic(item.id));
            navigation.navigate("Comic Detail");
            break;
          case 'Next':
            dispatch(selectedNextComic(item.id));
            navigation.navigate("Comic Detail");
            break;
        default:
          return
        }
      }  
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header title={"MarvelitApp"} navigation={navigation} />
            </View>
            <ScrollView style={styles.listContainer}>
                <View style={styles.separador}>
                    <Text style={styles.subtitle}>New this week</Text>
                    <FlatList
                        data={newComicsList}
                        renderItem={renderNewComicItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        ListEmptyComponent={renderEmptyComponent}
                    />
                </View>
                <View style={styles.separador}>
                    <Text style={styles.subtitle}>Coming soon</Text>
                    <FlatList
                        data={nextComicsList}
                        renderItem={renderNextComicItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        ListEmptyComponent={renderEmptyComponent}
                    />
                </View>
                <Text style={styles.subtitle}>Marvelpedia</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Character List")}>
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.renderImageStyle} source={charactersImg} />
                        <Text style={styles.textItemStyle2}>Characters</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Series")}>
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.renderImageStyle} source={teamsImg} />
                        <Text style={styles.textItemStyle2}>Series</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Comics")} >
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.renderImageStyle} source={comicsImg} />
                        <Text style={styles.textItemStyle2}>Comics</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

};

const mapStateToProps = (state) => ({
    favCharacters: state.user.favCharacters,
  });
  
  const mapDispatchToProps = {
    loadFavorites,
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
