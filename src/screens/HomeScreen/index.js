import React from 'react';
import { View, Text,StatusBar,Dimensions } from 'react-native';

import HomeMap from '../../components/HomeMap';
import Info from '../../components/Info';
import HomeSearch from '../../components/HomeSearch';
const HomeScreen = (props) => {
    return (
        <View>
            <View style={{height:Dimensions.get('window').height-400}}>
                 <HomeMap/>
            </View>
          
           <Info/>
           <HomeSearch />
        </View>
    )
}

export default HomeScreen;


