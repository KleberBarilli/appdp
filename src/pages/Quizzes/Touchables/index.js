import React, { useRef } from 'react';
import { View } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

import { Resposta, RespostaA } from '../styles';

export default function Touchables() {

    const scrollRef = useRef();

    const onPressTouch = (value) => {

        //setTotal(value)
        //console.log('value:' +value)
        if (value === 0)  {
            alert('00000')
        } else {
            alert('SDSASADSAD') 
        }
        scrollRef.current?.scrollTo({
            y: 6605,
            animated: true,
        });
    }
    return (
        <ScrollView ref={scrollRef}>
          
             <TouchableHighlight
          style={{borderRadius:10,height:29, marginTop:10}}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => onPressTouch(0)}>
             <Resposta >Sempre</Resposta>
            </TouchableHighlight>

          <TouchableHighlight
          style={{ borderRadius:10,height:29, marginTop:10}}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => onPressTouch()}>
             <RespostaA >Na Maioria das Vezes</RespostaA>
            </TouchableHighlight>

          <TouchableHighlight
          style={{ borderRadius:10,height:29, marginTop:10}}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => onPressTouch()}>
             <Resposta >Medianamente</Resposta>
            </TouchableHighlight>

          <TouchableHighlight
          style={{borderRadius:10,height:29, marginTop:10}}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => onPressTouch()}>
             <RespostaA >Poucas Vezes</RespostaA>
            </TouchableHighlight>

          <TouchableHighlight
          style={{borderRadius:10,height:29, marginTop:10}}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => onPressTouch()}>
             <Resposta >Nunca</Resposta>
            </TouchableHighlight>
        </ScrollView>


  );
}