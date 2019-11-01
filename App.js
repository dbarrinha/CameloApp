import React from 'react';
import { createAppContainer, createSwitchNavigator, createta } from 'react-navigation'
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator, createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import {
  View,
  ActivityIndicator,
  StatusBar,

} from 'react-native';
import { Transition } from 'react-native-reanimated';

import Home from 'screens/Home'
import Login from 'screens/Login'
import Configuracoes from 'screens/Configuracoes'
import Favoritos from 'screens/Favoritos'
import { useScreens } from 'react-native-screens';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
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

const FavoritoStack = createNativeStackNavigator({
  Favoritos: Favoritos
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

const TabNavigator = createMaterialTopTabNavigator({
  Explorar: HomeStack,
  Favoritos:FavoritoStack,
  Perfil: ConfigStack,
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
          iconName = `magnifier`;
        } else if (routeName === 'Perfil') {
          iconName = `user`;
        } else if (routeName === 'Favoritos') {
          iconName = `heart`;
        }
        return <SimpleLineIcons name={iconName} size={22}  color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'tomato',
      showIcon : true,
      inactiveTintColor: 'black',
      labelStyle:{
        fontFamily: 'AirbnbCerealMedium'
      },
      iconStyle :{
        width: 25,
        height: 15
      },
      style:{
        backgroundColor: '#fff',
        padding:0,
        margin: 0
      },
      indicatorStyle:{
        height:0
      }
    },
  }
);


const MySwitch = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthStack,
    App: TabNavigator,
  }
);

const AppNavigation = createAppContainer(MySwitch);



export default AppNavigation;