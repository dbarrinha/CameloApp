import React from 'react';
import { View, Text, Dimensions } from 'react-native';
const { height, width } = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Ionicons'

export default function Sugestoes() {
    let horarios = [
        { dia_semana: "Segunda", expediente: [] },
        { dia_semana: "Terça", expediente: "na caixa" },
        { dia_semana: "Quarta", expediente: "Acompanha carregador" },
        { dia_semana: "Quinta", expediente: "Acompanha carregador" },
        { dia_semana: "Sexta", expediente: "Acompanha carregador" },
        { dia_semana: "Sábado", expediente: "Acompanha carregador" },
        { dia_semana: "Domingo", expediente: "Acompanha carregador" },
    ]

    const renderHorario = (item) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{marginRight: 5,fontWeight: '300'}}>{item.dia_semana}</Text>
                <Text>11:00–15:00, 18:00–23:00</Text>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Icon size={20} style={{marginRight: 5}} name="md-clock" />
            <Text style={{fontWeight: '500', fontSize: 16}}>Horários</Text>
            <View style={{ marginHorizontal: 10 }}>
                {horarios.map((item, key) => {
                    return renderHorario(item)
                })}
            </View>
        </View>
    );
}
