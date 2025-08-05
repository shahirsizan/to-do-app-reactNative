import useTheme from "@/hooks/useTheme";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createHomeStyles } from "../../assets/styles/home.styles";
import Header from "../../components/Header";

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();

	const homeStyles = createHomeStyles(colors);

	return (
		<>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyles.container}>
				{/* header */}
				<Header />

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
