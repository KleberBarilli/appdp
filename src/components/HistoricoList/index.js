import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Categoria, IconView, TipoText, ValorText } from './styles';

export default function HistoricoList({data}) {
 return (
   <Container>
       <Categoria>
           <IconView categoria={data.categoria}>
               <Icon name={data.categoria === 'liderança'? 'arrow-up': 'arrow-down'} color="#FFF"size={20}/>
               <TipoText>{data.categoria}</TipoText>
           </IconView>
       </Categoria>
       <ValorText>
           {data.total}
       </ValorText>
   </Container>
  );
}