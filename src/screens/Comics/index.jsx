import { Text, View } from 'react-native'

import React from 'react'
import styles from './styles'

const Comics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Comics</Text>
       </View>
    </View>
  )
}

export default Comics
