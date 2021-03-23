
import React, { useState } from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Background, Container, TextItem, Titulo} from './styles';
import Header from '../../components/Header';

const dummyArray = [
  { id: '1', nome: 'Liderança', perguntas: '15' },
  { id: '2', nome: 'Tipo de Perfil', perguntas: '10' },
  { id: '3', nome: 'Vocacional', perguntas: '20' },
  { id: '4', nome: 'Planjeador', perguntas: '7' },
  { id: '5', nome: 'Teste sua Personalidade', perguntas: '10' },
  { id: '6', nome: 'Teste sua Personalidade', perguntas: '10' },
  { id: '7', nome: 'Teste sua Personalidade', perguntas: '10' },
  { id: '8', nome: 'Teste sua Personalidade', perguntas: '10' },


];

const Quizzes = () => {
  const [listItems, setListItems] = useState(dummyArray);
  const navigation = useNavigation();
 

  const ItemView = ({ item }) => {
    return (
      // FlatList Item
      <View>
        <TextItem
          onPress={() => getItem(item)} name="Lideranca">
       
          {item.nome} - {item.perguntas} Perguntas
          
        </TextItem>
        
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    //navigation.navigate('Lideranca')
    navigation.navigate('Leader')
  };

  return (
    <Background>
      <Header/>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Titulo>Questionários Disponíveis</Titulo>
          <FlatList
            data={listItems}
            //data defined in constructor
            ItemSeparatorComponent={ItemSeparatorView}
            //Item Separator View
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
          />
        </Container>
      </SafeAreaView>
    </Background>

  );
};


export default Quizzes;