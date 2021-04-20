import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <View>
        <Text>
          Teste
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
