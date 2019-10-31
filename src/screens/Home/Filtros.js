import React from 'react';
import { View, Dimensions, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("window");
// import { Container } from './styles';

export default function Filtros(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin: 5, borderBottomWidth: 0.6, padding: 5, borderTopColor: 'black' }}>
                <TouchableNativeFeedback onPress={()=> props.close()} >
                    <View style={[{ backgroundColor: "#e78d97" }, styles.actionbutton]}>
                        <Text style={styles.actionText}>Cancelar</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=> props.close()} >
                    <View style={[{borderWidth: 0.5, marginHorizontal: 5 }, styles.actionbutton]}>
                        <Text style={styles.actionText}>Filtrar</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <ScrollView >

            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    actionbutton: {
        height: 40,
        width: width * 0.45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        fontSize: 20,
        fontWeight: '500'
    }
})