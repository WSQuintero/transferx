import Navigation from "./src/navigation"
import { ThemeProvider } from "./src/theme"
import { AuthProvider } from "./src/providers/AuthProvider"

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  )
}
