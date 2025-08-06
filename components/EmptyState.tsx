import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const EmptyState = () => {
	const { colors } = useTheme();

	const homeStyles = createHomeStyles(colors);

	return (
		<View
			style={[homeStyles.emptyContainer, { backgroundColor: "#f3f4f6" }]}
		>
			<View style={homeStyles.emptyIconContainer}>
				<Ionicons name="clipboard-outline" size={60} color={"#eee"} />
			</View>

			<Text style={homeStyles.emptyText}>No todos yet!</Text>
			<Text style={homeStyles.emptySubtext}>
				Add your first todo to get started
			</Text>
		</View>
	);
};
export default EmptyState;
