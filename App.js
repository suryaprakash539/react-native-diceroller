import React, {useState} from 'react';
import {Text, Pressable, View, Image, StyleSheet} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri1, setUri1] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceTwo);
  const handleButton = () => {
    let random1 = Math.ceil(Math.random() * 6);
    let random2 = Math.ceil(Math.random() * 6);
    switch (random1) {
      case 1:
        setUri1(DiceOne);
        break;
      case 2:
        setUri1(DiceTwo);
        break;
      case 3:
        setUri1(DiceThree);
        break;
      case 4:
        setUri1(DiceFour);
        break;
      case 5:
        setUri1(DiceFive);
        break;
      case 6:
        setUri1(DiceSix);
        break;
      default:
        setUri1(DiceOne);
    }

    switch (random2) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;
      default:
        setUri2(DiceTwo);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri1} />
        <Image style={styles.image} source={uri2} />
        <Pressable onPress={handleButton}>
          <Text style={styles.gamePlayButton}>DiceRoller</Text>
        </Pressable>
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
