import EmptyState from "@/components/EmptyState";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import {
	Alert,
	FlatList,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createHomeStyles } from "../../assets/styles/home.styles";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import TodoInput from "../../components/TodoInput";

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();
	const homeStyles = createHomeStyles(colors);
	const toggleTodo = useMutation(api.todos.toggleTodo);
	const deleteTodo = useMutation(api.todos.deleteTodo);
	const updateTodo = useMutation(api.todos.updateTodo);
	const [editingId, setEditingId] = useState(null);
	const [editText, setEditText] = useState("");
	const [isEditing, setIsEditing] = useState(false);

	// api gets called automatically. returns an `array of object`
	const todos = useQuery(api.todos.getTodos);
	// console.log("todos in index.jsx: ", todos);

	const handleToggleTodo = async (id) => {
		try {
			await toggleTodo({ id });
		} catch (error) {
			console.log("Error toggling todo", error);
			Alert.alert("Error", "Failed to toggle todo");
		}
	};

	const handleDeleteTodo = async (id) => {
		Alert.alert(
			"Delete Todo",
			"Are you sure you want to delete this todo?",
			[
				{ text: "Cancel", style: "cancel" },
				{
					text: "Delete",
					style: "destructive",
					onPress: () => deleteTodo({ id }),
				},
			]
		);
	};

	const handleEditTodo = (todo) => {
		setEditText(todo.text);
		setEditingId(todo._id);
		setIsEditing(true);
	};

	const handleSaveEdit = async () => {
		if (editingId && editText.trim()) {
			try {
				await updateTodo({ id: editingId, text: editText });
				setEditingId(null);
				setEditText("");
			} catch (error) {
				console.log("Error updating todo", error);
				Alert.alert("Error", "Failed to update todo");
			}
		} else {
			setEditingId(null);
			setEditText("");
			setIsEditing(false);
			Alert.alert(
				"Error",
				"Todo text cannot be empty. Rolling back to original state."
			);
		}
	};

	const handleCancelEdit = () => {
		setEditingId(null);
		setEditText("");
		setIsEditing(false);
	};

	const isLoading = todos === undefined;
	if (isLoading) {
		return <LoadingSpinner />;
	}

	const renderTodoItem = ({ item }) => {
		return (
			<View
				style={[
					homeStyles.todoItemWrapper,
					homeStyles.todoItem,
					{ backgroundColor: "#ffffff" },
				]}
			>
				{/* 🟢/🔴 complete-incomplete button */}
				<TouchableOpacity
					style={[
						homeStyles.checkbox,
						homeStyles.checkboxInner,
						item.isCompleted
							? { backgroundColor: "#10b981" }
							: { backgroundColor: "#6b7280" },
					]}
					onPress={() => handleToggleTodo(item._id)}
				>
					{item.isCompleted && (
						<Ionicons name="checkmark" size={18} color="#fff" />
					)}
				</TouchableOpacity>

				{/* edit/normal mode */}
				{isEditing && editingId === item._id ? (
					<View style={homeStyles.editContainer}>
						{/* 📝 todo input */}
						<TextInput
							style={homeStyles.editInput}
							value={editText}
							onChangeText={setEditText}
							autoFocus
							multiline
							placeholder="Edit your todo..."
							placeholderTextColor={colors.textMuted}
						/>
						{/* action buttons */}
						<View style={homeStyles.editButtons}>
							{/* ✅ save button */}
							<TouchableOpacity
								onPress={handleSaveEdit}
								style={[
									homeStyles.editButton,
									{ backgroundColor: "#10b981" },
								]}
							>
								<Text style={homeStyles.editButtonText}>
									Save
								</Text>
							</TouchableOpacity>

							{/* ❌ cancel button */}
							<TouchableOpacity
								onPress={() => {
									handleCancelEdit();
								}}
								style={[
									homeStyles.editButton,
									{ backgroundColor: "#9ca3af" },
								]}
							>
								<Text style={homeStyles.editButtonText}>
									Cancel
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				) : (
					<View style={homeStyles.todoTextContainer}>
						{/* 🧩 todo text */}
						<Text
							style={[
								homeStyles.todoText,
								item.isCompleted && {
									textDecorationLine: "line-through",
									color: colors.textMuted,
									opacity: 0.6,
								},
							]}
						>
							{item.text}
						</Text>

						{/* action buttons */}
						<View style={homeStyles.todoActions}>
							{/* ✏️ edit button */}
							<TouchableOpacity
								onPress={() => handleEditTodo(item)}
								style={[
									homeStyles.actionButton,
									{
										backgroundColor: "#f59e0b",
									},
								]}
							>
								<Ionicons
									name="pencil"
									size={18}
									color="#fff"
								/>
							</TouchableOpacity>

							{/* 🗑️ delete button */}
							<TouchableOpacity
								onPress={() => handleDeleteTodo(item._id)}
								activeOpacity={0.8}
								style={[
									homeStyles.actionButton,
									{
										backgroundColor: "#ef4444",
									},
								]}
							>
								<Ionicons name="trash" size={18} color="#fff" />
							</TouchableOpacity>
						</View>
					</View>
				)}
			</View>
		);
	};

	return (
		<>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyles.container}>
				{/* top title header */}
				<Header todos={todos} />

				{/* middle todo input box */}
				<TodoInput />

				{/* bottom todos list */}
				<FlatList
					data={todos}
					renderItem={renderTodoItem}
					keyExtractor={(item) => {
						return item._id;
					}}
					style={homeStyles.todoList}
					contentContainerStyle={homeStyles.todoListContent}
					ListEmptyComponent={<EmptyState />}
					showsVerticalScrollIndicator={false}
				/>

				{/* dark mode toggle button */}
				<TouchableOpacity
					onPress={() => {
						toggleDarkMode();
					}}
				>
					<Text>toggle dark mode</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
}
