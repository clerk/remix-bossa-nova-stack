import { Center } from '@chakra-ui/react'
import { SignIn } from '@clerk/remix'

export default function SignInRoute() {
    return (
        <Center height='100vh' p={10}>
            <SignIn routing='path' path='/sign-in' signUpUrl='/sign-up' />
        </Center>
    )
}
