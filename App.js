import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Home';
import Detalhe from './src/Detalhe';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detalhe: {
    screen: Detalhe,
    navigationOptions: {
      title: 'Detalhe'
    }
  }
});

export default createAppContainer(AppNavigator);