import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Player from './Screens/Player';
import Allmusic from './Screens/Allmusic';
import AllPlaylists from './Screens/AllPlaylists';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="allmusic" component={Allmusic} options={{headerShown:false}} />
      <Stack.Screen name="player" component={Player} options={{headerShown:false}} />
      <Stack.Screen name="allplaylists" component={AllPlaylists} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
