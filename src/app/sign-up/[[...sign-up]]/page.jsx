import { SignOut } from '@clerk/nextjs'

function SignUpPage() {
  return (
    <div className="flex items-center justufy-center p-3">
    <SignOut />
  </div>
  )
}

export default SignUpPage