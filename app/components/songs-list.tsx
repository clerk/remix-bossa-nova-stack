import React from 'react'
import { useUser } from '@clerk/remix'
import {
    Button,
    Flex,
    Heading,
    Input,
    ListItem,
    Stack,
    UnorderedList,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Form, useTransition } from '@remix-run/react'

type Props = {
    songs: Array<{
        id: string
        user_id: string
        body: string
        created_at: string
    }>
}

export function SongsList({ songs }: Props) {
    const { user } = useUser()
    const transition = useTransition()
    const headingSize = useBreakpointValue({ base: 'sm', md: 'md' })

    const formRef = React.useRef<HTMLFormElement>(null)
    const addSongRef = React.useRef<HTMLInputElement>(null)

    const isAdding =
        transition.state === 'submitting' &&
        transition.submission.formData.get('_action') === 'create'

    React.useEffect(() => {
        if (!isAdding) {
            formRef.current?.reset()
            addSongRef.current?.focus()
        }
    }, [isAdding])

    if (!user) return null

    return (
        <Stack
            align='stretch'
            bg='white'
            color='black'
            gap={4}
            px={{ base: 8, sm: 10 }}
            py={6}
            rounded='xl'
            shadow='xl'
        >
            <Heading size={headingSize}>
                {user &&
                    `Hey ${
                        user.firstName || user.primaryEmailAddress?.emailAddress
                    }, here are your favorite songs:`}
            </Heading>

            <UnorderedList textAlign='left'>
                {songs.map(song => (
                    <ListItem key={song.id}>{song.body}</ListItem>
                ))}
            </UnorderedList>

            <Form ref={formRef} method='post'>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    gap={2}
                    w='full'
                >
                    <Input
                        name='add-song'
                        ref={addSongRef}
                        type='text'
                        placeholder='Add song'
                    />
                    <Button
                        type='submit'
                        name='_action'
                        value='create'
                        disabled={transition.state === 'submitting'}
                    >
                        Add
                    </Button>
                </Flex>
            </Form>
        </Stack>
    )
}
