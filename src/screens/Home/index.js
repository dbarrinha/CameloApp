import { colors } from 'config/colors';
import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useNavigation } from 'react-navigation-hooks';
import { Card, CardInfo, Description, TextFooter, Thumb, Title } from './styles';
import Sugestoes from './Sugestoes';
import Header from './Header';
const {
  Value,
  cond,
  eq, set,
  useCode,
  Clock,
  interpolate,
  Extrapolate,
  concat
} = Animated

export default Home = () => {
  let animationState = new Value(0)

  const { navigate } = useNavigation();
  let produtos = [
    { nome: "Notebook intel i5", descricao: "produto novo" },
    { nome: "Moto g5plus", descricao: "na caixa" },
    { nome: "Iphone 8 plus", descricao: "Acompanha carregador" },
  ]

  const renderCard = (item) => {
    return (
      <Card >
        <Thumb
          source={require('assets/imgs/livros.jpeg')}
        />
        <TouchableOpacity onPress={() => { navigate("Details") }}>
          <CardInfo>
            <Title>{item.item.nome}</Title>
            <Description>
              {item.item.descricao}
            </Description>
            <Title>R$ 500</Title>
            <TextFooter>
              30 setembro 13:10, Centro
          </TextFooter>
          </CardInfo>
        </TouchableOpacity>
      </Card>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }}>
      <StatusBar backgroundColor={colors.colorBackground} barStyle="dark-content" />
      <Header teste="fsdfsdfs" />
      <Sugestoes />
      <View style={{ margin: 5 }}>
        <Title>Mais produtos</Title>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={item => item.nome + ""}
        extraData={produtos}
        renderItem={(item) => renderCard(item)}
        showsHorizontalScrollIndicator={false}
      />
      
      {/*<View style={{width: 100, height: 100, position: 'absolute', backgroundColor: 'red', bottom: -80}}>

  </View> */}
    </View>
  );

}
