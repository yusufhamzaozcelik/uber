import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen/index';
import DestinationSearch from './src/screens/DestinationSearch/index';
import SearchResults from './src/screens/SearchResults';


const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content"/>
      
      
      <SearchResults/>
    </View>
  )
}

export default App
