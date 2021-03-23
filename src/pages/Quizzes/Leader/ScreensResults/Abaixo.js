import React, { useEffect } from 'react';
import { BackHandler, View, StyleSheet, Image, Text } from 'react-native';
import Share from 'react-native-share';

import { Background, Container, Titulo, Imagem, Menu, PD } from './styles'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import files from '../../../../assets/filesBase64';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Abaixo() {
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
    <View style={styles.background}>

      <Container>
      <Text style={styles.myText}>PRECISA EVOLUIR ROBSON KKKKK!!!</Text>
    <View style={styles.textWrapper}>
    
    <Image source={require('../../../../assets/leader/bad.png')} /> 
    </View>
       
 
        <Titulo>Você realmente necessita trabalhar bastante suas habilidades de liderança. Veja as questões onde precisa pontuar mais. Elas lhe dirão quais itens requerem melhoria.</Titulo>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'flex-end', backgroundColor:'#5402a1', height:40, marginTop:27}}>
          <Icon name='home' size={40} style={{ color: 'white' }} onPress={()=> navigation.navigate('Perfil')} />
          <PD/>
          <Icon name='share-square' size={40} style={{ color: 'white' }} onPress={onShare}/>
          <PD/>
          <Icon name='book' size={40} style={{ color: 'white' }} onPress={()=> navigation.navigate('Home')} />
        </View>
      </Container>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('34%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%'),
    color:'blue'
     // End result looks like the provided UI mockup
  },
  background:{
    flex:1,
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  }
});