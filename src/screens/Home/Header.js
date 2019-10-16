import React,{useEffect} from 'react';
import { View, Platform, Dimensions, TextInput , StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window");

export default function Header(props) {
    var startHeaderHeight = 80
    if(Platform.OS === 'android'){
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
                <View style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    elevation: 2,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    paddingVertical: 5,
                    paddingHorizontal: 10
                }}>
                    <Icon name="md-search" size={20} style={{ marginRight: 10, alignSelf: 'center' }} />
                    <TextInput
                        placeholder="Tente por Carregador Samsung"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={{ backgroundColor: 'white', flex: 1 }}
                    />
                </View>
            </View>
    );
}
