import { useAuth } from "@clerk/clerk-react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout"
import { AuthLayout } from "@/components/layout/auth-layout"
import { Dashboard } from "@/pages/dashboard"
import { Explore } from "@/pages/explore"
import { Profile } from "@/pages/profile"
import { SignIn } from "@/pages/auth/sign-in"
import { SignUp } from "@/pages/auth/sign-up"

export function AppRoutes() {
  const { isSignedIn } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/explore" replace />} />
        <Route path="explore" element={<Explore />} />
        <Route
          path="dashboard"
          element={
            isSignedIn ? <Dashboard /> : <Navigate to="/sign-in" replace />
          }
        />
        <Route
          path="profile"
          element={
            isSignedIn ? <Profile /> : <Navigate to="/sign-in" replace />
          }
        />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
