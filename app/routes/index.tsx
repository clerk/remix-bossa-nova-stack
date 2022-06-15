import { SignedIn, SignedOut, useUser } from '@clerk/remix';
import { Link } from '@remix-run/react';
import LogoBanner from '../components/logo-banner';

export default function Index() {
  const { user } = useUser();

  return (
    <main className="flex flex-col items-center justify-center flex-1 text-white backdrop-blur-sm">
      <div className="pb-10">
        <h1 className="font-bold text-center uppercase text-9xl text-shadow-lg">
          New Wave Stack
        </h1>
        <p className="mt-6 text-lg text-center text-shadow-lg">
          Check out the README for instructions on how to get this project
          deployed.
        </p>
      </div>
      <SignedOut>
        <div className="flex flex-row justify-around w-1/4 mx-auto mt-10 mb-20 text-2xl text-white">
          <Link
            to="/sign-in"
            className="inline-block py-3 text-lg font-medium leading-snug text-center text-blue-600 transition duration-150 ease-in-out bg-white rounded shadow-md px-7 hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="inline-block py-3 text-lg font-medium leading-snug text-center text-white transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
          >
            Sign up
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <h2 className="pb-20 text-5xl font-bold text-shadow-lg">
          {['Hey', user?.firstName].filter(Boolean).join(' ')}, sweet dreams are
          made of this...
        </h2>
      </SignedIn>
      <LogoBanner />
    </main>
  );
}
