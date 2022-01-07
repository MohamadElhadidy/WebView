//import React in our code
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Alert,
  TouchableOpacity,
  Text,
  BackHandler,
} from 'react-native';

//import WebView
import {WebView} from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};

const App = () => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const webViewRef = useRef();
  function webViewgoback() {
    if (webViewRef.current) webViewRef.current.goBack();
  }

  function webViewNext() {
    if (webViewRef.current) webViewRef.current.goForward();
  }
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [Colors] = React.useState('#1da2db');
  var myColor = '#1da2db';
  console.warn(useState.Colors);
  global.myColor = myColor;
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    webViewRef.current.reload();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const createTwoButtonAlert = () =>
    Alert.alert('Error', 'لا يوجد انترنت', [
      {text: 'reload', onPress: () => onRefresh()},
    ]);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        // refreshControl={
        //   <RefreshControl
        //     contentContainerStyle={styles.RefreshControl}
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //   />
        // }
      >
        <WebView
          ref={webViewRef}
          //Loading URL
          source={{uri: 'https://www.google.com'}}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
          renderError={() => {
            createTwoButtonAlert();
          }}
        />
        {visible ? <ActivityIndicatorElement /> : null}
      </ScrollView>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={webViewgoback} style={styles.touch}>
          <Text style={styles.text}>
            <Icon name="arrow-alt-circle-left" size={30} color="#fff" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={webViewNext} style={styles.touch}>
          <Text style={styles.text}>
            <Icon name="arrow-alt-circle-right" size={30} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    //color: 'blue',
  },
  tabBarContainer: {
    backgroundColor: '#1da2db',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  touch: {
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
