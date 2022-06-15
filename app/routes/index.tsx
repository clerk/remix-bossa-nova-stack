import { SignedIn, SignedOut, useUser, useAuth } from '@clerk/remix'
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { LogoBanner } from 'components'

export default function Index() {
    const { user } = useUser()
    const { signOut } = useAuth()

    return (
        <Stack
            justify='center'
            textAlign='center'
            h='100vh'
            flex={1}
            color='white'
            gap={20}
        >
            <Stack gap={4}>
                <Heading
                    as='h1'
                    size='4xl'
                    textTransform='uppercase'
                    color='green.400'
                >
                    Bossa Nova Stack
                </Heading>

                <Text size='lg'>
                    Check the README file for instructions on how to get this
                    project deployed.
                </Text>
            </Stack>

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
                    <Heading>{user && `Hi there, ${user.firstName}.`}</Heading>

                    <Button onClick={() => signOut()}>Sign out</Button>
                </Stack>
            </SignedIn>

            <LogoBanner />
        </Stack>
    )
}
