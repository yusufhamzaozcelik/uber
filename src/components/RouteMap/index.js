import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
const RouteMap = (props) => {

    const destination={
        latitude: 28.450127,
         longitude: -16.269045,
    }
    const origin={
        latitude: 28.450627,
         longitude: -16.263045,
    }
  
    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
                <MapViewDirections
                origin={origin}
                destination={destination}
                apikey= {'AIzaSyAbTpQ0EuoUfAvGVtuQMXJlIIzs0iaFZjg'}
                strokeWidth={5}
                strokeColor="black  "
                />

                <Marker 
                coordinate={origin}
                title={'origin'}/>
                 <Marker 
                coordinate={destination}
                title={'destination'}/>

           



        </MapView>

    )
}

export default RouteMap;
