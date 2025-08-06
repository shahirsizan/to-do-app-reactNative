import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const Header = (props) => {
	const { colors } = useTheme();

	const homeStyles = createHomeStyles(colors);

	// const todos = useQuery(api.todos.getTodos);
	// console.log("todos api call: ", todos);
	const todos = props.todos;
	// console.log("todos api call: ", todos);

	const totalTodoCount = todos ? todos.length : 0;

	const completedTodoCount = todos
		? todos.filter((todo) => {
				return todo.isCompleted;
			}).length
		: 0;

	const progressPercentage =
		totalTodoCount > 0 ? (completedTodoCount / totalTodoCount) * 100 : 0;

	return (
		<View style={homeStyles.header}>
			{/*  texts */}
			<View style={homeStyles.titleContainer}>
				<View style={homeStyles.titleTextContainer}>
					<Text style={homeStyles.title}>Today&apos;s Tasks</Text>
					<Text style={homeStyles.subtitle}>
						{completedTodoCount} of {totalTodoCount} tasks completed
					</Text>
				</View>
			</View>

			{/* progress bar */}
			<View style={homeStyles.progressContainer}>
				<View style={homeStyles.progressBarContainer}>
					<View style={homeStyles.progressBar}>
						{/* progress bar pore dekhte hobe */}
						{/* <View
							style={[
								homeStyles.progressFill,
								{ width: `${progressPercentage}%` },
							]}
						></View> */}
					</View>
					<Text style={homeStyles.progressText}>
						{Math.round(progressPercentage)}%
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Header;
