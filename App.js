import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  View,
  ActivityIndicator,
  StatusBar,
  
} from 'react-native';
import { Transition } from 'react-native-reanimated';

import Home from 'screens/Home'
import Login from 'screens/Login'
import Configuracoes from 'screens/Configuracoes'
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

const ConfigStack = createNativeStackNavigator({
  Config: Configuracoes
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

const TabNavigator = createBottomTabNavigator({
  Explorar: HomeStack,
  Perfil: ConfigStack
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        headerMode: 'none',
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Explorar') {
          iconName = `search`;
        } else if (routeName === 'Perfil') {
          iconName = `perm-identity`;
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
      //tabBarButtonComponent: TouchableNativeFeedback,
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 15,
        fontFamily: 'AirbnbCerealBook'
      },
    },
  }
);


const MySwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStack,
    App: TabNavigator,
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