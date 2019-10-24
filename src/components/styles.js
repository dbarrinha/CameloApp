import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const { height, width } = Dimensions.get("window");
import { colors } from 'config/colors'

export const Card = styled.View`
    flex: 1;
    height: 40;
    flex-direction: row;
    background-color: #fff;
    margin-top: 10;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
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


