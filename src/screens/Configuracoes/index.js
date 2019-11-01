import React, { Component } from 'react';

import { View, SafeAreaView, Text } from 'react-native';
import { colors } from 'config/colors';
import SolicitaLogin from 'components/SolicitaLogin'
// import { Container } from './styles';

export default class Configuracoes extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.colorBackground, padding: 20 }} >
                <Text style={{ color: colors.colorFont, fontSize: 30, fontFamily: 'AirbnbCerealBold' }}>Seu Perfil</Text>
                <SolicitaLogin frase={"Acesse sua conta para ter acesso as informações."} />
            </SafeAreaView>
        );
    }
}
