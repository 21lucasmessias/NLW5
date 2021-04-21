import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

const Welcome = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}> 
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
            <Icon name='chevron-right' style={style.buttonIcon}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {    
    marginTop: 30,
    marginBottom: 30,
    
    color: colors.heading,
    
    fontSize: 32,
    fontFamily: 'Jost-SemiBold',
    lineHeight: 38,
    textAlign: 'center',
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },

  description: {
    marginVertical: 30,
    
    color: '#5C6660',
    
    fontSize:17,
    fontFamily: 'Jost-Regular',
    lineHeight: 25,
    textAlign: 'center',
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

  buttonIcon: {
    fontSize: 30,
    color: colors.white
  },
})

export default Welcome;
