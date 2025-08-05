import useTheme from "@/hooks/useTheme";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createHomeStyles } from "../../assets/styles/home.styles";
import Header from "../../components/Header";
import TodoInput from "../../components/TodoInput";

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();

	const homeStyles = createHomeStyles(colors);

	return (
		<>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyles.container}>
				{/* header */}
				<Header />

				<TodoInput />

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
