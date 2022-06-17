const fs = require('fs').promises
const inquirer = require('inquirer')
const path = require('path')

async function main({ rootDirectory }) {
    const ENV_PATH = path.join(rootDirectory, '.env')
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'clerkFrontend',
            message: 'Clerk Frontend API key:',
        },
        {
            type: 'input',
            name: 'clerkBackend',
            message: 'Clerk Backend API key:',
        },
        {
            type: 'input',
            name: 'supabaseUrl',
            message: 'Supabase URL:',
        },
        {
            type: 'input',
            name: 'supabaseAnonKey',
            message: 'Supabase anon key:',
        },
    ])

    const envContent = `CLERK_FRONTEND_API=${answers.clerkFrontend}
CLERK_API_KEY=${answers.clerkBackend}
SUPABASE_URL=${answers.supabaseUrl}
SUPABASE_ANON_KEY=${answers.supabaseAnonKey}`

    await fs.writeFile(ENV_PATH, envContent)

    console.log(
        `
    Setup is almost complete. Follow these steps to finish up:

    - Trigger an initial build
      npm run build

    - Spin up your dev instance
      npm run dev

    Now you're ready to boogie! 🕺
    `,
    )
}

module.exports = main
