import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function SolicitaLogin() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={require('assets/lottie/cross.json')} autoPlay loop />
            <Text>Necessário efetuar Login</Text>
            <TouchableWithoutFeedback>
                <View >
                    <Text>Ir para Login</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}
