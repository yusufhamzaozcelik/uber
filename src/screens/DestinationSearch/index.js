import React, { useState,useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const DestinationSearch = () => {

    

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null)
    useEffect(() => {
       if(originPlace&&destinationPlace)
       {
           console.warn('data geldi');
       }
    
    }, [originPlace,destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                
            <GooglePlacesAutocomplete
                    placeholder='From?'
                    onPress={(data, details = null) => {
                      
                        setOriginPlace({data,details});
                    }}
                    styles={{
                        textInput:styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyAbTpQ0EuoUfAvGVtuQMXJlIIzs0iaFZjg',
                        language: 'en',
                    }}
                />
            
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                      
                        setDestinationPlace({data,details});
                    }}
                    styles={{
                        textInput:styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyAbTpQ0EuoUfAvGVtuQMXJlIIzs0iaFZjg',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>

    )
}

export default DestinationSearch;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
    }
})
