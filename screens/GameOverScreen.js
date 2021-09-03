import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/camera.jpeg')}
          //source={{uri: "https://bsmedia.business-standard.com/_media/bs/img/article/2020-12/11/full/1607656152-0479.jpg"}}
          resizeMode="cover"
        />
      </View>
      <Text>
        Your phone needed{' '}
        <Text style={styles.roundsNumberStyle}>{props.roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.roundsNumberStyle}>{props.userNumber}</Text>
      </Text>
      <Button title="New Game" onPress={() => props.onRestart()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 500,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  roundsNumberStyle: {
    color: 'red',
  },
});

export default GameOverScreen;
