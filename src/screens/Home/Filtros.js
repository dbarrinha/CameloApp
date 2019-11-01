import React from 'react';
import { View, Dimensions, TouchableNativeFeedback, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("window");
// import { Container } from './styles';

export default function Filtros(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column', justifyContent: "space-around" }} >
            <ScrollView style={{flex: 1}} >

            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin: 5, padding: 5, }}>
                <TouchableNativeFeedback onPress={()=> props.close()} >
                    <View style={styles.actionbutton}>
                        <Text style={[styles.actionText,{color: "#e78"}]}>Cancelar</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=> props.close()} >
                    <View style={[{ }, styles.actionbutton]}>
                        <Text style={[styles.actionText, {color: '#43caf0'}]}>Filtrar</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    actionbutton: {
        height: 40,
        width: width * 0.45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'AirbnbCerealBook'
    }
})