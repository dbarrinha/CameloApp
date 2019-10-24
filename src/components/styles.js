import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const { height, width } = Dimensions.get("window");
import { colors } from 'config/colors'

export const Card = styled.View`
    width: ${width};
    height:${width / 4};
    flex-direction: row;
    align-items: center;
    margin-left:5px;
    margin-right: 5px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 5px;
    margin-bottom: 5px;
    elevation: 5px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.colorFont};
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 13px;
    color: ${colors.colorFont};
    font-weight: bold;
    text-align: justify;
`;

export const TextFooter = styled.Text`
    font-size: 10px;
    position: absolute;
    bottom: 1;
    left:5;
    color: ${colors.colorFontFooter};
    font-weight: bold;
`;


