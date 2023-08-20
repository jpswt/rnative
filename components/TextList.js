import { StyleSheet, View, Text, Pressable } from 'react-native';

function TextList({ text, id, deleteGoals }) {
	return (
		<View style={styles.listItem}>
			<Pressable
				android_ripple={{ color: '#210644' }}
				onPress={deleteGoals.bind(this, id)}
				style={({ pressed }) => (pressed ? styles.pressedItem : null)}
			>
				<Text style={styles.listText}>{text}</Text>
			</Pressable>
		</View>
	);
}

export default TextList;

const styles = StyleSheet.create({
	listItem: {
		margin: 8,
		borderRadius: 8,
		backgroundColor: '#5E0ACC',
	},
	listText: {
		padding: 6,
		color: 'white',
	},
	pressedItem: {
		opacity: 0.5,
	},
});
