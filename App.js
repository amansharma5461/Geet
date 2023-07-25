import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Player from "./Screens/Player";
import Allmusic from "./Screens/Allmusic";
import AllPlaylists from "./Screens/AllPlaylists";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
const [allSongs, setAllSongs] = useState('Permission not granted');
const permissionPopup = async () =>{
  Alert.alert("Permission Required", "This app requires permission to access your media library",[
    {text:'Accept', onPress: () => MediaLibrary.requestPermissionsAsync()},
    {text:'Cancel', onPress: () => permissionPopup()}
  ])
}


  const getpermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    if(permission.granted==true){
      console.log('Permisssion Granted');
      getAllSongs();
    }
    if(permission.granted == false && permission.canAskAgain == true){
      const askpermission = await MediaLibrary.requestPermissionsAsync();
      // console.log(askpermission);
      if(askpermission.status == 'denied' && askpermission.canAskAgain == true){
        permissionPopup();
        getAllSongs();
        console.log('Pemission Denied, Please allow permission to show all music');
      }

      if(askpermission.status == 'granted'){
        console.log("Permission granted, show all music");
      }
      if(askpermission.status == 'denied' && askpermission.canAskAgain == false){
        console.log("Can't show music");
      }
    }
    
  };
  // {"canAskAgain": true, "expires": "never", "granted": false, "status": "undetermined"}
  useEffect(() => {
    getpermission();
  }, []);

const getAllSongs = async () => {
  const songs = await MediaLibrary.getAssetsAsync({
    mediaType:"audio"
  })
  // console.log(songs);
  setAllSongs(songs.assets)
}
console.log(allSongs);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="allmusic"
          component={Allmusic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="player"
          component={Player}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="allplaylists"
          component={AllPlaylists}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
