import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import styles from './styles'

const CharacterDetail = (item) => {
  const characterInfo = item.route.params

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{characterInfo.name}</Text>
        </View>
        <View style={styles.listContainer}>
            <View style={styles.renderItemStyle}>
                <Image style={styles.itemImageStyle} source={characterInfo.image}/>
                <View style={styles.textItemStyle}>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CharacterDetail
