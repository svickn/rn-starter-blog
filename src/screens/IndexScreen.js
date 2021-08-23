import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {BlogContext} from '../context/BlogContext'

const IndexScreen = () => {
  const value = React.useContext(BlogContext)

  return (
    <View>
      <Text>IndexScreen: {value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
