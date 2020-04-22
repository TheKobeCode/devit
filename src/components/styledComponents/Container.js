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
`
