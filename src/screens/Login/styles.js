import {Dimensions} from 'react-native'
import styled from 'styled-components/native'
const { height, width } = Dimensions.get("window");

export const Thumb = styled.Image.attrs(props => ({
    source: props.src,
  }))`
    width: 40px;
    height:40px;
    border-radius: 5px;     
    margin-right: 10px;
    background-color: #e67
`;
