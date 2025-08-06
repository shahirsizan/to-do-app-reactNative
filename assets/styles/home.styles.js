import { StyleSheet } from "react-native";

export const createHomeStyles = (colors) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		safeArea: {
			flex: 1,
		},
		loadingContainer: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		loadingText: {
			marginTop: 20,
			fontSize: 18,
			fontWeight: "500",
			color: colors.text,
		},
		header: {
			paddingHorizontal: 24,
			paddingVertical: 32,
			paddingBottom: 24,
		},
		titleContainer: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 20,
		},
		iconContainer: {
			width: 56,
			height: 56,
			borderRadius: 16,
			justifyContent: "center",
			alignItems: "center",
			marginRight: 16,
		},
		titleTextContainer: {
			flex: 1,
		},
		title: {
			fontSize: 32,
			fontWeight: "700",
			letterSpacing: -1,
			marginBottom: 4,
			color: colors.text,
		},
		subtitle: {
			fontSize: 17,
			fontWeight: "500",
			color: colors.textMuted,
		},
		progressContainer: {
			marginTop: 8,
		},
		progressBarContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: 16,
		},
		progressBar: {
			flex: 1,
			height: 12,
			borderRadius: 6,
			overflow: "hidden",
			backgroundColor: colors.border,
		},
		progressFill: {
			height: "100%",
			borderRadius: 6,
		},
		progressText: {
			fontSize: 16,
			fontWeight: "700",
			minWidth: 40,
			textAlign: "right",
			color: colors.success,
		},
		inputSection: {
			paddingHorizontal: 24,
			paddingBottom: 12,
		},
		inputWrapper: {
			flexDirection: "row",
			alignItems: "flex-end",
			gap: 16,
		},
		input: {
			flex: 1,
			borderWidth: 2,
			borderRadius: 20,
			paddingHorizontal: 20,
			paddingVertical: 16,
			fontSize: 17,
			maxHeight: 120,
			fontWeight: "500",
			backgroundColor: colors.backgrounds.input,
			borderColor: colors.border,
			color: colors.text,
		},
		inputFocused: {
			borderColor: colors.primary,
		},
		addButton: {
			width: 56,
			height: 56,
			borderRadius: 28,
			justifyContent: "center",
			alignItems: "center",
		},
		addButtonDisabled: {
			opacity: 0.5,
		},
		todoList: {
			flex: 1,
		},
		todoListContent: {
			paddingHorizontal: 24,
			paddingBottom: 100,
		},
		emptyListContainer: {
			flexGrow: 1,
			justifyContent: "center",
		},
		todoItemWrapper: {
			marginVertical: 10,
		},
		todoItem: {
			flexDirection: "row",
			alignItems: "flex-start",
			paddingTop: 30,
			paddingBottom: 30,
			paddingLeft: 25,
			paddingRight: 30,
			borderRadius: 10,
			borderCurve: "circular",
			shadowColor: "#40424fff",
			shadowOffset: {
				width: 0,
				height: 15,
			},
			shadowOpacity: 0.1,
			shadowRadius: 5,
			elevation: 9,
		},
		checkbox: {
			marginRight: 26,
			marginTop: 2,
		},
		checkboxInner: {
			width: 32,
			height: 32,
			borderRadius: 16,
			justifyContent: "center",
			alignItems: "center",
		},
		todoTextContainer: {
			flex: 1,
		},
		todoText: {
			fontSize: 17,
			lineHeight: 24,
			fontWeight: "500",
			marginBottom: 16,
			color: colors.text,
		},
		todoActions: {
			flexDirection: "row",
			gap: 12,
		},
		actionButton: {
			width: 40,
			height: 40,
			borderRadius: 20,
			justifyContent: "center",
			alignItems: "center",
		},
		editContainer: {
			flex: 1,
		},
		editInput: {
			borderWidth: 2,
			borderRadius: 16,
			paddingHorizontal: 16,
			paddingVertical: 12,
			fontSize: 17,
			fontWeight: "500",
			marginBottom: 16,
			backgroundColor: colors.backgrounds.editInput,
			borderColor: colors.primary,
			color: colors.text,
		},
		editButtons: {
			flexDirection: "row",
			gap: 12,
		},
		editButton: {
			flexDirection: "row",
			alignItems: "center",
			paddingHorizontal: 16,
			paddingVertical: 10,
			borderRadius: 12,
		},
		editButtonText: {
			color: "#ffffff",
			fontSize: 14,
			fontWeight: "600",
		},
		emptyContainer: {
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 80,
		},
		emptyIconContainer: {
			width: 120,
			height: 120,
			justifyContent: "center",
			alignItems: "center",
			marginBottom: 24,
			backgroundColor: "#9ca3af",
			borderRadius: 70,
		},
		emptyText: {
			fontSize: 24,
			fontWeight: "700",
			marginBottom: 8,
			color: colors.text,
		},
		emptySubtext: {
			fontSize: 17,
			textAlign: "center",
			paddingHorizontal: 40,
			lineHeight: 24,
			color: colors.textMuted,
		},
	});

	return styles;
};
