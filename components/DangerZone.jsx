import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
	const { colors } = useTheme();
	const settingsStyles = createSettingsStyles(colors);

	const clearAllTodos = useMutation(api.todos.clearAllTodos);

	const handleResetApp = async () => {
		Alert.alert(
			"Delete todos",
			"⚠️ All your todos will be deleted permanently. Action cannot be undone.",
			// alert buttons list
			[
				{ text: "Cancel", style: "cancel" },
				{
					text: "Delete All",
					style: "destructive",
					onPress: async () => {
						try {
							const result = await clearAllTodos();
							Alert.alert(
								"Todos Deleted",
								`Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
							);
						} catch (error) {
							console.log("Error deleting all todos", error);
							Alert.alert("Error", "Failed to reset app");
						}
					},
				},
			]
		);
	};

	return (
		<View style={[settingsStyles.section, { backgroundColor: "#ffffff" }]}>
			<Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>

			<TouchableOpacity
				style={[settingsStyles.actionButton]}
				onPress={() => {
					handleResetApp();
				}}
			>
				<View style={settingsStyles.actionLeft}>
					<View
						style={[
							settingsStyles.actionIcon,
							{ backgroundColor: "#dc2626" },
						]}
					>
						<Ionicons name="trash" size={28} color="#ffffff" />
					</View>

					<Text style={settingsStyles.actionTextDanger}>
						Reset App
					</Text>
				</View>

				<Ionicons
					name="chevron-forward"
					size={28}
					color={colors.textMuted}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default DangerZone;
