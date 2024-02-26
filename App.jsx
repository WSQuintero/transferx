import Navigation from "./src/navigation"
import { AuthProvider } from "./src/providers/AuthProvider"

export default function App() {
  return (
      <AuthProvider>
        <Navigation />
      </AuthProvider>
  )
}
