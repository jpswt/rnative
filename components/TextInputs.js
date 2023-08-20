import {
	View,
	TextInput,
	StyleSheet,
	Button,
	Modal,
	Image,
} from 'react-native';
import { useState } from 'react';

function TextInputs({ addGoalHandler, showModal, closeModal }) {
	const [text, setText] = useState('');

	function goalInputHandler(text) {
		setText(text);
	}

	function addGoals() {
		addGoalHandler(text);
		setText('');
		closeModal();
	}

	return (
		<Modal visible={showModal} animationType="slide">
			<View style={styles.input}>
				<Image
					source={require('../assets/images/goal.png')}
					style={styles.image}
				/>
				<TextInput
					style={styles.inputText}
					placeholder="Your goal here"
					onChangeText={goalInputHandler}
					value={text}
				></TextInput>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Item" onPress={addGoals} color={'#b180f0'} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={closeModal} color={'#f31282'} />
					</View>
				</View>
			</View>
		</Modal>
	);
}
export default TextInputs;

const styles = StyleSheet.create({
	input: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		borderBottomWidth: 1,
		backgroundColor: '#311b6b',
		flex: 1,
		color: 'white',
	},
	inputText: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		width: '100%',
		padding: 12,
		borderRadius: 6,
		color: '#120438',
	},
	image: {
		width: 100,
		height: 100,
		margin: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
