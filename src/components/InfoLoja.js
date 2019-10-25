import React from 'react';
import { Text, ScrollView, View, TouchableNativeFeedback } from 'react-native';
import { Title, Description, Card } from './styles';
import HorarioEmpresa from './HorarioEmpresa'
import { colors } from 'config/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'

export default function InfoLoja(props) {
    return (
        <ScrollView
            scrollEventThrottle={16}
            onScroll={(e) => props.setscroll(e.nativeEvent.contentOffset.y)}
        >
            <Title>Nome Produto - R$ 50</Title>
            <Text style={{ color: colors.colorFont, fontWeight: '500', marginVertical: 10 }}>Descrição</Text>
            <Description>Sit sit laborum commodo non nisi fugiat consectetur veniam. Anim excepteur ipsum sit ea sit aliquip ex cillum consectetur officia irure. Id deserunt aute mollit Lorem laboris eiusmod ipsum mollit et. Cillum ut elit officia non pariatur cupidatat eu sit et officia velit et. </Description>
            <Text style={{ color: colors.colorFont, fontWeight: '500', marginVertical: 10 }}>Informações da Loja</Text>
            <TouchableNativeFeedback>
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon size={25} style={{ marginRight: 5, width: 30 }} name="md-card" />
                        <Text style={{ fontWeight: '500', fontSize: 16 }}>MASTER VISA (usar svg)</Text>
                    </View>
                    <Icon2 size={25} name="keyboard-arrow-right" />
                </Card>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon size={25} style={{ marginRight: 5, width: 30 }} name="md-pin" />
                        <Text style={{ fontWeight: '500', fontSize: 16 }}>Box 597, 2º piso</Text>
                    </View>
                    <Icon2 size={25} name="keyboard-arrow-right" />
                </Card>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon size={25} style={{ marginRight: 5, width: 30 }} name="logo-whatsapp" />
                        <Text style={{ fontWeight: '500', fontSize: 16 }}>(86) 98888-8888</Text>
                    </View>
                    <Icon2 size={25} name="keyboard-arrow-right" />
                </Card>
            </TouchableNativeFeedback>
            <HorarioEmpresa />
            <TouchableNativeFeedback>
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon size={25} style={{ marginRight: 5, width: 30 }} name="logo-instagram" />
                        <Text style={{ fontWeight: '500', fontSize: 16 }}>instagram.com/dbarrinha</Text>
                    </View>
                    <Icon2 size={25} name="keyboard-arrow-right" />
                </Card>
            </TouchableNativeFeedback>
        </ScrollView>
    );
}
