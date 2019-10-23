import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardSugestao, ThumbSugestao, Title, Preco, ContainerPreco } from './styles';
import { FlatList } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("window");

export default function Sugestoes() {
    let horarios = [
        { dia_semana: "Segunda", expediente: 
    
    },
        { dia_semana: "Terça", expediente: "na caixa" },
        { dia_semana: "Quarta", expediente: "Acompanha carregador" },
        { dia_semana: "Quinta", expediente: "Acompanha carregador" },
        { dia_semana: "Sexta", expediente: "Acompanha carregador" },
        { dia_semana: "Sábado", expediente: "Acompanha carregador" },
        { dia_semana: "Domingo", expediente: "Acompanha carregador" },
    ]

    const renderHorario = (item) => {
        return (
            <CardSugestao>
                <ThumbSugestao source={require('assets/imgs/livros.jpeg')} />
                <ContainerPreco>
                    <Preco>R$ 15</Preco>
                </ContainerPreco>
                <View style={{ padding: 5 }}>
                    <Title>{item.item.nome}</Title>

                </View>
            </CardSugestao>
        )
    }
    return (
        <View>
           
        </View>
    );
}
