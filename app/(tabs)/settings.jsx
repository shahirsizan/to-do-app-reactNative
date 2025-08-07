import { createSettingsStyles } from "@/assets/styles/settings.styles";
import DangerZone from "@/components/DangerZone";
import ProgressStats from "@/components/ProgressStats";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
	const { colors } = useTheme();
	const settingsStyles = createSettingsStyles(colors);

	const todos = useQuery(api.todos.getTodos);

	return (
		<SafeAreaView
			style={[settingsStyles.safeArea, { backgroundColor: "#f8fafc" }]}
		>
			{/* header icon */}
			<View style={[settingsStyles.header, { backgroundColor: "" }]}>
				<View
					style={[
						settingsStyles.titleContainer,
						{ backgroundColor: "" },
					]}
				>
					<View
						style={[
							settingsStyles.iconContainer,
							{ borderRadius: 15 },
							{ backgroundColor: "#3b82f6" },
						]}
					>
						<Ionicons name="settings" size={38} color="#ffffff" />
					</View>

					<Text style={settingsStyles.title}>Settings</Text>
				</View>
			</View>

			<ScrollView
				style={[settingsStyles.scrollView]}
				contentContainerStyle={[settingsStyles.content]}
				showsVerticalScrollIndicator={false}
			>
				<ProgressStats todos={todos} />

				<DangerZone />
			</ScrollView>
		</SafeAreaView>
	);
};
export default SettingsScreen;
