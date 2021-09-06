import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  
} from 'react-native';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    
      <ScrollView>
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
          <Text style={styles.text}>
            Your phone needed{' '}
            <Text style={styles.roundsNumberStyle}>{props.roundsNumber}</Text>{' '}
            rounds to guess the number{' '}
            <Text style={styles.roundsNumberStyle}>{props.userNumber}</Text>
          </Text>
          <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
      </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    width: Dimensions.get('window').width * 0.8,
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: Dimensions.get('window').width * 0.5,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height * 0.05,
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
