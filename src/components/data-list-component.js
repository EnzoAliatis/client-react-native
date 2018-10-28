import React from 'react'
import { View, Text } from 'react-native';

const DataListComponent = ({data}) => (
  <View>
    <Text>{data.studentByName.name}</Text>
    <Text>Tiene de telefono: </Text>
    <Text>{data.studentByName.phone.brand}</Text>
    <Text>{data.studentByName.phone.model}</Text>

  </View>
)


export default DataListComponent