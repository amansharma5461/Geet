import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Icons 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {  backgroundColor2, primaryColor, theamcol } from '../Style/Theam1';
const BottomNav = ({activepage , navigation}) => {
    // console.log('djsjdsjksd'+activepage)

  return (
    <View style={styles.container}>
        {activepage == 'allmusic' ? 
    <Entypo name="folder-music" size={44} color="black" style={styles.iconactive} /> 
    :
    <Entypo name="folder-music" size={44} color="black" style={styles.icon} 
    onPress={()=> navigation.navigate('allmusic')}
    />   
    }
    {activepage == 'player' ? 
    <MaterialCommunityIcons name="headphones" size={44} color="black" style={styles.iconactive} />
    :
    <MaterialCommunityIcons name="headphones" size={44} color="black"  style={styles.icon}
    onPress={()=> navigation.navigate('player')}
    />

}
{activepage == 'allplaylists' ? 
<MaterialCommunityIcons name="playlist-music" size={44} color="black" style={styles.iconactive}/>
:
<MaterialCommunityIcons name="playlist-music" size={44} color="black" style={styles.icon}
    onPress={()=> navigation.navigate('allplaylists')}

/>

}
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:'flex-end',
        backgroundColor: backgroundColor2,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:10,

    },
    icon:{
        color:primaryColor,
        marginHorizontal:100
    },
    iconactive:{
        color: primaryColor,
        backgroundColor: theamcol,
        borderRadius:50,
        padding:10,
        position:'absolute',
        bottom:0,
        left:'40%'
    }

})