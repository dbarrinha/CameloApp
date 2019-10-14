import React from 'react';
import { View, Text, Dimensions,Image, StyleSheet } from 'react-native';
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
        <View style={{ flex: 1, backgroundColor: colors.colorBackground, paddingVertical: 5 }} >
           
        </View>
    );
}

const styles = StyleSheet.create({
    
})
