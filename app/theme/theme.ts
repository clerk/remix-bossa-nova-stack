import { extendTheme } from '@chakra-ui/react'
import { components } from './components'
import { colors } from './foundations'

export const theme = extendTheme({
    colors,
    components,
})
