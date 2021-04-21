import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

const Welcome = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
          Gerencie{'\n'}
          suas plantas{'\n'}
          de forma fácil
      </Text>
      
      <Image source={wateringImg} style={style.image} resizeMode='contain'/>

      <Text style={style.description}> 
          Não esqueça mais de regar suas{'\n'}
          plantas. Nós cuidamos de lembrar você{'\n'}
          sempre que precisar.
      </Text>

      <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>
              >
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.heading,
    marginTop: 30,
    marginBottom: 30
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },

  description: {
    fontSize:17,
    textAlign: 'center',
    color: '#5C6660',
    marginVertical: 30
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 20
  },

  textButton: {
    color: colors.white
  },
})

export default Welcome;
