import {
    ComponentDefaultProps,
    ComponentStyleConfig,
    SystemStyleObject,
} from '@chakra-ui/react'

const baseStyle: SystemStyleObject = {
    rounded: 'lg',
}

const defaultProps: ComponentDefaultProps = {
    colorScheme: 'green',
}

const sizes: Record<string, SystemStyleObject> = {
    md: {
        px: 8,
    },
}

const variants: Record<string, SystemStyleObject> = {}

export const Button: ComponentStyleConfig = {
    baseStyle,
    defaultProps,
    sizes,
    variants,
}
