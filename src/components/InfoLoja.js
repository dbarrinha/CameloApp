import React from 'react';
import { Text, ScrollView,View } from 'react-native';
import { Title, Description } from './styles';
import HorarioEmpresa from './HorarioEmpresa'
import { colors } from 'config/colors';
import Icon from 'react-native-vector-icons/Ionicons'

export default function InfoLoja() {
    return (
        <ScrollView>
            <Title>Nome Produto - R$ 50</Title>
            <Text style={{ color: colors.colorFont, fontWeight: '500', marginVertical: 10 }}>Descrição</Text>
            <Description>Sit sit laborum commodo non nisi fugiat consectetur veniam. Anim excepteur ipsum sit ea sit aliquip ex cillum consectetur officia irure. Id deserunt aute mollit Lorem laboris eiusmod ipsum mollit et. Cillum ut elit officia non pariatur cupidatat eu sit et officia velit et. </Description>
            <Text style={{ color: colors.colorFont, fontWeight: '500', marginVertical: 10 }}>Informações da Loja</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'flex-start' }}>
                <Icon size={20} style={{ marginRight: 5 }} name="md-card" />
                <Text style={{ fontWeight: '500', fontSize: 16 }}>MASTER VISA (usar svg)</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Icon size={20} style={{ marginRight: 5 }} name="md-pin" />
                <Text style={{ fontWeight: '500', fontSize: 16 }}>Box 597, 2º piso</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Icon size={20} style={{ marginRight: 5 }} name="logo-whatsapp" />
                <Text style={{ fontWeight: '500', fontSize: 16 }}>(86) 98888-5647</Text>
            </View>
            <HorarioEmpresa />
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Icon size={20} style={{ marginRight: 5 }} name="logo-instagram" />
                <Text style={{ fontWeight: '500', fontSize: 16 }}>instagram/dbarrinha</Text>
            </View>
        </ScrollView>
    );
}
