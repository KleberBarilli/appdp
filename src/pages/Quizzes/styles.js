import styled from 'styled-components/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const Background = styled.View`
    flex:1;
    background-color:#131313;
    
`;

export const Container = styled.View`
    justify-content: center;
    flex: 1;
    margin-top: 30;
    
`;

export const Titulo = styled.Text`
    font-size:25px;
    color:#FFF054;
    font-style:italic;
    margin-bottom:50px;
    font-weight:bold;
    text-align:center;
`;

export const Imagem = styled.Image`
    width:100%;
    height:185px;
    margin-bottom:20px;
    border-radius:10px;
    
`;

export const TextItem = styled.Text`
    padding: 10px;
    font-size: 22px;
    height: 90px;
    width:100%;
    color:#FFF;
    text-align:center;
    background-color:rgba(60,2,186,0.2);
    border-radius:0;
`;

export const Pergunta = styled.Text`
    font-size:25px;
    color:#FFF000;
    font-style:italic;
    margin-bottom:45px;
    font-weight:bold;
    text-align:center;
`;

export const Resposta = styled.Text`
    font-size:22px;
    color:#FFF;
    margin-bottom:10px;
    font-weight:bold;
    text-align:center;
    background-color:rgba(0,204,116,1);
    border-radius:10px;
`;
export const RespostaA = styled.Text`
    font-size:22px;
    color:#FFF;
    margin-bottom:10px;
    font-weight:bold;
    text-align:center;
    background-color: rgba(82,0,204,0.2);
    border-radius:10px;
`;

export const NextQuestion = styled.View`
    background-color:#fff;
    height:35px;
    
`;

export const NumberQuestion = styled.Text`
    font-size:25px;
    text-align:center;
`;


export const BR = styled.View`
    background-color:#131313;
    height:30px;
    
`;

export const AB = styled.View`
flex:1;

height:40px;
width:200px;

background: #C40000;
border: 3px solid #000000;

    
`;

export const BBB = styled.Text`
flex:1;
width: 148px;
height: 33px;
left: 127px;
top: 239px;


font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 33px;
display: flex;
align-items: center;


color: #FFFFFF;
    
`;