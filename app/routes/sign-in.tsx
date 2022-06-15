import { SignIn } from '@clerk/remix';

export default function SignInRoute() {
  return (
    <div className="backdrop-blur-sm">
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
}
