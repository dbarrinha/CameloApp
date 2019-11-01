import React from 'react';
import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import { colors } from 'config/colors';
import SolicitaLogin from 'components/SolicitaLogin'
// import { Container } from './styles';

export default function Favoritos() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }} >
          <SolicitaLogin />
        </SafeAreaView>
  );
}
