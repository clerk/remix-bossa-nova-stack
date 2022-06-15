import { SignedIn, UserButton, SignedOut } from '@clerk/remix';

export default function Header() {
  return (
    <>
      <SignedIn>
        <header className="flex items-center justify-between w-screen px-10 py-4 mb-4 shadow bg-white/70">
          <div className="flex items-center">
            <span className="text-lg text-gray-800">powered by</span>
            <img
              src="https://clerk.dev/images/clerk-logo.svg"
              className="h-6 mx-3"
            />
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>
      </SignedIn>
      <SignedOut>
        <header className="h-[10vh] backdrop-blur-sm"></header>
      </SignedOut>
    </>
  );
}
