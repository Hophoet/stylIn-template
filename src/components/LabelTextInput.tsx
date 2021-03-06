import React from 'react';
import {TextInput, Text, View, StyleSheet, Dimensions} from 'react-native'


const LabelTextInput = ({label, containerStyle, keyboardType, autoFocus, placeholderTextColor, selectionColor, textInputStyle, textInputContainerStyle, placeholder}:any) => {
	return(
		<View style={[styles.container, containerStyle]}>
			{ label &&
				<Text style={styles.label}>{label}</Text>
			}
			<View style={[styles.textInputContainer, textInputContainerStyle]}>
				<TextInput
					keyboardType={(keyboardType)?keyboardType:'default'}
					autoFocus={autoFocus}
					placeholderTextColor={(placeholderTextColor)?placeholderTextColor:'black'}
					selectionColor={(selectionColor)?selectionColor:'black'}
					style={[styles.textInput, textInputStyle]}
					placeholder={placeholder}
				/>
			</View>
		</View> 
	)

}
export default LabelTextInput;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
	},
	label:{
		fontSize:15,
	},
	textInput:{
		color:'black',
		fontSize:18,

	},
	textInputContainer:{
		flexDirection:'row',
		alignItems:'center',
		borderBottomWidth:1,
		borderBottomColor:'black',
	}
	

})