import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import BottomNav from '../Components/BottomNav'
import { backgroundColor1, primaryColor, secondaryColor } from '../Style/Theam1'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Player = ({navigation}) => {
const [isPlaying, setisPlaying] = React.useState(false)
    const tempimg = "data:image/jpeg;base64,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"


    let rotate = new Animated.Value(0);
    const startAnimation=()=>{
        rotate.setValue(0);
        Animated.timing(rotate,{toValue:1,duration:3000,useNativeDriver:false}).start(()=>startAnimation());
    }

    useEffect(()=>{
if(isPlaying==true){
startAnimation()
}
else{
    rotate.setValue(0);
    rotate.stopAnimation()
}
    },[isPlaying])

const RotateData = rotate.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','360deg']
})

  return (
    <View style={styles.container}>
    <Text>Player</Text>
    <View style={styles.bottomnav}>
    <BottomNav activepage={'player'} navigation={navigation}/>
    </View>
    <Animated.Image source={{uri: tempimg}} style={[styles.img,
    {transform:[{rotateZ:RotateData}]}
    ]}/>
    <View style={styles.container2}>
    <Text style={styles.text1}>Heat Waves</Text>
    <Text style={styles.text2}>song by : Glass Animals</Text>
    </View>
    <View style={styles.container3}>
        <View style={styles.musiccomplete}>
            <View style={styles.musiccompletein}></View>
        </View>

            <View style={styles.timecont}>
                <Text style={styles.time}>00:00</Text>
                <Text style={styles.time}>01:00</Text>
        </View>
    </View>
    <View style={styles.container4}>
    <MaterialCommunityIcons name="skip-previous" size={24} color="black" 
    style={styles.icon}
    />
{
    isPlaying== false ? 
    <AntDesign name="play" size={24} color="black" style={styles.icon}
    onPress={()=> setisPlaying(true)}
    />:
    <MaterialCommunityIcons name="pause-circle" size={34} color="black"style={styles.icon}  onPress={()=> setisPlaying(false)} />
}
    <MaterialCommunityIcons name="skip-next" size={24} color="black"  style={styles.icon}/>
    </View>
  </View>
  )
}

export default Player

const styles = StyleSheet.create({container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:backgroundColor1,
    height:'100%',
    width:'100%',
  },
  bottomnav:{
    position:'absolute',
    bottom:0,
    width:'100%',
    alignItems:'center'
  },
  img :{
    height:300,
    width:300,
    borderRadius:150,
    marginVertical:20,
  },
  text1:{
    fontSize:20,
    color:primaryColor,
    width:300,
    textAlign:'center',
    alignSelf:'center',
  },
  text2:{
        fontSize:15,
        color:secondaryColor,
        width:200,
        textAlign:'center',
        alignSelf:'center',  
  },
  container3:{
    width:'80%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:30
  },
  musiccomplete:{
    width:'100%',
    height:5,
    backgroundColor:secondaryColor,
    borderRadius:5
  },
  musiccompletein:{
    width:'50%',
    height:5,
    backgroundColor:primaryColor,
  },
  timecont:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    marginVertical:10,
  },
  time:{
        fontSize:15,
        color:secondaryColor,
  },
  icon:{
    color:primaryColor,
  },
  container4:{
    width:"50%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:70,
  },
})