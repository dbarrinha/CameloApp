import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardSugestao, ThumbSugestao, Title, Preco, ContainerPreco } from './styles';
import { FlatList } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get("window");

export default function Sugestoes() {
    let sugestoes = [
        { nome: "Notebook intel i5", descricao: "produto novo" },
        { nome: "Moto g5plus", descricao: "na caixa" },
        { nome: "Iphone 8 plus", descricao: "Acompanha carregador" },
    ]

    const renderSugestao = (item) => {
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
            <View style={{ margin: 5 }}>
                <Title>Sugestões para você</Title>
            </View>
            <FlatList
                horizontal
                data={sugestoes}
                keyExtractor={item => item.nome+""}
                extraData={sugestoes}
                renderItem={(item) => renderSugestao(item)}
            />
        </View>
    );
}
