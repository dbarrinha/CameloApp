import React, { Component } from 'react';

import { View, SafeAreaView ,Text} from 'react-native';

// import { Container } from './styles';

export default class Configuracoes extends Component {
    render() {
        return (
            <SafeAreaView >
                <Text style={{fontSize: 30, fontFamily: 'AirbnbCerealLight'}}>Config</Text>
            </SafeAreaView>
        );
    }
}