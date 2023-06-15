import { Button, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react';

import ImageSelector from '../../components/ImageSelector';
import { setImg } from '../../store/actions/user.action';
import styles from './styles';
import { useDispatch } from 'react-redux';

const UserScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [image, setImage] = useState();
    

    const handleSave =()=>{
      console.log("IMG=>", image)
        dispatch(setImg(image))
        navigation.navigate("Main")
    }

  return (
    <View style={styles.container}>
      <ImageSelector onImage={setImage}/>
      <Button title="Guardar" disabled={image==null ? true : false} onPress={handleSave}/>
    </View>
  )
}

export default UserScreen