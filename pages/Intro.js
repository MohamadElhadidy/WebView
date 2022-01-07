import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions,Modal, Image, Text, View, Alert, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Logo....
import Logo from '../assets/logo.png';


const BGColor = "#fff"
const Intro = () => {
    // SafeArea Value...
    const edges = useSafeAreaInsets();
    const navigation = useNavigation(); 

 setTimeout(() => {
    navigation.navigate('WebView');
  }, 5000); //wait 5 seconds
 
 
    // Going to Move Up like Nav Bar...
    return (

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0, 
            left: 0,
            right: 0,
            marginTop:-75
        }}>
        <View style={{
                flex: 1,
                backgroundColor: BGColor,
                zIndex: 1,
               
            }}>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View style={{
                       position: 'absolute',
                        flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                       }}>
                    <Image source={Logo} style={{
                        width: 131,
                        height: 133,
                        marginBottom: 20,
                  
                    }}></Image>

                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                       
                    }}>Webview</Text>

                  </View>
                <Text
        style={{
          fontSize: 15,
            marginTop:  (Dimensions.get('window').height), 
          fontWeight: 'bold',
          textAlign: 'center',
          height: 100,
          
        }}>
        <Image
        style={ {width: 20,height: 20}}
        source={require('../assets/it.jpg')} 
      /> 
       <Text style={{marginLeft:5,color:'#000'}}> Elhadidy  </Text>       

      </Text>
                </View>

            </View> 

            <View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
               
            }}>
            </View>

               

        </View>
    );
}

export default Intro;