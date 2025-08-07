import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const ProgressStats = ({ todos }) => {
	const { colors } = useTheme();
	const settingsStyles = createSettingsStyles(colors);

	const totalTodos = todos ? todos.length : 0;

	const completedTodos = todos
		? todos.filter((todo) => {
				return todo.isCompleted;
			}).length
		: 0;

	const activeTodos = totalTodos - completedTodos;

	return (
		<View style={[settingsStyles.section, { backgroundColor: "#ffffff" }]}>
			<Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

			<View style={settingsStyles.statsContainer}>
				{/* total todos */}
				<View
					style={[
						settingsStyles.statCard,
						{
							backgroundColor: "#e2e8f0",
							borderLeftColor: colors.primary,
						},
					]}
				>
					<View
						style={[
							settingsStyles.statIconContainer,
							settingsStyles.statIcon,
							{ backgroundColor: "#3b82f6" },
						]}
					>
						<Ionicons name="list" size={30} color="#fff" />
					</View>

					<View>
						<Text style={settingsStyles.statNumber}>
							{totalTodos}
						</Text>
						<Text style={settingsStyles.statLabel}>
							Total Todos
						</Text>
					</View>
				</View>

				{/* completed todos */}
				<View
					style={[
						settingsStyles.statCard,
						{
							backgroundColor: "#e2e8f0",
							borderLeftColor: colors.success,
						},
					]}
				>
					<View
						style={[
							settingsStyles.statIconContainer,
							settingsStyles.statIcon,
							{ backgroundColor: "#059669" },
						]}
					>
						<Ionicons
							name="checkmark-circle"
							size={30}
							color="#fff"
						/>
					</View>

					<View>
						<Text style={settingsStyles.statNumber}>
							{completedTodos}
						</Text>
						<Text style={settingsStyles.statLabel}>Completed</Text>
					</View>
				</View>

				{/* active todos */}
				<View
					style={[
						settingsStyles.statCard,
						{
							backgroundColor: "#e2e8f0",
							borderLeftColor: colors.warning,
						},
					]}
				>
					<View
						style={[
							settingsStyles.statIconContainer,
							settingsStyles.statIcon,
							{ backgroundColor: "#d97706" },
						]}
					>
						<Ionicons name="time" size={30} color="#fff" />
					</View>

					<View>
						<Text style={settingsStyles.statNumber}>
							{activeTodos}
						</Text>
						<Text style={settingsStyles.statLabel}>Active</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ProgressStats;
