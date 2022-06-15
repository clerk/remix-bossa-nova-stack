import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import styles from './styles/app.css';
import { rootAuthLoader } from '@clerk/remix/ssr.server';
import { LoaderFunctionArgs } from '@clerk/remix/dist/ssr/types';
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix';
import Header from './components/header';

export const loader = (args: LoaderFunctionArgs) => rootAuthLoader(args);
export const CatchBoundary = ClerkCatchBoundary();

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Wave Stack',
  viewport: 'width=device-width,initial-scale=1'
});

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <section className="flex flex-col h-screen w-screen bg-[url('/images/background.jpg')] bg-cover bg-no-repeat overflow-hidden">
          <Header />
          <Outlet />
        </section>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);
