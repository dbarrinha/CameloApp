import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import { Transition } from 'react-native-reanimated';

import Home from 'screens/Home'
import Login from 'screens/Login'
import { useScreens } from 'react-native-screens';
useScreens();


class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const user = await AsyncStorage.getItem('user:CameloApp')
    if (user === null) {
      this.props.navigation.navigate('AuthStack')
    } else {
      console.log("teste")
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
      </View>
    );
  }
}

const HomeStack = createNativeStackNavigator({
  Home: Home
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  });


const AuthStack = createNativeStackNavigator({
  Login: Login
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  });

const MySwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStack,
    HomeStack: HomeStack,
  },
  {
    initialRouteName: 'AuthLoading',
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  }
);

const AppNavigation = createAppContainer(MySwitch);



export default AppNavigation;