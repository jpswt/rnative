import { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	FlatList,
} from 'react-native';

import TextList from './components/TextList';
import TextInputs from './components/TextInputs';

export default function App() {
	const [list, setList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(true);
	}

	function closeModal() {
		setShowModal(false);
	}

	function addGoalHandler(text) {
		setList((currentList) => [
			...currentList,
			{ itemsText: text, id: Math.random().toString() },
			// Use for keyExtractor (extract id as key)
			// { itemsText: text, id: Math.random().toString() },
		]);
	}

	function deleteGoals(id) {
		setList((current) => {
			return current.filter((item) => item.id !== id);
		});
	}

	return (
		<View style={styles.container}>
			<Button title="Add New Item" color="#a065ec" onPress={openModal} />
			<TextInputs
				addGoalHandler={addGoalHandler}
				showModal={showModal}
				closeModal={closeModal}
			/>
			<View style={styles.goals}>
				<FlatList
					data={list}
					renderItem={(itemData) => {
						return (
							<TextList
								text={itemData.item.itemsText}
								id={itemData.item.id}
								deleteGoals={deleteGoals}
							/>
						);
					}}
					// keyExtractor={(item,index) => {
					//   return item.id
					// }}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 52,
		paddingHorizontal: 16,
		flex: 1,
	},
	// input: {
	// 	flexDirection: 'row',
	// 	justifyContent: 'space-between',
	// 	alignItems: 'center',
	// 	marginBottom: 24,
	// 	borderBottomWidth: 1,
	// 	borderBottomColor: 'grey',
	// 	flex: 1,
	// },
	// inputText: {
	// 	borderWidth: 1,
	// 	borderColor: '#cccccc',
	// 	width: '70%',
	// 	marginRight: 8,
	// 	padding: 8,
	// },
	goals: {
		flex: 6,
	},
	// listItem: {
	// 	margin: 8,
	// 	borderRadius: 8,
	// 	backgroundColor: '#5E0ACC',

	// 	padding: 6,
	// },
	// listText: {
	// 	color: 'white',
	// },
});
