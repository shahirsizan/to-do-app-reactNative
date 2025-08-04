import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
	const { toggleDarkMode } = useTheme();

	const addTodo = useMutation(api.todos.addTodo);
	const clearAllTodos = useMutation(api.todos.clearAllTodos);

	return (
		<View style={styles.container}>
			<Text style={styles.content}>
				Edit app/index.tsx to edit this screen Sizan.
			</Text>

			<Text style={styles.content}>Hiii </Text>

			<TouchableOpacity
				onPress={() => {
					toggleDarkMode();
				}}
			>
				<Text>toggle dark mode</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					addTodo({ text: "Walk the cat" });
				}}
			>
				<Text>Add a new todo</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					clearAllTodos();
				}}
			>
				<Text>Clear all todos</Text>
			</TouchableOpacity>
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
