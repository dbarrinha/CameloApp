import React from 'react';
import { View, Platform ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("window");
// import { Container } from './styles';

export default function Header(props) {
    console.log(props.teste)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' , margin: 10}}>
            <Icon
                size={30}
                color="#424040"
                name={Platform.OS === 'ios' ? "ios-menu" : "md-menu"} />
            <Icon
                size={30}
                color="#424040"
                name={Platform.OS === 'ios' ? "ios-funnel" : "md-funnel"} />
        </View>
    );
}
