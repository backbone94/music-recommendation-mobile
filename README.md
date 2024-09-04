# 📱 음악 추천 모바일 애플리케이션

이 리액트 네이티브 프로젝트는 [음악 추천 웹 애플리케이션](https://music-recommendation-pi.vercel.app)을 모바일 환경에서 사용할 수 있도록 웹뷰로 감싼 애플리케이션입니다. 웹뷰를 통해 웹 애플리케이션의 모든 기능을 모바일 환경에서 동일하게 사용할 수 있습니다.

## 🛠️ 기술 스택 (Tech Stack)

![React Native](https://img.shields.io/badge/React%20Native-%230078D4.svg?style=for-the-badge&logo=react&logoColor=white)
![React Native WebView](https://img.shields.io/badge/React%20Native%20WebView-%23323330.svg?style=for-the-badge&logo=react&logoColor=white)

## 📥 설치 및 실행 (Installation & Setup)

1. 클론
```bash
git clone https://github.com/your-username/music-recommendation-mobile.git
cd music-recommendation-mobile
```

2. 의존성 설치
```bash
npm install
```

3. Android:
```bash
npm run android
```

4. iOS (macOS에서만 사용 가능):
```bash
npm run ios
```

## 📚 사용법 (Usage)
앱을 실행하면 음악 추천 웹 애플리케이션이 로드됩니다.
웹 애플리케이션에서 제공하는 모든 기능(일기 작성, 감정 분석, 음악 추천 등)을 모바일 환경에서 사용할 수 있습니다.

## 📝 주요 코드 (Key Code)
```jsx
import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, StatusBar, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    const onBackPress = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
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
      <StatusBar barStyle="dark-content" />
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://music-recommendation-pi.vercel.app' }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
```

## 🌐 배포 (Deployment)
이 프로젝트는 현재 개발 단계에서 사용되며, 배포 준비가 완료된 상태는 아닙니다. 앱을 앱스토어 또는 구글 플레이에 배포하기 전에는 추가적인 설정과 테스트가 필요합니다.

## ✨ 주요 기능 (Key Features)
웹 애플리케이션의 기능을 그대로 모바일 환경에서 사용할 수 있습니다.
웹뷰를 사용하여 일관된 사용자 경험을 제공합니다.
간단한 설정으로 모바일 환경에서 웹 애플리케이션을 테스트할 수 있습니다.

## 💡 참고 사항 (Notes)
이 프로젝트는 음악 추천 웹 애플리케이션의 모바일 버전을 제공하기 위한 것입니다. 모든 기능은 웹 애플리케이션과 동일하며, 웹뷰를 통해 모바일 환경에 맞게 렌더링됩니다.