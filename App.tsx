import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet, View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';

import StartGameScreen from './screens/StartGameScreen';

const App = () => {

  const [useNumber, setUseNumber] = useState();

  function pickNumberHandler(pickNumber) {
    setUseNumber(pickNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />
  if (useNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  imageBackground: {
    opacity: 0.15
  }
});

export default App;
