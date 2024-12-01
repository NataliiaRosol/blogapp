import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
  <div className="flex items-center justufy-center p-3">
    <SignIn />
  </div>
  )
}