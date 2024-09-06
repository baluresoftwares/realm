import { useAuth } from "@/context/AuthContext"

export default function IndexPage() {
	const { user } = useAuth();

	if (user) {
		return 
	}
}