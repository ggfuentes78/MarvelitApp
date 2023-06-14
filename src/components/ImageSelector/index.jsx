import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from 'react-native'
import React, {useState} from 'react';

import colors from "../../constants/colors.js";
import styles from "./styles.js";

const ImageSelector = props => {

    const[pickedUri, setPickedUri]= useState();

    const verifyPermissions = async()=>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        console.log("Staatus=>", status)
        if(status !== 'granted'){
            Alert.alert(
                "Permisos insuficientes",
                "Necesitamos dar permiso a la Camara para usar la aplicacion",
                [{text: "Ok"}]
            );
            return false;
        };
        return true;
    };

    const handlerTakeImage = async ()=>{
        try{
            const hasPermission= await verifyPermissions();
            if(!hasPermission) return;

            const image = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.8,
            });
            setPickedUri(image.assets[0].uri);
            props.onImage(image.assets[0].uri);
        }catch(error){
            console.log(error)
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (
                    <Text>No hay imagen seleccionada...</Text>
                ) : (<Image style={styles.image} source={{uri: pickedUri}}/>
            )}
            </View>
            <Button
                title="Tomar foto"
                color={colors.btnColor}
                onPress={handlerTakeImage}
            />
        </View>
    )
}


export default ImageSelector