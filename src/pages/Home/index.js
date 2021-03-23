import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';

import { Background, Container, Nome, Quizzes, Title, List } from './styles';

export default function Home() {
  const [historico, setHistorico] = useState([
    {key:'1',categoria:'comunicação',total:5},
    {key:'2',categoria:'persuasão',total:6},
    {key:'3',categoria:'liderança',total:2},
    {key:'4',categoria:'planejamento',total:3},
    {key:'5',categoria:'analista',total:0},
  ])

  const { user, signOut } = useContext(AuthContext);
 return (
   <Background>
     <Header/>
     <Container>
       <Nome>{user && user.name}</Nome>
       <Quizzes>19 respondidos</Quizzes>
     </Container>

     <Title>Últimos questionários</Title>

     <List
      showVerticalScrollIndicator={false}
      data={historico}
      keyExtrator={item => item.key}
      renderItem={ ({item}) => (<HistoricoList data={item} />)}
     />
   </Background>
  );
}