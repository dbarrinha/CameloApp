import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
const { height, width } = Dimensions.get("window");
import { colors } from 'config/colors'

export const CardInfo = styled.View`
    width: ${width};
    height:${width / 4.5};
    flex-direction: column;
    background-color: white;
    padding: 5px;
    justify-content: flex-start;
`;

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

export const Separator = styled.View`
    width: ${width};
    height:1;
    background-color: #c5c5c5;
`;

export const Thumb = styled.Image.attrs(props => ({
    source: props.source,
}))`
    width: ${width / 4};
    height:${width / 4};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: white
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
`;

export const TextFooter = styled.Text`
    font-size: 10px;
    position: absolute;
    bottom: 1;
    left:5;
    color: ${colors.colorFontFooter};
    font-weight: bold;
`;

export const CardSugestao = styled.View`
    width: ${width / 1.5};
    height:${width / 2.2};
    flex-direction: column;
    border-radius: 10px;
    background-color: #fff;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    elevation: 5px;
`;

export const ThumbSugestao = styled.Image.attrs(props => ({
    source: props.source,
}))`
    width: ${width / 1.5};
    height:${width / 3};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: white
`;

export const ContainerPreco = styled.View`
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 30px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Preco = styled.Text`
    font-size: 15px;
    color: ${colors.colorFont};
    font-weight: bold;
`;


