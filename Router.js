import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from './src/Home';
import Detalhe from './src/Detalhe';
import Detalhe2 from './src/Detalhe2';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detalhe: {
    screen: createMaterialTopTabNavigator({
      Detalhe: {
        screen: Detalhe
      },
      Detalhe2: {
        screen: Detalhe2
      }
    })
  }
  /*
  Detalhe: {
    screen: Detalhe
  },
  Detalhe2: {
    screen: Detalhe2,
    navigationOptions: {
      title: 'Detalhe2'
    }
  }*/
});

export default createAppContainer(AppNavigator);