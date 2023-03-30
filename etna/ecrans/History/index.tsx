import { View, Text, Button } from 'react-native'
import React from 'react'

const History = ({ navigation, route }) => {

  const articleId = route.params.id || "unknown";
  
  return (
    <View>
      <Text>Article with ID: {articleId}</Text>
      <Button onPress={navigation.goBack} title={"Go back"} />
    </View>
  )
}

export default History