import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { CardSugestao, ThumbSugestao, Title, Preco, ContainerPreco } from './styles';
import { FlatList } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("window");

export default function Filtros() {

    return (
        <View style={{
            height: width * 0.14,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: 5,
            marginVertical: 5,
            borderRadius: 50,
            elevation: 5
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#fff',
                width: (width -10) * 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                borderRightWidth: 0.1
            }}>
                <Text style={{ fontSize: width * 0.05 }}>Filtros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: '#fff',
                width: (width -10)* 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                borderLeftWidth: 0.1
            }}>
                <Text style={{ fontSize: width * 0.05 }}>Ordenar</Text>
            </TouchableOpacity>
        </View>
    );
}
