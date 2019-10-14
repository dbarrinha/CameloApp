import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import SVG, { ClipPath, Circle, Image } from 'react-native-svg'

import { useNavigation } from 'react-navigation-hooks'
import Animated, { Easing } from 'react-native-reanimated';
const { height, width } = Dimensions.get("window");
import { runTiming } from 'utils/animated'
const {
  Value,
  cond,
  eq, set,
  useCode,
  Clock,
  interpolate,
  Extrapolate,
  concat
} = Animated
console.disableYellowBox = true;



export default Login = () => {
  const { navigate } = useNavigation();
  let animationState = new Value(0)
  let buttonOpacity = new Value(1)


  let buttonY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP
  })
  let bgY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3 - 100, 0],
    extrapolate: Extrapolate.CLAMP
  })
  let textInputZindex = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, -1],
    extrapolate: Extrapolate.CLAMP
  })
  let textInputY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0, 100],
    extrapolate: Extrapolate.CLAMP
  })
  let textInputOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  })
  let rotateClose = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP
  })

  const goToHome = ()=>{
    console.log("teste")
    navigate("Home")
  }

  useCode(
    cond(eq(animationState, 1),
      set(buttonOpacity, runTiming(new Clock(), 1, 0))
    ), [animationState])

  useCode(
    cond(eq(animationState, 2),
      set(buttonOpacity, runTiming(new Clock(), 0, 1))
    ), [animationState])

  
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end' }}>
      <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ translateY: bgY }], flex: 1 }]}>
        <SVG height={height + 100} width={width}>
          <ClipPath id='clip'>
            <Circle r={height + 100} cx={width / 2} />
          </ClipPath>
          <Image
            href={require('../../assets/bg2.jpg')}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidyMid slice"
            clipPath="url(#clip)"
          />
        </SVG>
      </Animated.View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <TouchableWithoutFeedback onPress={() => animationState.setValue(1)}>
          <Animated.View style={[styles.button, { opacity: buttonOpacity, transform: [{ translateY: buttonY }] }]}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              SIGN IN
              </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>goToHome()}>
          <Animated.View
            
            style={[styles.button,
            {
              backgroundColor: '#2e71dc',
              marginTop: 10,
              opacity: buttonOpacity,
              transform: [{ translateY: buttonY }]
            }
            ]}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
              </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        
        <Animated.View
          style={[StyleSheet.absoluteFill,
          {
            zIndex: textInputZindex,
            opacity: textInputOpacity,
            transform: [{ translateY: textInputY }],
            height: height / 3 ,
            top: null,
            justifyContent: "center",
          }
          ]}
        >
          <TouchableWithoutFeedback onPress={() => animationState.setValue(2)}>
            <Animated.View style={styles.closeButton} >
              <Animated.Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                transform: [{ rotate: concat(rotateClose, 'deg') }]
              }}>X</Animated.Text>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TextInput
            placeholder="Email"
            style={styles.textinput}
            placeholderTextColor="black"
          />
          <TextInput
            placeholder="Senha"
            style={styles.textinput}
            placeholderTextColor="black"
          />
          <Animated.View  style={[styles.button, { elevation: 5, marginTop: 5 }]}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> SIGN IN</Text>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    width: width,
    height: height + 50,
    paddingLeft: 15,
    paddingRight: 15,

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: 'white',
    height: height / 14,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    height: height / 15,
    marginHorizontal: 20,
    borderRadius: 25,
    paddingLeft: 10,
    marginVertical: 5,
    elevation: 2,
    backgroundColor: 'white',
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    left: width / 2 - 20,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 5
  }
});
