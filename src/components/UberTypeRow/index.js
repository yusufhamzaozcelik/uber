import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'

import Ionicons from "react-native-vector-icons/Ionicons"
const UberTypeRow = (props) => {

    const {type}=props;

    const getImage=()=>{
        if(type.type==='UberX'){
            return require('../../assets/images/UberX.jpeg')
        }
        if(type.type==='Comfort'){
            return require('../../assets/images/Comfort.jpeg')
        }
        if(type.type==='UberXL'){
            return require('../../assets/images/UberXL.jpeg')
        }
    }
    return (
        <View style={styles.mainContaier}>

            <Image style={styles.image}source={getImage()}/>
            <View style={styles.middleContainer}>
                <Text style={styles.type}>{type.type} <Ionicons name={'person'} size={16} />
                3
                </Text>
                <Text style={styles.time}>8:03 PM drop time</Text>
                
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.txtPrice}>
                    <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
                   {type.price} $
                </Text>
            </View>
        </View>
    )
}

export default UberTypeRow;

const styles=StyleSheet.create({
    image:{
        width:70,
        height:80,
        resizeMode:'contain'
    },
    type:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,
        
    },
    middleContainer:{
        flex:1,
        marginHorizontal:10,
    },
    rightContainer:{
      width:100,
      justifyContent:'flex-end',
      flexDirection:'row'
    },
    mainContaier:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },
    txtPrice:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:5,
    },
    time:{
        color:'#5d5d5d'
    }
})
