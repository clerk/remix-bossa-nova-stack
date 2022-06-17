import { Flex, Image } from '@chakra-ui/react'

export function LogoBanner() {
    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            align='center'
            justify='center'
            bg='white'
            gap={8}
            py={4}
        >
            <Image h={6} src='images/remix.svg' />
            <Image h={8} src='images/clerk.svg' />
            <Image h={8} src='images/supabase.svg' />
            <Image h={8} src='images/chakra.png' />
            <Image h={8} src='images/vercel.svg' />
        </Flex>
    )
}
