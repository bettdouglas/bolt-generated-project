import { SignUp as ClerkSignUp } from "@clerk/clerk-react"

export function SignUp() {
  return (
    <div className="mx-auto w-full">
      <ClerkSignUp />
    </div>
  )
}
