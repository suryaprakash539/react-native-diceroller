import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const uri = DiceFive;
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <TouchableOpacity>
          <Text style={styles.gamePlayButton}>DiceRoller</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(32,0,216)',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    color: 'white',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'lightcoral',
  },
});
