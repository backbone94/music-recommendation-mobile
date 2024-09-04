import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const webViewRef = useRef<WebView>(null);
  const baseUrl = 'https://music-recommendation-pi.vercel.app/';
  let currentUrl = baseUrl;

  useEffect(() => {
    const onBackPress = () => {
      if (webViewRef.current) {
        if (currentUrl === baseUrl) {
          BackHandler.exitApp();
        } else {
          webViewRef.current.goBack();
        }
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: baseUrl }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onNavigationStateChange={(navState) => {
          currentUrl = navState.url;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
