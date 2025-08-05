import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
	const { toggleDarkMode, colors } = useTheme();

	const styles = createStyles(colors);

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
				<Text style={[styles.content, { backgroundColor: "red" }]}>
					toggle dark mode
				</Text>
			</TouchableOpacity>
		</View>
	);
}

// because direct `cssProperty: colors.propertyName` evabe lekha jay na
// tai function er moddhe likhe argument hishebe pass kora lagtese
const createStyles = (colors) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			gap: 20,
			backgroundColor: colors.bg,
		},
		content: {
			fontSize: 32,
			color: colors.text,
		},
	});

	return styles;
};
