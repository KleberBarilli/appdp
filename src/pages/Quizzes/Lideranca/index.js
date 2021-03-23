import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, Touchable } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Background, Container, Pergunta, Resposta, RespostaA, Imagem, NextQuestion, NumberQuestion, BR } from '../styles';
//import Touchables from './Touchables';

import { useState } from 'react/cjs/react.development';

import { useRef } from 'react';






export default function Lideranca  ()  {
  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);
  const PROP = [
    {
      key: 5,
      text: 'Sempre',
    },
    {
      key: 4,
      text: 'Maioria das vezes',
    },
    {
      key: 3,
      text: 'Medianamente',
    },
    {
      key: 2,
      text: 'Poucas vezes',
    },
    {
      key: 1,
      text: 'Nunca'
    }
  ];

  const scrollRef = useRef();

  const onPressTouch = (value) => {

    //setTotal(value)
    console.log('value:' +value)


  }

  return (
    <Background>


      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <Container>
          <NextQuestion>
            <NumberQuestion>Pergunta 1STT</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />


          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(0)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(0)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(0)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(0)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(0)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>

          <BR />

          <NextQuestion>

            <NumberQuestion>Pergunta 2</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???</Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(1)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(1)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(1)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(1)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(1)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>
          <BR />
          <NextQuestion>
            <NumberQuestion>Pergunta 3</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(2)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(2)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(2)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(2)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(2)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>
          <NextQuestion>
            <NumberQuestion>Pergunta 4</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />


          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(3)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(3)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(3)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(3)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(3)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>

          <BR />

          <NextQuestion>

            <NumberQuestion>Pergunta 5</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???</Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(4)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(4)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(4)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(4)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(4)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>
          <BR />
          <NextQuestion>
            <NumberQuestion>Pergunta 6</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(5)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(5)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(5)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(5)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(5)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>


          <BR />
          <NextQuestion>
            <NumberQuestion>Pergunta 7</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />


          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(6)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(6)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(6)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(6)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(6)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>

          <BR />

          <NextQuestion>

            <NumberQuestion>Pergunta 8</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???</Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(7)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(7)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(7)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(7)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(7)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>
          <BR />
          <NextQuestion>
            <NumberQuestion>Pergunta 9</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>


          <BR />
          <NextQuestion>
            <NumberQuestion>Pergunta 10</NumberQuestion>
          </NextQuestion>
          <Pergunta>Você se considera uma pessoa líder estrategicamente ou não hein krl fffff???
              </Pergunta>
          <Imagem source={require('../../../assets/lideranca.png')} />


          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(1)}>
            <Resposta >Sempre</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <RespostaA >Na Maioria das Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <Resposta >Medianamente</Resposta>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <RespostaA >Poucas Vezes</RespostaA>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 10, height: 29, marginTop: 10 }}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPressTouch(9)}>
            <Resposta >Nunca</Resposta>
          </TouchableHighlight>

          <BR />

        </Container>

      </ScrollView>
    </Background>


  );
}

