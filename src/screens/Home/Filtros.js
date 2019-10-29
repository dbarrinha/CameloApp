import React from 'react';
import { View, Dimensions, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window");
// import { Container } from './styles';

export default function Filtros() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }} >
            <View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0.5, borderTopColor: 'black' }}>
                <TouchableNativeFeedback >
                    <View style={[{  backgroundColor: "#e78" },styles.actionbutton]}>
                        <Text style={styles.actionText}>Cancelar</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback >
                    <View style={[{  backgroundColor: '#1691de' },styles.actionbutton]}>
                        <Text style={styles.actionText}>Filtrar</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    actionbutton :{
        height: 40, 
        width: width * 0.4,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        fontSize: 20,
        fontWeight: '700'
    }
})