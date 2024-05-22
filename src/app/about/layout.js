import { YMapLoader } from "../components/YMapLoader/YMapLoader";

export const metadata = {
	title: "IP-ADDRESS-TRACKER",
	description: "Frontend mentor challenge",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-dark-gray">
				{children}
				<YMapLoader />
			</body>
		</html>
	);
}
