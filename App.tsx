import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet, View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

import StartGameScreen from './screens/StartGameScreen';
import Colors from './utils/Colors';

const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
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
