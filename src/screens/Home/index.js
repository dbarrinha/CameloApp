import { colors } from 'config/colors';
import React,{useState} from 'react';
import { TouchableWithoutFeedback, View, Platform, Dimensions, StatusBar, TextInput, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useNavigation } from 'react-navigation-hooks';
import { Card, CardInfo, Description, TextFooter, Thumb, Title } from './styles';
import Sugestoes from './Sugestoes';
import Header from './Header';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
const {
  Value,
  cond,
  eq, set,
  useCode,
  Clock,
  interpolate,
  Extrapolate,
  concat,
  event
} = Animated
const { height, width } = Dimensions.get("window");

export default Home = () => {
  const { navigate } = useNavigation();
  var allImages = {}
  const { activeImage, setActiveImage} = useState(null)
  var scrollY = new Value(0)

  var startHeaderHeight = 80
  var endHeaderHeight = 50
  if (Platform.OS === 'android') {
    startHeaderHeight = 80 + StatusBar.currentHeight
    endHeaderHeight = 50 + StatusBar.currentHeight
  }
  let animatedHeaderHeight = interpolate(scrollY, {
    inputRange: [0, 50],
    outputRange: [startHeaderHeight, endHeaderHeight],
    extrapolate: Extrapolate.CLAMP
  })

  let animatedHeaderOpacity = interpolate(scrollY, {
    inputRange: [0, 50],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  })

  let animatedHeaderY = interpolate(scrollY, {
    inputRange: [0, 50],
    outputRange: [10, -30],
    extrapolate: Extrapolate.CLAMP
  })

  let produtos = [
    { id: 1, nome: "Notebook intel i5", descricao: "produto novo" },
    { id: 2, nome: "Moto g5plus", descricao: "na caixa" },
    { id: 3, nome: "Iphone 8 plus", descricao: "Acompanha carregador" },
    { id: 4, nome: "Notebook intel i5", descricao: "produto novo" },
  ]

  const openImage=(index)=>{
    console.log(index)
  }

  const renderCard = (item,index) => {
    return (
      <TouchableWithoutFeedback key={item.id} onPress={() => { openImage(index) }}>
        <Animated.View>
          <Card  >
            <Thumb
              ref={image => allImages[index] = image}
              source={require('assets/imgs/livros.jpeg')}
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
          </Card>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.colorBackground }}>
      <StatusBar backgroundColor={colors.colorBackground} barStyle="dark-content" />
      <Animated.View style={{
        height: animatedHeaderHeight,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        backgroundColor: '#fff',
        padding: 5,
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            elevation: 2,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            paddingVertical: 1,
            paddingHorizontal: 10,
            borderRadius: 4,
            backgroundColor: 'white'
          }}>
            <Icon name="md-search" size={20} style={{ marginRight: 10, alignSelf: 'center' }} />
            <TextInput
              placeholder="Tente por Carregador Samsung"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              style={{ backgroundColor: 'white', width: width - 150 }}
            />
          </View>
          <Icon name="md-funnel" size={25} style={{ marginRight: 10, alignSelf: 'center' }} />
        </View>

        <Animated.View style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          position: 'relative',
          top: animatedHeaderY,
          opacity: animatedHeaderOpacity
        }}>
          <View style={{
            minHeight: 20,
            minWidth: 60,
            padding: 5,
            backgroundColor: 'white',
            borderColor: '#dddddd',
            borderWidth: 1,
            borderRadius: 2,
            marginRight: 5
          }}>
            <Text style={{ fontWeight: '700', fontSize: 10, textAlign: 'center' }}>Hoje</Text>
          </View>
          <View style={{
            minHeight: 20,
            minWidth: 60,
            padding: 5,
            backgroundColor: 'white',
            borderColor: '#dddddd',
            borderWidth: 1,
            borderRadius: 2
          }}>
            <Text style={{ fontWeight: '700', fontSize: 10, textAlign: 'center' }}>Celulares</Text>
          </View>
        </Animated.View>
      </Animated.View>
      <ScrollView
        style={{ marginTop: 5 }}
        scrollEventThrottle={16}
        onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)}
      >
        <Sugestoes />
        <View style={{ margin: 5 }}>
          <Title>Mais produtos</Title>
        </View>

        {produtos.map((item, index) => {

          return renderCard(item,index)
        })}

      </ScrollView>
    </SafeAreaView>
  );

}
