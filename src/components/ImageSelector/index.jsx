import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Text, View } from 'react-native'
import React, {useState} from 'react';

import colors from "../../constants/colors.js";
import placeHolder from "../../../assets/image-placeholder.png"
import styles from "./styles.js";
import { useSelector } from "react-redux";

const ImageSelector = props => {
    const user= useSelector(state=>state.user)
    const userPlaceHolder = placeHolder
    const[pickedUri, setPickedUri]= useState(user.userImg);

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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                base64:true,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
            });
            setPickedUri(image.assets[0].uri);
            props.onImage(image.assets[0].uri);
        }catch(error){
            Alert.alert("UPS!","Hubo un problema al inicializar la camara",[{text: "Ok"}])
            console.log(error)
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (
                    (<Image style={styles.placeHolderImg} source={userPlaceHolder}/>)
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