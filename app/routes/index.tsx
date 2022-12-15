import { useLoaderData } from '@remix-run/react'
import { ActionFunction, LoaderFunction, json } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { SignedIn, SignedOut, useAuth } from '@clerk/remix'
import { getAuth } from '@clerk/remix/ssr.server'
import {
    Button,
    Flex,
    Heading,
    Link as ChakraLink,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { LogoBanner, SongsList } from 'components'
import { getDB } from 'utils'

const dbErrorMessage =
    'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.'

export const loader: LoaderFunction = async ({ request }) => {
    const { userId } = await getAuth(request)
    if (!userId) return null

    const db = await getDB(request)
    if (!db) {
        return json({ error: dbErrorMessage })
    }

    const { data } = await db.from('songs').select()

    if (!data) {
        return json({ error: dbErrorMessage })
    }

    return json({ songs: data })
}

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const { userId } = await getAuth(request)

    const song = formData.get('add-song')

    const db = await getDB(request)
    if (!db) return null

    await db.from('songs').insert({ body: song, user_id: userId })
    return null
}

export default function Index() {
    const { signOut } = useAuth()
    const data = useLoaderData()
    const headingSize = useBreakpointValue({ base: 'lg', sm: '2xl', lg: '4xl' })

    return (
        <Stack
            justify='center'
            textAlign='center'
            h='100vh'
            flex={1}
            color='white'
            gap={20}
        >
            <Stack gap={4} p={{ base: 4, md: 8 }}>
                <Heading
                    as='h1'
                    size={headingSize}
                    textTransform='uppercase'
                    color='green.400'
                >
                    Bossa Nova Stack
                </Heading>

                <Text size='lg'>
                    Check the{' '}
                    <ChakraLink
                        href='https://github.com/clerkinc/remix-bossa-nova-stack/blob/main/README.md'
                        isExternal
                        textDecoration='underline'
                        color='white'
                        _visited={{
                            color: 'white',
                        }}
                    >
                        README
                    </ChakraLink>{' '}
                    file for instructions on how to get this project deployed.
                </Text>

                <SignedOut>
                    <Flex justify='center' gap={4}>
                        <Button as={Link} to='/sign-in' bg='gray.500'>
                            Sign in
                        </Button>

                        <Button as={Link} to='/sign-up'>
                            Sign up
                        </Button>
                    </Flex>
                </SignedOut>

                <SignedIn>
                    <Stack align='center' gap={4}>
                        <SongsList songs={data?.songs || []} />

                        {data?.error && (
                            <Text
                                color='red.500'
                                fontWeight='bold'
                                sx={{
                                    '& a': {
                                        textDecoration: 'underline',
                                    },
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: data.error,
                                }}
                            />
                        )}
                        <Button onClick={() => signOut()} bg='gray.500'>
                            Sign out
                        </Button>
                    </Stack>
                </SignedIn>
            </Stack>

            <LogoBanner />
        </Stack>
    )
}
