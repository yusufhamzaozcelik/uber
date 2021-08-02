import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi bilgi  bilgibilgi</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    )
}

export default Info;
const styles= StyleSheet.create({
    container:{
    backgroundColor:'#2b80ff',
    padding:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    },
    title:{
        color:'white',
        fontSize:20,
        marginTop:10,
        fontWeight:'bold',
    },
    text:{
        color:'#bed9ff',
        fontSize:15,
        marginBottom:10,

    },
    learnMore:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
        
    }

})
