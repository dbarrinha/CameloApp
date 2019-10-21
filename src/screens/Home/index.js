import { colors } from 'config/colors';
import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View, Platform, Dimensions,
  StatusBar, TextInput, Text, StyleSheet, Animated
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Reaniamted, { Easing } from 'react-native-reanimated';
import { useNavigation } from 'react-navigation-hooks';
import { Card, CardInfo, Description, TextFooter, Thumb, Title } from './styles';
import Sugestoes from './Sugestoes';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
const {
  Value,
  interpolate,
  Extrapolate,
} = Reaniamted
const { width } = Dimensions.get("window");

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeImage: null,
      teste: 0,
      produtos: [
        { id: 1, nome: "Notebook intel i5", descricao: "produto novo", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwh0UeN9P0KJCH8fLabSSupqusmiSxfGGDSMZR3OoU-vWvgnP" },
        { id: 2, nome: "Moto g5plus", descricao: "na caixa", src: "https://rollingstone.uol.com.br/media/_versions/coringa_joaquin_phoenix_divulgacao_widelg.jpg" },
        { id: 3, nome: "Iphone 8 plus", descricao: "Acompanha carregador", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwh0UeN9P0KJCH8fLabSSupqusmiSxfGGDSMZR3OoU-vWvgnP" },
        { id: 4, nome: "Notebook intel i5", descricao: "produto novo", src: "https://facebook.github.io/react-native/img/tiny_logo.png" },
      ]
    }
    this.refContainer = React.createRef();

    this.scrollY = new Value(0)

    this.startHeaderHeight = 80
    this.endHeaderHeight = 50
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 80 + StatusBar.currentHeight
      this.endHeaderHeight = 50 + StatusBar.currentHeight
    }
    this.animatedHeaderHeight = interpolate(this.scrollY, {
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: Extrapolate.CLAMP
    })

    this.animatedHeaderOpacity = interpolate(this.scrollY, {
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    })

    this.animatedHeaderY = interpolate(this.scrollY, {
      inputRange: [0, 50],
      outputRange: [10, -30],
      extrapolate: Extrapolate.CLAMP
    })
  }

  componentWillMount = () => {
    this.allImages = {}
    this.oldPosition = {}

    this.positionX = new Value(0);
    this.positionY = new Value(0);
    this.dimensionX = new Value(0);
    this.dimensionY = new Value(0);
    this.animation = new Value(0)
  }

  handleAnimation = (width, height, pageX, pageY) => {
    this.positionX.setValue(pageX)
    this.positionY.setValue(pageY)
    this.dimensionX.setValue(width)
    this.dimensionY.setValue(height)

    this.refContainer.current.measure((dX, dY, dWidth, dHeight, dPageX, dPageY) => {
      Animated.parallel([
        Reaniamted.timing(this.positionX, { toValue: dPageX, duration: 300, easing: Easing.bounce }),
        Reaniamted.timing(this.positionY, { toValue: dPageY, duration: 300, easing: Easing.bounce }),
        Reaniamted.timing(this.dimensionX, { toValue: dWidth, duration: 300, easing: Easing.bounce }),
        Reaniamted.timing(this.dimensionY, { toValue: dHeight, duration: 300, easing: Easing.bounce }),
        Reaniamted.timing(this.animation, { toValue: 1, duration: 300, easing: Easing.bounce })
      ]).start()
    })
  }

  openImage = (index) => {
    this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
      this.oldPosition.x = pageX
      this.oldPosition.y = pageY
      this.oldPosition.width = width
      this.oldPosition.height = height


      this.positionX.setValue(pageX)
      this.positionY.setValue(pageY)
      this.dimensionX.setValue(width)
      this.dimensionY.setValue(height)

      setTimeout(() => {

        this.setState({
          activeImage: this.state.produtos[index]
        }, () => {
          this.handleAnimation(width, height, pageX, pageY)
        })
      }, 0);
    })
  }

  renderCard = (item, index) => {
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
          </Card>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
  render() {

    const activeStyle = {
      width: this.dimensionX,
      height: this.dimensionY,
      left: this.positionX,
      top: this.positionY
    }

    const animatedContentY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    })

    const animatedContentOpacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    })

    const contentStyle = {
      opacity: animatedContentOpacity,
      transform: [{
        translateY: animatedContentY
      }]
    }

    const crossStyle = {
      opacity: animatedContentOpacity
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.colorBackground }}>
        <StatusBar backgroundColor={colors.colorBackground} barStyle="dark-content" />
        <Reaniamted.View style={{
          height: this.animatedHeaderHeight,
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

          <Reaniamted.View style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            position: 'relative',
            top: this.animatedHeaderY,
            opacity: this.animatedHeaderOpacity
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
          </Reaniamted.View>
        </Reaniamted.View>
        <ScrollView
          style={{ marginTop: 5 }}
          scrollEventThrottle={16}
          onScroll={(e) => this.scrollY.setValue(e.nativeEvent.contentOffset.y)}
        >
          <Sugestoes />
          <View style={{ margin: 5 }}>
            <Title>Mais produtos</Title>
          </View>

          {this.state.produtos.map((item, index) => {
            return this.renderCard(item, index)
          })}

        </ScrollView>
        <View style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >

          <View style={{ flex: 2, zIndex: 1001, borderWidth: 0.1 }} ref={this.refContainer}>
            <Reaniamted.Image
              style={[{ resizeMode: 'cover' }, activeStyle]}
              source={this.state.activeImage ? { uri: this.state.activeImage.src } : null}
            >
            </Reaniamted.Image>
            <TouchableWithoutFeedback >
              <Animated.View style={[{  
                position: 'absolute', 
                top: 30, right: 30},{opacity: this.state.activeImage ? 1: 0}]}>
                <Text style={{ fontSize: 25, fontWeight: '700'}}>X</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>

          <Reaniamted.View style={[{ flex: 1, zIndex: 1000, backgroundColor: 'white', padding: 20, paddingTop: 50 }, contentStyle]}>
            <Text style={{ fontWeight: '700', fontSize: 25, paddingBottom: 10 }}>{this.state.activeImage ? this.state.activeImage.nome : ""}</Text>
            <Text>Sit sit laborum commodo non nisi fugiat consectetur veniam. Anim excepteur ipsum sit ea sit aliquip ex cillum consectetur officia irure. Id deserunt aute mollit Lorem laboris eiusmod ipsum mollit et. Cillum ut elit officia non pariatur cupidatat eu sit et officia velit et. Adipisicing incididunt qui aliqua aliqua voluptate aute minim qui labore consequat aliquip est dolor ea. Cupidatat tempor cupidatat consequat fugiat pariatur eiusmod ipsum ad nulla laboris laboris labore non adipisicing.</Text>
          </Reaniamted.View>
        </View>
      </SafeAreaView>
    );
  }
}
