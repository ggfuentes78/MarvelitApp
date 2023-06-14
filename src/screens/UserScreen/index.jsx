import { Button, Text, View } from 'react-native'
import React, {useState} from 'react';

import ImageSelector from '../../components/ImageSelector';
import { setImg } from '../../store/actions/user.action';
import styles from './styles';
import { useDispatch } from 'react-redux';

const UserScreen = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState();

    const handleSave =()=>{
        dispatch(setImg(image))
        navigation.navigate("Main")
    }

  return (
    <View style={styles.container}>
      <ImageSelector onImage={setImage}/>
      <Button title="Guardar" onPress={handleSave}/>
    </View>
  )
}

export default UserScreen