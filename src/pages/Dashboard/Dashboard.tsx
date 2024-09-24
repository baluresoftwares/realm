import { useAuth } from "@/context/AuthContext/AuthContext"

export default function DashboardPage() {
	const { user } = useAuth();

	if (user) {
		return 
	}
}