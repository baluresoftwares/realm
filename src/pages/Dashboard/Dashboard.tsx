import { useAuth } from "@/context/AuthContext/AuthContext"

export default function IndexPage() {
	const { user } = useAuth();

	if (user) {
		return 
	}
}