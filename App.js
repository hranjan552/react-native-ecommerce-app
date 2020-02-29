import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigation></MainNavigation>
      </Provider>
    </SafeAreaProvider>
  );
}
