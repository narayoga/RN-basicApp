import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameOverScreen from "./screens/gameOver";
import GameScreen from "./screens/gameScreen";
import Home from "./screens/home";

function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(true)
  const [guessRound, setGuessRound] = useState(0)

  function pickedNumber(number) {
    setUserNumber(number)
    setGameOver(false)
  }

  function overHandler(numberOfRounds) {
    setGameOver(true)
    setGuessRound(numberOfRounds)
  }

  function onStartGame() {
    setUserNumber(null)
    setGuessRound(0)
  }

  let screen = <Home onPickNumber={pickedNumber} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={overHandler}/>;
  }

  if(gameOver && userNumber) {
    screen = <GameOverScreen guessRound={guessRound} userNumber={userNumber} onStart={onStartGame} />
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#232323' }}>
      <ImageBackground
        source={require('./sassets/wallpaper.jpg')}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.45 }}
      >
        <SafeAreaView>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export default App;
