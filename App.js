import React from 'react';
import { createAppContainer } from 'react-navigation';

import RootStack from './navigation/MainStackNavigation'

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return ( <AppContainer /> );
}

export default App
