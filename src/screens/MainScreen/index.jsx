import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { loadNewComics, loadNextComics, selectedNewComic, selectedNextComic } from "../../store/actions/comic.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, } from "react";

import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import charactersImg from '../../../assets/characters1.png';
import comicsImg from '../../../assets/comics.jpg';
import { loadUser } from "../../store/actions/user.action";
import styles from "./styles";
import teamsImg from '../../../assets/characters.png';

const MainScreen = ({navigation}) => {
    
    const dispatch=useDispatch();
    loadUser()
    const user= useSelector(state=> state.user)
    
    
    useEffect(() => {
        dispatch(loadNewComics())
        dispatch(loadNextComics())
    }, [])
    
    // loadNewComics()
    // loadNextComics()

    const newComicsList= useSelector(state=> state.comics.newComics)
    const nextComicsList= useSelector(state=> state.comics.nextComics)
    
    console.log("new", JSON.stringify(newComicsList))// console.log("UUUSSS" , user)

    // useEffect(() => {
    //     // loadUser();
    //     console.log("UUUSSS2")
    // }, []);
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
    
    // const handleSelectedItem = (item) => {
    //     dispatch(selectedComic(item.id));
    //     console.log("iiiiii", item)
    //     navigation.navigate("Comic Detail");
    // }
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
                <TouchableOpacity onPress={()=>navigation.navigate("Character List")}>
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.renderImageStyle} source={charactersImg} />
                        <Text style={styles.textItemStyle2}>Characters</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Teams")}>
                    <View style={styles.renderItemStyle}> 
                        <Image style={styles.renderImageStyle} source={teamsImg} />
                        <Text style={styles.textItemStyle2}>Teams</Text>
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

export default MainScreen;