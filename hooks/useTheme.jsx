import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const lightColors = {
	bg: "#f8fafc",
	surface: "#ffffff",
	text: "#1e293b",
	textMuted: "#64748b",
	border: "#e2e8f0",
	primary: "#3b82f6",
	success: "#10b981",
	warning: "#f59e0b",
	danger: "#ef4444",
	shadow: "#000000",
	gradients: {
		background: ["#f8fafc", "#e2e8f0"],
		surface: ["#ffffff", "#f8fafc"],
		primary: ["#3b82f6", "#1d4ed8"],
		success: ["#10b981", "#059669"],
		warning: ["#f59e0b", "#d97706"],
		danger: ["#ef4444", "#dc2626"],
		muted: ["#9ca3af", "#6b7280"],
		empty: ["#f3f4f6", "#e5e7eb"],
	},
	backgrounds: {
		input: "#ffffff",
		editInput: "#ffffff",
	},
	statusBarStyle: "dark-content",
};

const darkColors = {
	bg: "#0f172a",
	surface: "#1e293b",
	text: "#f1f5f9",
	textMuted: "#94a3b8",
	border: "#334155",
	primary: "#60a5fa",
	success: "#34d399",
	warning: "#fbbf24",
	danger: "#f87171",
	shadow: "#000000",
	gradients: {
		background: ["#0f172a", "#1e293b"],
		surface: ["#1e293b", "#334155"],
		primary: ["#3b82f6", "#1d4ed8"],
		success: ["#10b981", "#059669"],
		warning: ["#f59e0b", "#d97706"],
		danger: ["#ef4444", "#dc2626"],
		muted: ["#374151", "#4b5563"],
		empty: ["#374151", "#4b5563"],
	},
	backgrounds: {
		input: "#1e293b",
		editInput: "#0f172a",
	},
	statusBarStyle: "light-content",
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	// get user's theme preference history after render
	useEffect(() => {
		AsyncStorage.getItem("darkMode").then((value) => {
			if (value) {
				setIsDarkMode(JSON.parse(value));
			}
		});
	}, []);

	const toggleDarkMode = async () => {
		const newMode = !isDarkMode;
		setIsDarkMode(newMode);
		await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
	};

	const colors = isDarkMode ? darkColors : lightColors;

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	return context;
};

export default useTheme;
