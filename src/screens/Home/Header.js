import React, { useEffect } from 'react';
import { View, Platform, Dimensions, TextInput, StatusBar, Animated, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window");

export default function Header(props) {
    var startHeaderHeight = 80
    if (Platform.OS === 'android') {
        startHeaderHeight = 80 + StatusBar.currentHeight
    }

    return (

        <View style={{
            height: startHeaderHeight,
            borderBottomWidth: 1,
            borderBottomColor: '#dddddd',
            backgroundColor: '#fff',
            padding: 5,
        }}>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>

                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    elevation: 2,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    paddingVertical: 1,
                    paddingHorizontal: 10,
                    borderRadius: 4
                }}>
                    <Icon name="md-search" size={20} style={{ marginRight: 10, alignSelf: 'center' }} />
                    <TextInput
                        placeholder="Tente por Carregador Samsung"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={{ backgroundColor: 'white', width: width - 150}}
                    />
                </View>
                <Icon name="md-funnel" size={25} style={{ marginRight: 10, alignSelf: 'center' }} />
            </View>

            <Animated.View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                position: 'relative',
                top: 10
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
        </View>
    );
}
