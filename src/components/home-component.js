import React from 'react'
import {
  View,
  Text,
} from 'react-native'

const HomeComponent = ({ children }) => (
  <View>
    <Text>Ya tu sabe, en el home</Text>
    {children}
  </View>
)


export default HomeComponent