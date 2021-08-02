import React from 'react'
import { View, Text,Image, Pressable } from 'react-native'

import UberTypeRow from '../UberTypeRow'
import typesData from '../../assets/data/types';
const UberTypes = () => {

    const confirm =()=>{
        console.warn('confrim oldu');
    }
    return (
        <View>
            {typesData.map((type) =>( <UberTypeRow  type={type}/>))}
            

            <Pressable onPress={confirm} style={{backgroundColor:'black',padding:10,margin:10,alignItems:'center'}}>
                <Text style={{fontWeight:'bold',color:'white'}} >Confirm Uber</Text>
            </Pressable>
        </View>
    )
}

export default UberTypes
