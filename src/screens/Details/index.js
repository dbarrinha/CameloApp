import React from 'react';
import { View, Text, Dimensions,Image, StyleSheet ,SafeAreaView} from 'react-native';
import { colors } from 'config/colors';
import {
    Thumb,
    Card,
    CardInfo,
    Title,
    Description,
    TextFooter
} from './styles'
const { height, width } = Dimensions.get("window");

export default function Details() {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }} >
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})
