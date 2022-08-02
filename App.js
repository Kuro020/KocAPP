import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import RotasTab from './paginas/RotasTab'; 

export default function App() {
  return (
    <NavigationContainer>
        <RotasTab />
    </NavigationContainer>
  );
}