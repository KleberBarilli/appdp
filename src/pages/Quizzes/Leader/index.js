import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import questions from './data';
import { Titulo, Imagem, Background, AB, BBB } from '../styles';

import LinearGradient from 'react-native-linear-gradient';




export default class answerSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: [],
      total: ''
    };
    this.myRef = React.createRef()
    
  }

  checkAnswer(answer, object) {
    var i;

    this.state.lista.push(answer.value)
    for (i = 0; i < object.length; i++) {
      if (object[i].isChecked === 'checked') {

        object[i].isChecked = 'unchecked';
      }
    }
    answer.isChecked = "checked";

    this.setState({ refresh: true });
  }

  async submitQuest() {
    let a = this.state.lista
    let sum = a.reduce(function (a, b) { return a + b; }, 0)
    await this.setState({ total: sum })
    console.log(this.state.total)
    this.result()


  }

   result() {
    const { navigation } = this.props;
    if(this.state.total >= 40){
      return navigation.navigate('Otimo')
    }else if (this.state.total > 29 && this.state.total < 40){
      return navigation.navigate('Bom')
    }else if (this.state.total > 19 && this.state.total < 30){
      return navigation.navigate('Mediano')
    }else{
      return navigation.navigate('Abaixo')
    }
      
    
  }


  render() {
    

    return (
      <ScrollView ref={this.myRef} showsVerticalScrollIndicator={false}>
      <Background>
        <Titulo>Que tipo de Líder você é?</Titulo>
        <Imagem source={require('../../../assets/lideranca.png')} />
        <View style={{ flex: 1, padding: 20, backgroundColor: "#f2f2f2" }}>
          {questions.map((object, d) =>
            <View key={d} style={{ justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>{object.title}</Text>
              {object.data.map((answer, i) =>
                <View key={i} style={styles.answerCard}>
                  <RadioButton value={answer.value} status={answer.isChecked} onPress={() => this.checkAnswer(answer, object.data)} />
                  <Text style={{ fontSize: 18, paddingLeft: 10 }}>{answer.label}</Text>
                </View>
              )}
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={() => this.submitQuest()}>
            <LinearGradient colors={['#11998E','#38EF7D'  ]} style={styles.gradient}>
              <Text style={styles.text}>Finalizar Questionário</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Background>

    </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  answerCard: {
    paddingLeft: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: 'white',
    height: 55,
    elevation: 1,
    borderRadius: 4,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5
  },
  button: {
    width: '100%',
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight:'bold'
  }
})