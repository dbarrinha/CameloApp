import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { colors } from 'config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const { height, width } = Dimensions.get('window')
// import { Container } from './styles';

export default function SolicitaLogin() {
    /*return (
        <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1 }}>
                <LottieView style={{width: 300}} source={require('assets/lottie/cross.json')} autoPlay loop />
            </View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>

                <Text style={{fontSize: 30, fontWeight: '600' }}>Necessário efetuar Login</Text>
                <TouchableWithoutFeedback>
                    <View >
                        <Text>Ir para Login</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );*/
    return (
        <View style={{ padding: 30 }}>
            <Text style={{ color: colors.colorFont, fontSize: 30, fontFamily: 'AirbnbCerealBold' }}>Seus Favoritos</Text>
            <Text style={{ color: colors.colorFont, fontSize: 18, fontFamily: 'AirbnbCerealLight' }}
            >
                Acesse sua conta para ter acesso aos anúncios favoritos.
            </Text>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableNativeFeedback style={{ paddingHorizontal: 20, marginTop: 10, width: width, height: 65 }}>
                    <View style={[{ backgroundColor: '#db2a2a', borderWidth: 1 }, styles.button]}>
                        <SimpleLineIcons name={"envelope"} size={30} style={{ flex: 1, color: '#fff' }} />
                        <Text style={{ textAlign: 'center', flex: 5, color: '#fff', fontSize: 18, fontFamily: 'AirbnbCerealMedium' }}>Continuar com Email</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback style={{ paddingHorizontal: 20, marginTop: 10, width: width, height: 65 }}>
                    <View style={[{ backgroundColor: '#fff', borderWidth: 1 }, styles.button]}>
                        <SimpleLineIcons name={"social-google"} size={30} style={{ flex: 1 }} />
                        <Text style={{ textAlign: 'center', flex: 5, fontSize: 18, fontFamily: 'AirbnbCerealMedium' }}>Continuar com Google</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback style={{ paddingHorizontal: 20,marginTop: 10, width: width, height: 45 }}>
                    <View style={[{ backgroundColor: '#fff', justifyContent: 'center' }]}>
                        <Text style={{ fontSize: 16, fontFamily: 'AirbnbCerealLight' }}> Ainda não tem uma conta? Cadastre-se</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginVertical: 5,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: '#db2a2a'
    }
})
