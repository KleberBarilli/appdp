import React, { useContext,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { Text, Modal, View, Button } from 'react-native'
import { Container, Nome, NewLink, NewText, Logout, LogoutText, Photo } from './styles';
import Header from '../../components/Header';



import Icon from 'react-native-vector-icons/Feather';

export default function Profile() {

  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <Container>
   
      <Header/>
      <Nome>
        {user && user.name}  <Icon name="info" size={27} onPress={()=> setModalVisible(true)} />
        
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={{backgroundColor:'#fff', width:'100%',height:100}}>
            <Text>TELA COM INFOS ADICIONAIS*</Text>
            <Button title="Voltar" onPress={()=> setModalVisible(false)}/>
          </View>
        </Modal>
      </Nome>

       
     
     
      <Photo source={require('../../assets/kylo.jpg')} />
      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Realizar um novo Teste</NewText>
      </NewLink>
      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Histórico de Testes</NewText>
      </NewLink>


      <Logout onPress={() => signOut()}>
        <LogoutText>Sair/Logout</LogoutText>
      </Logout>
    </Container>
)};