import { SignUp } from '@clerk/remix';

export default function SignUpRoute() {
  return (
    <div className="backdrop-blur-sm">
      <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}
