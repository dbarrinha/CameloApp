import React from 'react';
import { View ,StyleSheet,TouchableWithoutFeedback,Platform} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import InfoLoja from 'components/InfoLoja'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from 'react-navigation-hooks'
// import { Container } from './styles';

export default function Detalhes(props) {
    const { navigate } = useNavigation();
    return (
        <SafeAreaView >
            <View style={StyleSheet.absoluteFill}
            >
                <View style={{ flex: 1, zIndex: 1001, borderWidth: 0.1 }}>
                    <Image
                        style={[{ resizeMode: 'cover' }]}
                        source={props.activeImage ? { uri: props.activeImage.src } : null}
                    >
                    </Image>
                    <TouchableWithoutFeedback onPress={() => {}}>

                        <View style={[{
                            position: 'absolute',
                            top: 30, left: 30
                        }]}>
                            <Icon style={{ color: 'white' }} name={Platform.OS === "android" ? "md-arrow-round-back" : "ios-arrow-back"} size={28} />
                        </View>

                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert("Bora tomar uma caraio")}>
                        <View style={[{
                            position: 'absolute',
                            top: 30, right: 30
                        }]}>
                            <Icon style={{ color: 'white' }} name={Platform.OS === "android" ? "md-heart" : "ios-heart"} size={28} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={[{ flex: 1, zIndex: 1000, backgroundColor: 'white', paddingHorizontal: 20, paddingTop: 20, opacity: this.animatedContentOpacity }]}>
                    <InfoLoja setscroll={val => {
                        
                        console.log(val)
                    }} />
                </View>
            </View>
        </SafeAreaView>
    );
}
