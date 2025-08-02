import { StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.content}>
				Edit app/index.tsx to edit this screen Sizan.
			</Text>

			<Text style={styles.content}>Hi </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		fontSize: 52,
	},
});
