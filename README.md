# Remix Bossa Nova Stack

<!-- ![The Bossa Nova Stack](https://user-images.githubusercontent.com/96198083/170412378-b529b437-cd82-4fd4-add7-4abcfd64997c.png) -->

Learn more about [Remix Stacks](https://remix.run/stacks).

<!-- For more on our thoughts on the New Wave Stack check out our [blog post.](https://clerk.dev/blog/new-wave-stack) -->

<!-- To view this template in deployment visit: [new-wave-stack.netlify.app](https://new-wave-stack.netlify.app/) -->

## What's in the stack

- User management with [Clerk](https://clerk.dev)
- Database with [Supabase](https://supabase.com)
- Styling with [Chakra UI](https://chakra-ui.com/)
- Deployment with [Vercel](https://www.vercel.com/)
- End-to-end testing with [Cypress](https://cypress.io)
- Unit testing with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

## Development

Create a new application on the [Clerk dashboard](https://dashboard.clerk.dev).
Check out the Clerk docs for more information about **[setting up your Clerk application.](https://clerk.dev/docs/how-to/set-up-your-application)**

Create a new Remix app using the Bossa Nova Stack template:

```sh
npx create-remix@latest --template marcelscruz/remix-bossa-nova-stack <your-app>
```

Navigate into your project directory

```sh
cd <your-app>
```

Create a `.env` file.

```sh
touch .env
```

Find your **[Frontend API key and Backend API key](https://dashboard.clerk.dev/last-active?path=api-keys)** on the Clerk Dashboard and add them to that file like this:

```
CLERK_FRONTEND_API=<YOUR_FRONTEND_API_KEY>
CLERK_API_KEY=<YOUR_BACKEND_API_KEY>
```

Trigger an initial build

```sh
npm run build
```

Start your development instance

```sh
npm run dev
```

Visit http://localhost:3000/. If everything is set up correctly, you should see something that looks like this:

<img width="1771" alt="Screen Shot 2022-05-25 at 9 52 23 PM" src="https://user-images.githubusercontent.com/96198083/170412460-f1b7884e-f1bc-445e-bc1d-79691fc1dafb.png">

That's it! You're all set to start building your Remix application with complete user management provided by Clerk.

## Database

This template comes pre-configured to make calls to a **[Supabase database](https://supabase.com)**

To make authenticated calls to a Supabase database, you'll need to use one of Clerk's handy **[JWT Templates](https://clerk.dev/docs/how-to/jwt-templates)**. Check out our **[detailed instructions about setting up Clerk and Supabase](https://clerk.dev/docs/integration/supabase)**.

<!-- For a better understanding about how Fauna works with Remix and Clerk, it is highly recommend to work through Clerk's **[Remix/Clerk/Fauna Tutorial](https://clerk.dev/tutorials/build-movie-emoji-quiz-with-remix-fauna-and-clerk)** -->

## Styling

This template is pre-configured to use Chakra styling. For more information about it, check out the **[Chakra documentation](https://chakra-ui.com/docs)**.

## Deployment

You only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Testing

### Cypress

We use Cypress for our End-to-End tests in this project. You'll find those in the `cypress` directory. We've included Cypress's example files to help you on your way, but for more information on Cypress, **[check out their official documentation](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)**.

### Jest/Testing Library

For lower level tests of utilities and individual components, we use [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com).

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
