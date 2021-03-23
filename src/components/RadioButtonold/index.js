import React, { Component, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value, resultado=0 } = this.state;

		const scrollRef = useRef(); 

		const onPressTouch = () => {
		  scrollRef.current?.scrollTo({
			  y: 1650,
			  animated: true,
		  });
	


		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
						
								onPress={() =>  {
									this.setState({
										value: res.key,
										resultado: res.key+resultado
									}); 
								},onPressTouch}>
                                  {value === res.key && <View style={styles.selectedRb} />}
								  
							</TouchableOpacity>
						</View>
					);
				})}
                <Text> Selected: {this.state.value} </Text>
				<Text> Total: {this.state.resultado} </Text>
			</View>
		);
	}
}
}

