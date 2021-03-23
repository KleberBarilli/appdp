import React, { useEffect } from 'react';
import { BackHandler, View } from 'react-native';
import Share from 'react-native-share';

import { Background, Container, Titulo, Imagem, Menu, PD } from './styles'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import files from '../../../../assets/filesBase64';

export default function Mediano() {
  const navigation = useNavigation();

  const onShare = async () => {
    const shareOptions ={
      message:'This is a test messsage',
      url: files.image1
    }
    try {
      const ShareResponses = await Share.open(shareOptions);
    }catch(error){
      console.log('Error', error)
    }
  };


  useEffect(() => {
    BackHandler.addEventListener('harwareBackPress', () => true)
  })
  return (
    <Background>

      <Container>
        <Titulo>ATENÇÃO!!!</Titulo>
        <Imagem source={require('../../../../assets/leader/mediano.jpg')} />
        <Titulo>Precisa melhorar em muitos pontos. Sua liderança nem sempre é aceita pelas pessoas. Veja as questões onde deveria ter pontuado mais. Elas lhe dirão quais itens requerem melhoria.</Titulo>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'flex-end', backgroundColor:'#5402a1', height:40, marginTop:28}}>
          <Icon name='home' size={40} style={{ color: 'white' }} onPress={()=> navigation.navigate('Perfil')} />
          <PD/>
          <Icon name='share-square' size={40} style={{ color: 'white' }} onPress={onShare}/>
          <PD/>
          <Icon name='book' size={40} style={{ color: 'white' }} onPress={()=> navigation.navigate('Home')} />
        </View>
      </Container>
    </Background>
  );
}