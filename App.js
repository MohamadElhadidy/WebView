import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from './pages/Intro';
import WebView from './pages/WebView';

function IntroScreen({navigation}) {
  return <Intro />;
}

function WebViewScreen() {
  return <WebView />;
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Intro">
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
