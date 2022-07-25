import { Center } from '@chakra-ui/react'
import { SignUp } from '@clerk/remix'

export default function SignUpRoute() {
    return (
        <Center height='100vh' p={10}>
            <SignUp routing='path' path='/sign-up' signInUrl='/sign-in' />
        </Center>
    )
}
