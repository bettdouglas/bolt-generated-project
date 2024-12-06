import { ClerkProvider } from "@clerk/clerk-react"
import { Toaster } from "@/components/ui/toaster"
import { AppRoutes } from "./routes"

// Replace this with your actual Clerk publishable key
const CLERK_PUBLISHABLE_KEY = "pk_test_bWFueS1tb2xlLTQxLmNsZXJrLmFjY291bnRzLmRldiQ"


function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <AppRoutes />
      <Toaster />
    </ClerkProvider>
  )
}

export default App
