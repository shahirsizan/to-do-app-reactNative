import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
	const { colors } = useTheme();
	const homeStyles = createHomeStyles(colors);

	const [newTodo, setNewTodo] = useState("");
	const addTodo = useMutation(api.todos.addTodo);

	const handleAddTodo = async () => {
		if (newTodo.trim() !== "") {
			try {
				await addTodo({ text: newTodo.trim() });
				setNewTodo("");
			} catch (error) {
				console.log("Error adding a todo", error);
				Alert.alert("Error", "Failed to add todo");
			}
		}
	};

	return (
		<View style={homeStyles.inputSection}>
			<View style={homeStyles.inputWrapper}>
				{/* input box */}
				<TextInput
					style={homeStyles.input}
					placeholder="What needs to be done?"
					placeholderTextColor={colors.textMuted}
					value={newTodo}
					onChangeText={(text) => {
						setNewTodo(text);
					}}
					onSubmitEditing={() => {
						handleAddTodo();
					}}
				/>

				{/* add button */}
				<TouchableOpacity
					onPress={() => {
						handleAddTodo();
					}}
				>
					<LinearGradient
						colors={colors.gradients.primary}
						style={[homeStyles.addButton]}
					>
						<Ionicons name="add" size={24} color="#ffffff" />
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TodoInput;
