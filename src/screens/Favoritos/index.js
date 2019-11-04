import React from 'react';
import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import { colors } from 'config/colors';
import SolicitaLogin from 'components/SolicitaLogin'
import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get('window')
import { useNavigation } from 'react-navigation-hooks'

export default function Favoritos() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.colorBackground, padding: 20, flexDirection: 'column',justifyContent: 'flex-start' }} >
      <Text style={{ color: colors.colorFont, fontSize: 30, fontFamily: 'AirbnbCerealBold' }}>Seus Favoritos</Text>
      
      {/* Verifica se o usuário está logado ou não, ai denderiza isso ou a ListaFavs */}
      <SolicitaLogin frase={"Acesse sua conta para ter acesso aos anúncios favoritos."} />
      
      {/* Colocar essa animação enquanto a lista de favoritos for vazia, ai coploca mais um texto */}
      <LottieView style={{position: 'relative', width: width/2, alignSelf: 'center'}} source={require('assets/lottie/favs.json')} autoPlay loop />
    </SafeAreaView>
  );
}