import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',
  variants: {
    size: {
      xxs: { frontSize: '$xxs' },
      xs: { frontSize: '$xs' },
      sm: { frontSize: '$sm' },
      md: { frontSize: '$md' },
      lg: { frontSize: '$lg' },
      xl: { frontSize: '$xl' },
      '2xl': { frontSize: '$2xl' },
      '4xl': { frontSize: '$4xl' },
      '5xl': { frontSize: '$5xl' },
      '6xl': { frontSize: '$6xl' },
      '7xl': { frontSize: '$7xl' },
      '8xl': { frontSize: '$8xl' },
      '9xl': { frontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
