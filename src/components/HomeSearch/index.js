import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
const HomeSearch = () => {
    return (
        <View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                        <Text>Now</Text>
                        <MaterialIcons name={'keyboard-arrow-down'} size={16}/>
                    </View>
            </View>
            
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={16} color={'#ffffff'}/>
                   
                </View> 
                <Text style={styles.destinationText}>Spice nightClub</Text>
            
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer,{backgroundColor:'#218cff'}]}>
                    <Entypo name={'home'} size={16} color={'#ffffff'}/>
                   
                </View> 
                <Text style={styles.destinationText}>Home</Text>
            
            </View>
        </View>

        
    )
}

export default HomeSearch;

const styles=StyleSheet.create({

    inputBox:{
        backgroundColor:'#b0b0b0',
        margin:10,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color:'#434343'
    },
    timeContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:100,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:50,
    },
    iconContainer:{
        backgroundColor:'#b3b3b3',
        padding:10,
        borderRadius:25,
    },
    row:{
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        borderColor:'#dbdbdb',
        borderBottomWidth:1,
    },
    destinationText:{
        marginLeft:10,
        fontSize:'500',
        fontSize:16,
    },
})
