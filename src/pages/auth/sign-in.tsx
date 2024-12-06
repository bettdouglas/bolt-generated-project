import { SignIn as ClerkSignIn } from "@clerk/clerk-react"

export function SignIn() {
  return (
    <div className="mx-auto w-full">
      <ClerkSignIn />
    </div>
  )
}
