import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, CardInfo, Description, TextFooter, Thumb, Title } from './styles';

export default function ListaFavs(props) {

    const renderFav = (item) => {

        return (
            <TouchableWithoutFeedback key={item.id} onPress={() => { this.openImage(index) }}>
                <Animated.View>
                    <Card  >
                        <Thumb
                            ref={image => this.allImages[index] = image}
                            source={{ uri: item.src }}
                        />
                        <CardInfo>
                            <Title>{item.nome}</Title>
                            <Description>
                                {item.descricao}
                            </Description>
                            <Title>R$ 500</Title>
                            <TextFooter>
                                30 setembro 13:10, Centro
                            </TextFooter>
                        </CardInfo>
                        <MaterialIcons style={{ position: 'absolute', top: 20, right: 20 }} color={"#5c5a5a"} name={"delete"} size={25} />
                    </Card>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={props.data}
                renderItem={(item) => renderFav(item)}
            />
        </View>
    );
}
