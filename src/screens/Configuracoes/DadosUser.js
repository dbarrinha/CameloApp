import React from 'react';
import { View, SafeAreaView } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import { Container } from './styles';

export default function DadosUser(props) {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={{}}>
                <View>

                </View>
                <View>
                    
                </View>
            </View>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 5}}>
                    <Text>Informações pessoais</Text>
                    <SimpleLineIcons name={"user"} size={22} color={"#5c5a5a"} />
                </View>
            </View>
        </SafeAreaView>
    );
}
