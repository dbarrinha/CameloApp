import React, { Component } from 'react';

import { View, SafeAreaView ,Text} from 'react-native';
import { colors } from 'config/colors';

// import { Container } from './styles';

export default class Configuracoes extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.colorBackground}} >
                <Text style={{fontSize: 30, fontFamily: 'AirbnbCerealLight'}}>Config</Text>
            </SafeAreaView>
        );
    }
}
