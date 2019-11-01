import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors } from 'config/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const { height, width } = Dimensions.get('window')
// import { Container } from './styles';

export default function SolicitaLogin(props) {
    return (
        <View >
            
            <Text style={{ color: colors.colorFont, fontSize: 18, fontFamily: 'AirbnbCerealLight' }}
            >
                {props.frase}
            </Text>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableWithoutFeedback style={{ paddingHorizontal: 20, marginTop: 10, width: width, height: 65 }}>
                    <View style={[{ backgroundColor: '#db2a2a', borderWidth: 1 }, styles.button]}>
                        <SimpleLineIcons name={"envelope"} size={30} style={{ flex: 1, color: '#fff' }} />
                        <Text style={{ textAlign: 'center', flex: 5, color: '#fff', fontSize: 18, fontFamily: 'AirbnbCerealMedium' }}>Continuar com Email</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={{ paddingHorizontal: 20, marginTop: 10, width: width, height: 65 }}>
                    <View style={[{ backgroundColor: '#fff', borderWidth: 1 }, styles.button]}>
                        <SimpleLineIcons name={"social-google"} size={30} style={{ flex: 1 }} />
                        <Text style={{ textAlign: 'center', flex: 5, fontSize: 18, fontFamily: 'AirbnbCerealMedium' }}>Continuar com Google</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{ paddingHorizontal: 20, marginTop: 10, width: width, height: 45 }}>
                    <View style={[{ backgroundColor: '#fff', justifyContent: 'center' }]}>
                        <Text style={{ fontSize: 16, fontFamily: 'AirbnbCerealLight' }}> Ainda não tem uma conta? Cadastre-se</Text>
                    </View>
                </TouchableWithoutFeedback>
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
