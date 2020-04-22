import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 85%;
  margin: 0 auto;

  ${props =>
    props.sticky &&
    css`
      position: sticky;
      top: 0;
    `}

  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 1024px) {
    width: 75%;
  }

  @media only screen and (min-width: 1280px) {
    width: 60%;
  }

  @media only screen and (min-width: 1440px) {
    width: 65%;
  }

  @media only screen and (min-width: 1910px) {
    width: 60%;
  }
`
